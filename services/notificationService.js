const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

class NotificationService {
  constructor() {
    this.notificationsPath = path.join(__dirname, '../notifications.json');
  }

  async getAllNotifications() {
    try {
      const data = await fs.readFile(this.notificationsPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        // Если файл не существует, создаем его с пустым массивом
        await fs.writeFile(this.notificationsPath, '[]');
        return [];
      }
      throw error;
    }
  }

  async getNotificationsByDate(date, userId) {
    const notifications = await this.getAllNotifications();
    return notifications.filter(notification => 
      notification.eventDate === date && notification.userId === userId
    );
  }

  async getUserNotifications(userId) {
    const notifications = await this.getAllNotifications();
    return notifications.filter(notification => notification.userId === userId);
  }

  async createNotification(notificationData) {
    const notifications = await this.getAllNotifications();
    
    if (!notificationData.userId) {
      throw new Error('User ID is required');
    }
    
    const newNotification = {
      id: uuidv4(),
      userId: notificationData.userId,
      eventDate: notificationData.eventDate,
      eventTime: notificationData.eventTime,
      title: notificationData.title,
      source: notificationData.source,
      link: notificationData.link || null,
      isRead: false,
      createdAt: new Date().toISOString()
    };

    notifications.push(newNotification);
    await fs.writeFile(this.notificationsPath, JSON.stringify(notifications, null, 2));
    return newNotification;
  }

  async markAsRead(notificationId, userId) {
    const notifications = await this.getAllNotifications();
    const index = notifications.findIndex(notification => 
      notification.id === notificationId && notification.userId === userId
    );
    
    if (index === -1) {
      throw new Error('Notification not found');
    }

    notifications[index] = {
      ...notifications[index],
      isRead: true,
      readAt: new Date().toISOString()
    };

    await fs.writeFile(this.notificationsPath, JSON.stringify(notifications, null, 2));
    return notifications[index];
  }

  async deleteNotification(notificationId, userId) {
    const notifications = await this.getAllNotifications();
    const index = notifications.findIndex(notification => 
      notification.id === notificationId && notification.userId === userId
    );
    
    if (index === -1) {
      throw new Error('Notification not found');
    }

    const deletedNotification = notifications.splice(index, 1)[0];
    await fs.writeFile(this.notificationsPath, JSON.stringify(notifications, null, 2));
    return deletedNotification;
  }

  async deleteNotificationsBySource(source, userId) {
    const notifications = await this.getAllNotifications();
    const remainingNotifications = notifications.filter(notification => 
      notification.source !== source || notification.userId !== userId
    );
    await fs.writeFile(this.notificationsPath, JSON.stringify(remainingNotifications, null, 2));
    return notifications.length - remainingNotifications.length; // Возвращаем количество удаленных уведомлений
  }
}

module.exports = new NotificationService(); 