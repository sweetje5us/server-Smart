const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const path = require('path');
require('dotenv').config();

const apiRoutes = require('./routes/api');
const setupWebSocket = require('./config/websocket');

const hostname = '192.168.0.24';
const port = '8080';
const app = express();

// Middleware для логирования запросов
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем маршруты API
console.log('Регистрируем API маршруты...');
app.use('/api', apiRoutes);
console.log('API маршруты зарегистрированы');

// Обработчик ошибок
app.use((err, req, res, next) => {
  console.error('Ошибка приложения:', err);
  res.status(500).json({
    error: 'Внутренняя ошибка сервера',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Обработчик для несуществующих маршрутов
app.use((req, res) => {
  console.log(`404 - Маршрут не найден: ${req.method} ${req.url}`);
  res.status(404).json({ error: 'Маршрут не найден' });
});

// Создаем HTTP сервер
const server = http.createServer(app);

// Настраиваем WebSocket
const wss = setupWebSocket(server);

// Запускаем сервер
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
  console.log(`WebSocket server running at ws://${hostname}:${port}`);
  console.log('Доступные маршруты:');
  app._router.stack.forEach(middleware => {
    if (middleware.route) {
      console.log(`${Object.keys(middleware.route.methods)} ${middleware.route.path}`);
    } else if (middleware.name === 'router') {
      middleware.handle.stack.forEach(handler => {
        if (handler.route) {
          console.log(`${Object.keys(handler.route.methods)} /api${handler.route.path}`);
        }
      });
    }
  });
});
