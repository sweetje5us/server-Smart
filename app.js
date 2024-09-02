
const { createProxyMiddleware } = require('http-proxy-middleware')
var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})



app.use(cors(corsOptions), createProxyMiddleware({
  
  router: (req) => new URL(req.path.substring(1)),
  pathRewrite: (path, req) => (new URL(req.path.substring(1))).pathname,
  changeOrigin: true,
  logger: console
}))


app.listen(8088, () => {
  console.info('proxy server is running on port 8088')
})