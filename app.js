const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const hostname = '192.168.0.21';
const port = '8080';
const app = express();
const path = require('path');

const Streamer_token = 'eyJraWQiOiJkZWZhdWx0X3Byb2R1Y3Rpb24iLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ2Y2Zyb250X3Byb2R1Y3Rpb24iLCJzdWIiOjE5MjgwOTQsImlwIjoiMTAuNzguMzMuMiIsImNoYW5uZWwiOiJjYWFiNGU1MC1mOTYyLTQxZjAtYmM0NC1lN2U2NGM3MzBiYmQiLCJleHAiOjE3MzgxMTYwMDB9.lvcXDqe1239OseHyjVzxYCncRfk07cSEKHq3rGrNgiI';
const x_token = '283d6818f32018820a47adc931f5a6eda26db185:1738751022';

// Объявляем переменную для хранения текста
let documentText = ''// Определяем путь к документу
const filePath = path.join(__dirname, 'cookie.txt');
const getTaskById = async (task_id) => {
  try {
    // Читаем файл task.json
    const data = fs.readFileSync('tasks.json', 'utf8');;
    
    const tasks = JSON.parse(data); // Парсим JSON-данные

    // Ищем задачу по task_id
    const task = tasks.find(task => task.id === task_id); // Предполагается, что у каждой задачи есть поле id

    return task || null; // Возвращаем задачу или null, если не найдена
  } catch (error) {
    console.error('Error fetching task:', error);
    return null; // Возвращаем null в случае ошибки
  }
};


// Читаем текст из файла
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка при чтении файла:', err);
    return;
  }

  // Сохраняем текст в переменную
  documentText = data;

  // Выводим текст в консоль
  console.log('Текст из документа:', documentText);
});

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Создаем WebSocket сервер
const wss = new WebSocket.Server({ noServer: true });

// Обработка подключения WebSocket
wss.on('connection', (ws) => {
  console.log('Client connected');
  fs.readFile('yandex_response.js', 'utf8', (err, data) => {
    if (!err) {
      ws.send(data);
    } else {
      console.error('Ошибка при чтении файла yandex_response.js:', err);
      ws.send(JSON.stringify({ error: 'Failed to read yandex_response.js' }));
    }
  });

  // Обработка сообщений от клиента
  ws.on('message', async (message) => {
    const data = JSON.parse(message);
    const { device_id, action_type, instance, value } = data;

    // Отправка запроса к API Яндекса
    try {
      const response = await axios.post(`https://iot.quasar.yandex.ru/m/user/devices/${device_id}/actions`, {
        actions: [{
          type: action_type,
          state: {
            instance: instance, // Установите значение состояния
            value: value
          }
        }]
      }, {
        headers: {
          'Accept': '*/*',
          'Accept-Language': 'ru,en;q=0.9,la;q=0.8',
          'Content-Type': 'application/json',
          'x-csrf-token': `${x_token}`,
          'Cookie': documentText, // Замените на ваши куки
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Safari/537.36',
        }
      });

      console.log(`Response status: ${response.status}`);
      console.log('Response data:', response.data);
      await fetchDataFromAPI(); 
      // Отправляем ответ клиенту
      ws.send(JSON.stringify({ type: 'response', status: 'success', data: response.data }));
    } catch (error) {
      console.error('Error sending data to Yandex API:', error);
      ws.send(JSON.stringify({ type: 'yandex', status: 'error', message: 'Failed to send action' }));
    }
  });

  // Обработка отключения клиента
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Функция для получения данных из API
const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get('https://iot.quasar.yandex.ru/m/v3/user/devices', {
      headers: {
        'Accept': '*/*',
        'Accept-Language': 'ru,en;q=0.9,la;q=0.8',
        'Connection': 'keep-alive',
        'Cookie': documentText, // Замените на ваши куки
        'Origin': 'https://yandex.ru',
        'Referer': 'https://yandex.ru/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Safari/537.36',
      },
    });
    
    // Сохраняем ответ в файл yandex_response.js
    fs.writeFileSync('yandex_response.js', JSON.stringify(response.data, null, 2));

    console.log(`Response status: ${response.status}`);
    console.log('Response data:', response.data);

    // Отправляем данные всем подключенным клиентам
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: 'yandex', data: response.data }));
      }
    });
  } catch (error) {
    console.error('Error fetching data from API:', error);
  }
};

