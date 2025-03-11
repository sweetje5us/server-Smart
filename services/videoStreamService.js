const WebSocket = require('ws');
const axios = require('axios');
const { STREAMER_TOKEN } = require('../config/tokens');

class VideoStreamService {
  constructor() {
    this.token = STREAMER_TOKEN;
    this.wsClients = new Set();
  }

  async getNewToken() {
    try {
      const response = await axios.get('https://vc.key.rt.ru/api/v1/cameras?limit=100&offset=0', {
        headers: {
          'Authorization': `Bearer ${this.token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении токена:', error);
      throw error;
    }
  }

  setupVideoStream(wss) {
    const videoWebSocketUrl = `wss://live-vdk4.camera.rt.ru/stream/004acf75-a06b-4731-8949-ef801caa3412/1734261034.mp4?mp4-fragment-length=0.5&mp4-use-speed=0&mp4-afiller=1&token=${this.token}`;
    
    const videoWsClient = new WebSocket(videoWebSocketUrl);

    videoWsClient.on('open', () => {
      console.log('Connected to video source');
    });

    videoWsClient.on('message', (data) => {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'video', data: data }));
        }
      });
    });

    videoWsClient.on('error', (error) => {
      console.error('Video WebSocket error:', error);
    });

    return videoWsClient;
  }
}

module.exports = new VideoStreamService(); 