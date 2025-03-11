const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

class AuthService {
  constructor() {
    this.usersPath = path.join(__dirname, '../users.json');
  }

  async getAllUsers() {
    try {
      const data = await fs.readFile(this.usersPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        await fs.writeFile(this.usersPath, '[]');
        return [];
      }
      throw error;
    }
  }

  async getUserById(userId) {
    const users = await this.getAllUsers();
    return users.find(user => user.id === userId);
  }

  async getUserByLogin(login) {
    const users = await this.getAllUsers();
    return users.find(user => user.login === login);
  }

  async createUser(userData) {
    const users = await this.getAllUsers();
    
    // Проверяем, не существует ли уже пользователь с таким логином
    if (users.some(user => user.login === userData.login)) {
      throw new Error('User with this login already exists');
    }

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    const newUser = {
      id: uuidv4(),
      login: userData.login,
      password: hashedPassword,
      name: userData.name,
      settings: {
        img: userData.settings?.img || null,
        services: {
          calendar: userData.settings?.services?.calendar || {},
          notification: userData.settings?.services?.notification || {},
          tasks: userData.settings?.services?.tasks || {}
        }
      },
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    await fs.writeFile(this.usersPath, JSON.stringify(users, null, 2));
    return this.sanitizeUser(newUser);
  }

  async updateUser(userId, userData) {
    const users = await this.getAllUsers();
    const index = users.findIndex(user => user.id === userId);
    
    if (index === -1) {
      throw new Error('User not found');
    }

    // Если меняется логин, проверяем его уникальность
    if (userData.login && userData.login !== users[index].login) {
      if (users.some(user => user.login === userData.login)) {
        throw new Error('User with this login already exists');
      }
    }

    // Если меняется пароль, хешируем новый
    if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, 10);
    }

    users[index] = {
      ...users[index],
      ...userData,
      settings: {
        img: userData.settings?.img ?? users[index].settings.img,
        services: {
          calendar: userData.settings?.services?.calendar ?? users[index].settings.services.calendar,
          notification: userData.settings?.services?.notification ?? users[index].settings.services.notification,
          tasks: userData.settings?.services?.tasks ?? users[index].settings.services.tasks
        }
      },
      updatedAt: new Date().toISOString()
    };

    await fs.writeFile(this.usersPath, JSON.stringify(users, null, 2));
    return this.sanitizeUser(users[index]);
  }

  async deleteUser(userId) {
    const users = await this.getAllUsers();
    const index = users.findIndex(user => user.id === userId);
    
    if (index === -1) {
      throw new Error('User not found');
    }

    const deletedUser = users.splice(index, 1)[0];
    await fs.writeFile(this.usersPath, JSON.stringify(users, null, 2));
    return this.sanitizeUser(deletedUser);
  }

  async authenticateUser(login, password) {
    const user = await this.getUserByLogin(login);
    if (!user) {
      throw new Error('User not found');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid password');
    }

    return this.sanitizeUser(user);
  }

  // Удаляет чувствительные данные из объекта пользователя
  sanitizeUser(user) {
    const { password, ...sanitizedUser } = user;
    return sanitizedUser;
  }
}

module.exports = new AuthService(); 