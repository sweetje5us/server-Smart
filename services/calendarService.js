const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

class CalendarService {
  constructor() {
    this.eventsPath = path.join(__dirname, '../calendar_events.json');
  }

  async getAllEvents() {
    try {
      const data = await fs.readFile(this.eventsPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        // Если файл не существует, создаем его с пустым массивом
        await fs.writeFile(this.eventsPath, '[]');
        return [];
      }
      throw error;
    }
  }

  async getEventById(eventId, userId) {
    const events = await this.getAllEvents();
    return events.find(event => event.id === eventId && event.userId === userId);
  }

  async getEventsByDate(date, userId) {
    console.log('Запрошена дата:', date);
    const events = await this.getAllEvents();
    console.log('Все события:', JSON.stringify(events, null, 2));
    
    const allEvents = [];
    
    events.forEach(event => {
      // Проверяем принадлежность события пользователю
      if (event.userId !== userId) return;

      console.log('Проверяем событие:', event);
      console.log('Сравниваем даты:', event.date, date, event.date === date);
      
      // Добавляем одноразовые события на указанную дату
      if (event.date === date) {
        console.log('Найдено событие на указанную дату');
        allEvents.push(event);
        return;
      }
      
      // Проверяем повторяющиеся события
      if (event.repeatDays && event.repeatDays.length > 0) {
        const eventDate = new Date(date);
        const dayOfWeek = eventDate.getDay();
        // В JavaScript воскресенье = 0, поэтому преобразуем в 7 для соответствия формату repeatDays
        const adjustedDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        
        console.log('День недели для даты', date, ':', adjustedDayOfWeek);
        console.log('Дни повторения события:', event.repeatDays);
        
        if (event.repeatDays.includes(adjustedDayOfWeek)) {
          console.log('Найдено повторяющееся событие на этот день недели');
          allEvents.push({
            ...event,
            date: date // Устанавливаем текущую дату для повторяющегося события
          });
        }
      }
    });
    
    console.log('Итоговые события:', allEvents);
    return allEvents;
  }

  async getUserEvents(userId) {
    const events = await this.getAllEvents();
    return events.filter(event => event.userId === userId);
  }

  async createEvent(eventData) {
    console.log('Входящие данные:', JSON.stringify(eventData, null, 2));
    console.log('Тип repeatDays:', typeof eventData.repeatDays);
    if (Array.isArray(eventData.repeatDays)) {
      console.log('Содержимое repeatDays:', eventData.repeatDays);
    }
    
    if (!eventData.userId) {
      throw new Error('User ID is required');
    }
    
    // Проверяем и преобразуем repeatDays
    let repeatDays = [];
    if (eventData.repeatDays) {
      if (Array.isArray(eventData.repeatDays)) {
        repeatDays = eventData.repeatDays
          .map(day => Number(day))
          .filter(day => !isNaN(day) && day >= 1 && day <= 7);
        console.log('Преобразованные repeatDays:', repeatDays);
      } else if (typeof eventData.repeatDays === 'string') {
        try {
          const parsed = JSON.parse(eventData.repeatDays);
          if (Array.isArray(parsed)) {
            repeatDays = parsed
              .map(day => Number(day))
              .filter(day => !isNaN(day) && day >= 1 && day <= 7);
          }
        } catch (e) {
          console.log('Ошибка парсинга repeatDays:', e);
        }
      }
    }
    
    console.log('Финальные обработанные repeatDays:', repeatDays);

    // Создаем объект события без использования spread оператора
    const newEvent = {
      id: uuidv4(),
      userId: eventData.userId,
      date: eventData.date || null,
      time: eventData.time || null,
      title: eventData.title || '',
      repeatDays: repeatDays,
      notification: {
        enabled: Boolean(eventData.notification?.enabled),
        time: typeof eventData.notification?.time === 'number' ? eventData.notification.time : null
      },
      createdAt: new Date().toISOString()
    };
    
    console.log('Создаем событие:', JSON.stringify(newEvent, null, 2));
    
    const events = await this.getAllEvents();
    events.push(newEvent);
    await fs.writeFile(this.eventsPath, JSON.stringify(events, null, 2));
    return newEvent;
  }

  async updateEvent(eventId, eventData) {
    console.log('Входящие данные для обновления:', JSON.stringify(eventData, null, 2));
    console.log('Тип repeatDays:', typeof eventData.repeatDays);
    if (Array.isArray(eventData.repeatDays)) {
      console.log('Содержимое repeatDays:', eventData.repeatDays);
    }
    
    const events = await this.getAllEvents();
    const index = events.findIndex(event => 
      event.id === eventId && event.userId === eventData.userId
    );
    
    if (index === -1) {
      throw new Error('Event not found');
    }

    const currentEvent = events[index];

    // Проверяем и преобразуем repeatDays
    let repeatDays = currentEvent.repeatDays;
    if (eventData.repeatDays !== undefined) {
      if (Array.isArray(eventData.repeatDays)) {
        repeatDays = eventData.repeatDays
          .map(day => Number(day))
          .filter(day => !isNaN(day) && day >= 1 && day <= 7);
        console.log('Преобразованные repeatDays:', repeatDays);
      } else if (typeof eventData.repeatDays === 'string') {
        try {
          const parsed = JSON.parse(eventData.repeatDays);
          if (Array.isArray(parsed)) {
            repeatDays = parsed
              .map(day => Number(day))
              .filter(day => !isNaN(day) && day >= 1 && day <= 7);
          }
        } catch (e) {
          console.log('Ошибка парсинга repeatDays при обновлении:', e);
        }
      }
    }
    
    console.log('Финальные обработанные repeatDays:', repeatDays);

    // Обновляем событие без использования spread оператора
    const updatedEvent = {
      id: currentEvent.id,
      userId: currentEvent.userId,
      date: eventData.date || currentEvent.date,
      time: eventData.time || currentEvent.time,
      title: eventData.title || currentEvent.title,
      repeatDays: repeatDays,
      notification: {
        enabled: eventData.notification?.enabled === true ? true : currentEvent.notification?.enabled ?? false,
        time: typeof eventData.notification?.time === 'number' ? eventData.notification.time : currentEvent.notification?.time ?? null
      },
      createdAt: currentEvent.createdAt,
      updatedAt: new Date().toISOString()
    };

    console.log('Обновляем событие:', JSON.stringify(updatedEvent, null, 2));
    events[index] = updatedEvent;
    await fs.writeFile(this.eventsPath, JSON.stringify(events, null, 2));
    return updatedEvent;
  }

  async deleteEvent(eventId, userId) {
    const events = await this.getAllEvents();
    const index = events.findIndex(event => 
      event.id === eventId && event.userId === userId
    );
    
    if (index === -1) {
      throw new Error('Event not found');
    }

    const deletedEvent = events.splice(index, 1)[0];
    await fs.writeFile(this.eventsPath, JSON.stringify(events, null, 2));
    return deletedEvent;
  }
}

module.exports = new CalendarService(); 