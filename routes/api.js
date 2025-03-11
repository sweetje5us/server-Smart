const express = require('express');
const router = express.Router();
const taskService = require('../services/taskService');
const yandexApi = require('../services/yandexApi');
const videoStreamService = require('../services/videoStreamService');
const orderService = require('../services/orderService');
const calendarService = require('../services/calendarService');
const notificationService = require('../services/notificationService');
const authService = require('../services/authService');

// Тестовый маршрут
router.get('/test', (req, res) => {
  res.json({ message: 'API работает' });
});

// Маршруты для задач
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении задач' });
  }
});

router.get('/tasks/:taskId', async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.taskId);
    if (!task) return res.status(404).json({ error: 'Задача не найдена' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении задачи' });
  }
});

router.post('/tasks', async (req, res) => {
  try {
    const newTask = await taskService.createTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при создании задачи' });
  }
});

router.put('/tasks', async (req, res) => {
  try {
    const updatedTask = await taskService.updateTask(req.body);
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при обновлении задачи' });
  }
});

router.delete('/tasks/:taskId', async (req, res) => {
  try {
    const deletedTask = await taskService.deleteTask(req.params.taskId);
    res.json(deletedTask);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при удалении задачи' });
  }
});

// Маршруты для досок
router.get('/boards', async (req, res) => {
  try {
    const boards = await taskService.getAllBoards();
    res.json(boards);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении досок' });
  }
});

router.post('/boards', async (req, res) => {
  try {
    const newBoard = await taskService.createBoard(req.body);
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при создании доски' });
  }
});

// Маршрут для получения токена стримера
router.get('/streamertoken', async (req, res) => {
  try {
    const tokenData = await videoStreamService.getNewToken();
    res.json({ token: tokenData.data.items[1].streamer_token });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении токена' });
  }
});

// Маршрут для отслеживания заказов
router.get('/orders/tracking', async (req, res) => {
  console.log('Получен запрос на /orders/tracking');
  try {
    console.log('Получаем данные о заказах...');
    const data = await orderService.getOrdersTracking();
    console.log('Данные успешно получены:', data);
    res.json(data);
  } catch (error) {
    console.error('Подробная ошибка:', error);
    res.status(500).json({ 
      error: 'Ошибка при получении данных о заказах',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Маршруты для календаря
router.get('/calendar/events', async (req, res) => {
  try {
    console.log('Получен запрос на получение событий календаря');
    console.log('Параметры запроса:', req.query);
    
    const { date, userId } = req.query;
    
    if (!userId) {
      return res.status(400).json({ error: 'Необходимо указать userId' });
    }

    let events;
    if (date) {
      console.log('Поиск событий по дате:', date);
      events = await calendarService.getEventsByDate(date, userId);
    } else {
      console.log('Получение всех событий пользователя');
      events = await calendarService.getUserEvents(userId);
    }
    
    console.log('Найденные события:', events);
    res.json(events);
  } catch (error) {
    console.error('Ошибка при получении событий календаря:', error);
    res.status(500).json({ error: 'Ошибка при получении событий календаря' });
  }
});

router.get('/calendar/events/:eventId', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ error: 'Необходимо указать userId' });
    }

    const event = await calendarService.getEventById(req.params.eventId, userId);
    if (!event) {
      return res.status(404).json({ error: 'Событие не найдено' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении события' });
  }
});

router.post('/calendar/events', async (req, res) => {
  try {
    console.log('Получен POST запрос для создания события:', req.body);
    const { date, time, title, repeatDays, notification, userId } = req.body;
    
    if (!date || !time || !title || !userId) {
      return res.status(400).json({ 
        error: 'Необходимо указать дату, время, название события и userId' 
      });
    }

    const newEvent = await calendarService.createEvent({
      date,
      time,
      title,
      repeatDays,
      notification,
      userId
    });
    
    console.log('Создано новое событие:', newEvent);
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Ошибка при создании события:', error);
    res.status(500).json({ error: 'Ошибка при создании события', details: error.message });
  }
});

router.put('/calendar/events/:eventId', async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: 'Необходимо указать userId' });
    }

    const updatedEvent = await calendarService.updateEvent(req.params.eventId, req.body);
    res.json(updatedEvent);
  } catch (error) {
    if (error.message === 'Event not found') {
      res.status(404).json({ error: 'Событие не найдено' });
    } else {
      res.status(500).json({ error: 'Ошибка при обновлении события' });
    }
  }
});

router.delete('/calendar/events/:eventId', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ error: 'Необходимо указать userId' });
    }

    const deletedEvent = await calendarService.deleteEvent(req.params.eventId, userId);
    res.json(deletedEvent);
  } catch (error) {
    if (error.message === 'Event not found') {
      res.status(404).json({ error: 'Событие не найдено' });
    } else {
      res.status(500).json({ error: 'Ошибка при удалении события' });
    }
  }
});

