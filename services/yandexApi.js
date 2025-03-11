const axios = require('axios');
const fs = require('fs');
const { YANDEX_TOKEN } = require('../config/tokens');

class YandexApiService {
  constructor() {
    this.token = YANDEX_TOKEN;
    this.cookiePath = './cookie.txt';
  }

  async getCookies() {
    try {
      return fs.readFileSync(this.cookiePath, 'utf8');
    } catch (error) {
      console.error('Ошибка при чтении cookie:', error);
      return '';
    }
  }

  async sendDeviceAction(device_id, action_type, instance, value) {
    const cookies = await this.getCookies();
    try {
      const response = await axios.post(
        'https://api.iot.yandex.net/v1.0/devices/actions',
        {
          devices: [{
            id: device_id,
            actions: [{
              type: action_type,
              state: {
                instance,
                value
              }
            }]
          }]
        },
        {
          headers: {
            'Accept': '*/*',
            'Accept-Language': 'ru,en;q=0.9,la;q=0.8',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`,
            'Cookie': cookies,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Safari/537.36',
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error sending data to Yandex API:', error);
      throw error;
    }
  }

  async getUserDevices() {
    const cookies = await this.getCookies();
    try {
      const response = await axios.get('https://iot.quasar.yandex.ru/m/v3/user/devices', {
        headers: {
          'Accept': '*/*',
          'Accept-Language': 'ru,en;q=0.9,la;q=0.8',
          'Connection': 'keep-alive',
          'Cookie': cookies,
          'Origin': 'https://yandex.ru',
          'Referer': 'https://yandex.ru/',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Safari/537.36',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching data from Yandex API:', error);
      throw error;
    }
  }
}

module.exports = new YandexApiService(); 