// Запускаем периодический запрос каждые 15 секунд
setInterval(fetchDataFromAPI, 15000);



app.get('/api/orders/tracking', async (req, res) => {
  try {
    const response = await fetch('https://market-delivery.yandex.ru/api/v2/orders/tracking', {
      method: 'GET',
      headers: {
        "accept": "application/json, text/plain, */*",
        "accept-language": "ru",
        "cookie": "_yasc=b2MuMqUMGkptwuLAw0Z2nctSFmNsarf/kpJTCX5FVE8itOgeFjVeGaBecSgrS1Usx3JoCIUyKocgVh2Vn8UnjKk=; Eats-Session=0a8335cc08924a569c0843ae519b6d3d",
        "priority": "u=1, i",
        "referer": "https://market-delivery.yandex.ru/orders",
        "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"YaBrowser\";v=\"24.10\", \"Yowser\";v=\"2.5\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version-list": "\"Chromium\";v=\"128.0.6613.186\", \"Not;A=Brand\";v=\"24.0.0.0\", \"YaBrowser\";v=\"24.10.4.756\", \"Yowser\";v=\"2.5\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"15.0.0\"",
        "sec-ch-ua-wow64": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Safari/537.36",
        "x-app-version": "17.21.3",
        "x-client-session": "m4bk524o-espxy804v5-2zn8phik1h6-24sec1jgbap",
        "x-device-id": "m1brd8jc-8kbz7y5hfcs-e6nu36gyy8-1piedm6tjhsh",
        "x-platform": "dc_desktop_web",
        "x-taxi": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Safari/537.36 platform=dc_desktop_web",
        "x-ya-coordinates": "latitude=57.99887,longitude=56.27047",
        "x-ya-user-location": "latitude=57.99909210205078,longitude=56.2713508605957"
      },
    });

    if (!response.ok) {
      return res.status(response.status).send('Error fetching data');
    }

    const data = await response.json();
    res.json(data); // Send the data back to the client
  } catch (error) {

    res.status(500).send('Server Error');
  }
});

// Получение данных о задачах
app.get('/api/tasks', (req, res) => {
  try {
    const content = fs.readFileSync('tasks.json', 'utf8');
    const tasks = JSON.parse(content);
    res.send(tasks);
  } catch (error) {
    console.error('Ошибка при чтении задач:', error);
    res.status(500).send('Ошибка сервера');
  }
});
app.get('/api/tasks/:task_id', (req, res) => {
  const { task_id } = req.params;

  try {
    const content = fs.readFileSync('tasks.json', 'utf8');
    const tasks = JSON.parse(content);

    // Ищем задачу по task_id
    const task = tasks.find(task => task.task_id === task_id); // Предполагается, что у каждой задачи есть поле task_id

    if (!task) {
      return res.status(404).send('Task not found');
    }

    res.json(task);
  } catch (error) {
    console.error('Ошибка при чтении задач:', error);
    res.status(500).send('Ошибка сервера');
  }
});
app.get('/api/boards', (req, res) => {
  try {
    const content = fs.readFileSync('boards.json', 'utf8');
    const boards = JSON.parse(content);
    res.send(boards);
  } catch (error) {
    console.error('Ошибка при чтении досок:', error);
    res.status(500).send('Ошибка сервера');
  }
});