// Маршруты для уведомлений
router.get('/notifications', async (req, res) => {
  try {
    console.log('Получен запрос на получение уведомлений');
    console.log('Параметры запроса:', req.query);
    
    const { date, userId } = req.query;
    
    if (!userId) {
      return res.status(400).json({ error: 'Необходимо указать userId' });
    }

    let notifications;
    if (date) {
      console.log('Поиск уведомлений по дате:', date);
      notifications = await notificationService.getNotificationsByDate(date, userId);
    } else {
      console.log('Получение всех уведомлений пользователя');
      notifications = await notificationService.getUserNotifications(userId);
    }
    
    console.log('Найденные уведомления:', notifications);
    res.json(notifications);
  } catch (error) {
    console.error('Ошибка при получении уведомлений:', error);
    res.status(500).json({ error: 'Ошибка при получении уведомлений' });
  }
});

router.post('/notifications', async (req, res) => {
  try {
    console.log('Получен POST запрос для создания уведомления:', req.body);
    const { eventDate, eventTime, title, source, link, userId } = req.body;
    
    if (!eventDate || !eventTime || !title || !source || !userId) {
      return res.status(400).json({ 
        error: 'Необходимо указать дату события, время события, название, источник и userId' 
      });
    }

    const newNotification = await notificationService.createNotification({
      eventDate,
      eventTime,
      title,
      source,
      link,
      userId
    });
    
    console.log('Создано новое уведомление:', newNotification);
    res.status(201).json(newNotification);
  } catch (error) {
    console.error('Ошибка при создании уведомления:', error);
    res.status(500).json({ error: 'Ошибка при создании уведомления', details: error.message });
  }
});

router.patch('/notifications/:notificationId/read', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ error: 'Необходимо указать userId' });
    }

    const notification = await notificationService.markAsRead(req.params.notificationId, userId);
    res.json(notification);
  } catch (error) {
    if (error.message === 'Notification not found') {
      res.status(404).json({ error: 'Уведомление не найдено' });
    } else {
      res.status(500).json({ error: 'Ошибка при обновлении уведомления' });
    }
  }
});

router.delete('/notifications/:notificationId', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ error: 'Необходимо указать userId' });
    }

    const deletedNotification = await notificationService.deleteNotification(req.params.notificationId, userId);
    res.json(deletedNotification);
  } catch (error) {
    if (error.message === 'Notification not found') {
      res.status(404).json({ error: 'Уведомление не найдено' });
    } else {
      res.status(500).json({ error: 'Ошибка при удалении уведомления' });
    }
  }
});

router.delete('/notifications/source/:source', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ error: 'Необходимо указать userId' });
    }

    const deletedCount = await notificationService.deleteNotificationsBySource(req.params.source, userId);
    res.json({ message: `Удалено ${deletedCount} уведомлений` });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при удалении уведомлений' });
  }
});

// Маршруты для авторизации
router.post('/auth/register', async (req, res) => {
  try {
    console.log('Получен запрос на регистрацию:', req.body);
    const { login, password, name, settings } = req.body;
    
    if (!login || !password || !name) {
      return res.status(400).json({ 
        error: 'Необходимо указать логин, пароль и имя пользователя' 
      });
    }

    const newUser = await authService.createUser({
      login,
      password,
      name,
      settings
    });
    
    console.log('Создан новый пользователь:', newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    if (error.message === 'User with this login already exists') {
      res.status(400).json({ error: 'Пользователь с таким логином уже существует' });
    } else {
      res.status(500).json({ error: 'Ошибка при регистрации', details: error.message });
    }
  }
});

router.post('/auth/login', async (req, res) => {
  try {
    console.log('Получен запрос на вход:', req.body);
    const { login, password } = req.body;
    
    if (!login || !password) {
      return res.status(400).json({ 
        error: 'Необходимо указать логин и пароль' 
      });
    }

    const user = await authService.authenticateUser(login, password);
    console.log('Успешный вход пользователя:', user);
    res.json(user);
  } catch (error) {
    console.error('Ошибка при входе:', error);
    if (error.message === 'User not found') {
      res.status(404).json({ error: 'Пользователь не найден' });
    } else if (error.message === 'Invalid password') {
      res.status(401).json({ error: 'Неверный пароль' });
    } else {
      res.status(500).json({ error: 'Ошибка при входе', details: error.message });
    }
  }
});

router.get('/auth/users/:userId', async (req, res) => {
  try {
    const user = await authService.getUserById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении данных пользователя' });
  }
});

router.put('/auth/users/:userId', async (req, res) => {
  try {
    console.log('Получен запрос на обновление пользователя:', req.body);
    const updatedUser = await authService.updateUser(req.params.userId, req.body);
    console.log('Обновлены данные пользователя:', updatedUser);
    res.json(updatedUser);
  } catch (error) {
    console.error('Ошибка при обновлении пользователя:', error);
    if (error.message === 'User not found') {
      res.status(404).json({ error: 'Пользователь не найден' });
    } else if (error.message === 'User with this login already exists') {
      res.status(400).json({ error: 'Пользователь с таким логином уже существует' });
    } else {
      res.status(500).json({ error: 'Ошибка при обновлении пользователя', details: error.message });
    }
  }
});

router.delete('/auth/users/:userId', async (req, res) => {
  try {
    const deletedUser = await authService.deleteUser(req.params.userId);
    res.json(deletedUser);
  } catch (error) {
    if (error.message === 'User not found') {
      res.status(404).json({ error: 'Пользователь не найден' });
    } else {
      res.status(500).json({ error: 'Ошибка при удалении пользователя' });
    }
  }
});

module.exports = router; 