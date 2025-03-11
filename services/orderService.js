const fs = require('fs').promises;
const path = require('path');

class OrderService {
  constructor() {
    this.cookiePath = path.join(__dirname, '../cookie.txt');
    console.log('OrderService initialized with cookie path:', this.cookiePath);
  }

  async getCookies() {
    try {
      console.log('Reading cookies from:', this.cookiePath);
      const cookies = await fs.readFile(this.cookiePath, 'utf8');
      console.log('Cookies loaded successfully');
      return cookies.trim();
    } catch (error) {
      console.error('Ошибка при чтении cookie:', error);
      return '';
    }
  }

  async getOrdersTracking() {
    try {
      console.log('Starting getOrdersTracking...');
      const cookies = await this.getCookies();
      console.log('Cookies loaded, making request to Yandex Market...');
      
      const url = 'https://market-delivery.yandex.ru/api/v2/orders/tracking';
      console.log('Request URL:', url);
      
      const headers = {
        "accept": "application/json, text/plain, */*",
        "accept-language": "ru",
        "cookie": cookies,
        "referer": "https://market-delivery.yandex.ru/orders",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Safari/537.36",
        "x-app-version": "17.21.3",
        "x-platform": "dc_desktop_web"
      };
      
      console.log('Request headers:', JSON.stringify(headers, null, 2));

      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response body:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
      }

      const data = await response.json();
      console.log('Response data received successfully');
      return data;
    } catch (error) {
      console.error('Detailed error in getOrdersTracking:', error);
      throw error;
    }
  }
}

module.exports = new OrderService(); 