// Создание новой доски
app.post('/api/boards', (req, res) => {
  if (!req.body || !req.body.title) {
    return res.status(400).send('Название доски не указано');
  }

  const newBoard = {
    title: req.body.title
  };

  try {
    const data = fs.readFileSync('boards.json', 'utf8');
    const boards = JSON.parse(data);
    boards.push(newBoard);
    fs.writeFileSync('boards.json', JSON.stringify(boards, null, 2)); // Сохраняем с отступами для удобства чтения
    res.status(201).send(newBoard);
  } catch (error) {
    console.error('Ошибка при создании доски:', error);
    res.status(500).send('Ошибка сервера');
  }
});


// Создание новой задачи
app.post('/api/tasks', (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const newTask = {
    task_id: req.body.task_id,
    kanban_id: req.body.kanban_id,
    priority: req.body.priority,
    name: req.body.name,
    assignee: req.body.assignee,
    description: req.body.description,
    status: req.body.status,
    backgroundColor: req.body.backgroundColor || '#FFFFFF'
  };

  try {
    const data = fs.readFileSync('tasks.json', 'utf8');
    const tasks = JSON.parse(data);
    tasks.push(newTask);
    fs.writeFileSync('tasks.json', JSON.stringify(tasks));
    res.status(201).send(newTask);
  } catch (error) {
    console.error('Ошибка при создании задачи:', error);
    res.status(500).send('Ошибка сервера');
  }
});

// Обновление задачи
app.put('/api/tasks', (req, res) => {
  console.log('Received request body:', req.body);
  if (!req.body.task_id) {
    return res.status(400).json({ error: 'task_id is missing' });
  }

  try {
    const data = fs.readFileSync('tasks.json', 'utf8');
    const tasks = JSON.parse(data);
    const taskIndex = tasks.findIndex(task => task.task_id === req.body.task_id);

    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Обновление задачи
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    fs.writeFileSync('tasks.json', JSON.stringify(tasks));
    res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Удаление задачи
app.delete('/api/tasks/:id', (req, res) => {
  const id = req.params.id;
  console.log('Received request body:', req.body);
  try {
    const data = fs.readFileSync('tasks.json', 'utf8');
    const tasks = JSON.parse(data);
    const index = tasks.findIndex(task => task.task_id == id);

    if (index > -1) {
      const deletedTask = tasks.splice(index, 1)[0];
      fs.writeFileSync('tasks.json', JSON.stringify(tasks));
      res.send(deletedTask);
    } else {
      res.status(404).send('Task not found');
    }
  } catch (error) {
    console.error('Ошибка при удалении задачи:', error);
    res.status(500).send('Ошибка сервера');
  }
});

// Проксирование запросов к Yandex API
app.use('/yandex/api', createProxyMiddleware({
  target: 'https://api.iot.yandex.net', // Укажите целевой сервер
  changeOrigin: true,
  pathRewrite: {
    '^/yandex/api': '/v1.0/devices/actions', // Удаляем /api из пути перед отправкой на целевой сервер
  },
  onProxyReq: (proxyReq, req, res) => {
    // Добавление заголовка авторизации
    proxyReq.setHeader('Authorization', `Bearer YOUR_ACCESS_TOKEN`); // Замените YOUR_ACCESS_TOKEN на ваш токен
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy error');
  },
}));

// Создание HTTP сервера
const server = http.createServer(app);
// Обработчик для стриминга видео
const videoWebSocketUrl = `wss://live-vdk4.camera.rt.ru/stream/004acf75-a06b-4731-8949-ef801caa3412/1734261034.mp4?mp4-fragment-length=0.5&mp4-use-speed=0&mp4-afiller=1&token=${Streamer_token}`;

// Создаем WebSocket клиент для видео
const videoWsClient = new WebSocket(videoWebSocketUrl);

videoWsClient.on('open', () => {
  console.log('Connected to video source');
});

// Обработка сообщений от видео WebSocket
videoWsClient.on('message', (data) => {
  // Вы можете обрабатывать данные видео здесь
  // Например, отправить их на всех подключенных клиентам
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'video', data: data }));
    }
  });
});

// Обработка ошибок
videoWsClient.on('error', (error) => {
  console.error('Video WebSocket error:', error);
});

// Обработка WebSocket соединений
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

// Запуск сервера
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
