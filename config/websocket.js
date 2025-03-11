const WebSocket = require('ws');
const yandexApi = require('../services/yandexApi');
const fs = require('fs').promises;
const path = require('path');

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', async (ws) => {
    console.log('Client connected to WebSocket');

    try {
      // Сначала пытаемся прочитать существующие данные
      const responsePath = path.join(__dirname, '../yandex_response.js');
      try {
        const savedData = await fs.readFile(responsePath, 'utf8');
        console.log('Sending saved data from yandex_response.js');
        ws.send(savedData);
      } catch (error) {
        console.log('No saved data found, fetching new data');
      }

      // Затем получаем свежие данные
      const data = await yandexApi.getUserDevices();
      await fs.writeFile(responsePath, JSON.stringify(data, null, 2));
      ws.send(JSON.stringify({ type: 'yandex', data }));
    } catch (error) {
      console.error('Error fetching initial data:', error);
      ws.send(JSON.stringify({ type: 'error', message: 'Failed to fetch initial data' }));
    }

    // Обработка сообщений от клиента
    ws.on('message', async (message) => {
      try {
        const data = JSON.parse(message);
        const { device_id, action_type, instance, value } = data;

        const response = await yandexApi.sendDeviceAction(device_id, action_type, instance, value);
        ws.send(JSON.stringify({ type: 'response', status: 'success', data: response }));
        
        // Обновляем данные после успешного действия
        const updatedDevices = await yandexApi.getUserDevices();
        await fs.writeFile(path.join(__dirname, '../yandex_response.js'), JSON.stringify(updatedDevices, null, 2));
        ws.send(JSON.stringify({ type: 'yandex', data: updatedDevices }));
      } catch (error) {
        console.error('Error handling WebSocket message:', error);
        ws.send(JSON.stringify({ type: 'error', message: 'Failed to process action' }));
      }
    });

    ws.on('close', () => {
      console.log('Client disconnected from WebSocket');
    });

    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
    });
  });

  return wss;
}

module.exports = setupWebSocket; 