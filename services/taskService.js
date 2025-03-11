const fs = require('fs').promises;
const path = require('path');

class TaskService {
  constructor() {
    this.tasksPath = path.join(__dirname, '../tasks.json');
    this.boardsPath = path.join(__dirname, '../boards.json');
  }

  async getAllTasks() {
    try {
      const data = await fs.readFile(this.tasksPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Ошибка при чтении задач:', error);
      throw error;
    }
  }

  async getTaskById(taskId) {
    try {
      const tasks = await this.getAllTasks();
      return tasks.find(task => task.task_id === taskId);
    } catch (error) {
      console.error('Ошибка при получении задачи:', error);
      throw error;
    }
  }

  async createTask(taskData) {
    try {
      const tasks = await this.getAllTasks();
      tasks.push(taskData);
      await fs.writeFile(this.tasksPath, JSON.stringify(tasks, null, 2));
      return taskData;
    } catch (error) {
      console.error('Ошибка при создании задачи:', error);
      throw error;
    }
  }

  async updateTask(taskData) {
    try {
      const tasks = await this.getAllTasks();
      const index = tasks.findIndex(task => task.task_id === taskData.task_id);
      if (index === -1) throw new Error('Task not found');
      
      tasks[index] = { ...tasks[index], ...taskData };
      await fs.writeFile(this.tasksPath, JSON.stringify(tasks, null, 2));
      return tasks[index];
    } catch (error) {
      console.error('Ошибка при обновлении задачи:', error);
      throw error;
    }
  }

  async deleteTask(taskId) {
    try {
      const tasks = await this.getAllTasks();
      const index = tasks.findIndex(task => task.task_id === taskId);
      if (index === -1) throw new Error('Task not found');
      
      const deletedTask = tasks.splice(index, 1)[0];
      await fs.writeFile(this.tasksPath, JSON.stringify(tasks, null, 2));
      return deletedTask;
    } catch (error) {
      console.error('Ошибка при удалении задачи:', error);
      throw error;
    }
  }

  async getAllBoards() {
    try {
      const data = await fs.readFile(this.boardsPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Ошибка при чтении досок:', error);
      throw error;
    }
  }

  async createBoard(boardData) {
    try {
      const boards = await this.getAllBoards();
      boards.push(boardData);
      await fs.writeFile(this.boardsPath, JSON.stringify(boards, null, 2));
      return boardData;
    } catch (error) {
      console.error('Ошибка при создании доски:', error);
      throw error;
    }
  }
}

module.exports = new TaskService(); 