require('dotenv').config();

module.exports = {
  STREAMER_TOKEN: process.env.STREAMER_TOKEN || 'default_streamer_token',
  YANDEX_TOKEN: process.env.YANDEX_TOKEN || 'default_yandex_token'
}; 