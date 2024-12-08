
const { createProxyMiddleware } = require('http-proxy-middleware')
var express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var fs = require('fs');
var cors = require('cors')
const hostname ='192.168.0.19';
const http = require('http');
var port ='8080';
var app = express()

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.static(__dirname + '/public'));
app.get('/api/tasks', function (req, res) {
  var content = fs.readFileSync('tasks.json', 'utf8');
  var users = JSON.parse(content);
  res.send(users);
});
app.get('/api/tasks/:id', function (req, res) {
  var id = req.params.id; // получаем id
  var content = fs.readFileSync('tasks.json', 'utf8');
  var users = JSON.parse(content);
  var user = null;
  // находим в массиве пользователя по id
  for (var i = 0; i < users.length; i++) {
      if (users[i].id == id) {
          user = users[i];
          break;
      }
  }
  // отправляем пользователя
  if (user) {
      res.send(user);
  } else {
      res.status(404).send();
  }
});
app.post('/api/orders', async (req, res) => {
  // Заголовки запроса
  const myHeaders = {
      "accept": "application/json",
      "accept-language": "ru,en;q=0.9,la;q=0.8",
      "content-type": "application/json",
      "cookie": "__Secure-ab-group=25; __Secure-ext_xcid=caba05e591e3d5ffadc2829bcb0817a5; ob_theme=SYSTEM; __Secure-ETC=788db9f23fce93652855fdbbaec927f9; is_cookies_accepted=1; ADDRESSBOOKBAR_WEB_CLARIFICATION=1733408058; __Secure-user-id=43257616; abt_data=7.0-gXzzuyQwO1I_qYdEkaFgj-cDPaWkeDg7GZMQNFoGUzwvJnj81wr9SMPpV64Z3NmlVh9dyRe1hfQryvZwrsczvt2kiuAu1yxrlmHFRrGwMqjUzivN8V6PmRgOLs6u1-E_4jMRX9W_gXmLKeggwumlVTKzR1G1-7x__sCf2OduIQmyqWCpX9sEYmBJJZF-bfqx3uLpFNveY38dB8GP545oezVmLes1yloyCPoOU6lhBE0EVrevvgR4bz8uvNDSrTg-I3Qz6jPgsFzrjuDjWBxuBU0FfPxs7rQCP8VxcrmzeQoCz3EVRqlHt2W7glmVtRrV-Fdc97xG0FPKb3No5c6n_84D19t6cWOuaOONe42SqRH3iNgdk; TS013595b9=0187c00a181b9d062ce73fb2d452f70bb69e2a25d8d5ee3ee2ea15daef9e39dba6d1560342218a461fe84e717687403bb33a981384; TS015d2969=0187c00a181b9d062ce73fb2d452f70bb69e2a25d8d5ee3ee2ea15daef9e39dba6d1560342218a461fe84e717687403bb33a981384; xcid=916408f921c95167b5375d10424c14f3; __Secure-access-token=6.43257616.H8pJNJyVT565s79Qo_yrxg.25.ATWTrj86909XzGv6zpUEYdW5evl-VMfxURYe1pI4bFJnOWvrCqAaqbzVxE7XVenuze3_phBGYplyLei8YuIbzyo.20200203113401.20241205140717.d6NCDthJDoFtg__WClVbBF3ZHNIRBJb35JV4X51THMo.1f228bb023558fbd; __Secure-refresh-token=6.43257616.H8pJNJyVT565s79Qo_yrxg.25.ATWTrj86909XzGv6zpUEYdW5evl-VMfxURYe1pI4bFJnOWvrCqAaqbzVxE7XVenuze3_phBGYplyLei8YuIbzyo.20200203113401.20241205140717.juX_aTTR110ZI4DtG79ri2M8pGqkz1u_jncTYcYTa1c.193c853a8c1c91f07; rfuid=NjkyNDcyNDUyLDEyNC4wNDM0NzUyNzUxNjA3NCwxMDI4MjM3MjIzLC0xLC05ODc0NjQ3MjQsVzNzaWJtRnRaU0k2SWxCRVJpQldhV1YzWlhJaUxDSmtaWE5qY21sd2RHbHZiaUk2SWxCdmNuUmhZbXhsSUVSdlkzVnRaVzUwSUVadmNtMWhkQ0lzSW0xcGJXVlVlWEJsY3lJNlczc2lkSGx3WlNJNkltRndjR3hwWTJGMGFXOXVMM0JrWmlJc0luTjFabVpwZUdWeklqb2ljR1JtSW4wc2V5SjBlWEJsSWpvaWRHVjRkQzl3WkdZaUxDSnpkV1ptYVhobGN5STZJbkJrWmlKOVhYMHNleUp1WVcxbElqb2lRMmh5YjIxbElGQkVSaUJXYVdWM1pYSWlMQ0prWlhOamNtbHdkR2x2YmlJNklsQnZjblJoWW14bElFUnZZM1Z0Wlc1MElFWnZjbTFoZENJc0ltMXBiV1ZVZVhCbGN5STZXM3NpZEhsd1pTSTZJbUZ3Y0d4cFkyRjBhVzl1TDNCa1ppSXNJbk4xWm1acGVHVnpJam9pY0dSbUluMHNleUowZVhCbElqb2lkR1Y0ZEM5d1pHWWlMQ0p6ZFdabWFYaGxjeUk2SW5Ca1ppSjlYWDBzZXlKdVlXMWxJam9pUTJoeWIyMXBkVzBnVUVSR0lGWnBaWGRsY2lJc0ltUmxjMk55YVhCMGFXOXVJam9pVUc5eWRHRmliR1VnUkc5amRXMWxiblFnUm05eWJXRjBJaXdpYldsdFpWUjVjR1Z6SWpwYmV5SjBlWEJsSWpvaVlYQndiR2xqWVhScGIyNHZjR1JtSWl3aWMzVm1abWw0WlhNaU9pSndaR1lpZlN4N0luUjVjR1VpT2lKMFpYaDBMM0JrWmlJc0luTjFabVpwZUdWeklqb2ljR1JtSW4xZGZTeDdJbTVoYldVaU9pSk5hV055YjNOdlpuUWdSV1JuWlNCUVJFWWdWbWxsZDJWeUlpd2laR1Z6WTNKcGNIUnBiMjRpT2lKUWIzSjBZV0pzWlNCRWIyTjFiV1Z1ZENCR2IzSnRZWFFpTENKdGFXMWxWSGx3WlhNaU9sdDdJblI1Y0dVaU9pSmhjSEJzYVdOaGRHbHZiaTl3WkdZaUxDSnpkV1ptYVhobGN5STZJbkJrWmlKOUxIc2lkSGx3WlNJNkluUmxlSFF2Y0dSbUlpd2ljM1ZtWm1sNFpYTWlPaUp3WkdZaWZWMTlMSHNpYm1GdFpTSTZJbGRsWWt0cGRDQmlkV2xzZEMxcGJpQlFSRVlpTENKa1pYTmpjbWx3ZEdsdmJpSTZJbEJ2Y25SaFlteGxJRVJ2WTNWdFpXNTBJRVp2Y20xaGRDSXNJbTFwYldWVWVYQmxjeUk2VzNzaWRIbHdaU0k2SW1Gd2NHeHBZMkYwYVc5dUwzQmtaaUlzSW5OMVptWnBlR1Z6SWpvaWNHUm1JbjBzZXlKMGVYQmxJam9pZEdWNGRDOXdaR1lpTENKemRXWm1hWGhsY3lJNkluQmtaaUo5WFgxZCxXeUp5ZFNKZCwwLDEsMCwyNCwyMzc0MTU5MzAsOCwyMjcxMjY1MjAsMCwxLDAsLTQ5MTI3NTUyMyxSMjl2WjJ4bElFbHVZeTRnVG1WMGMyTmhjR1VnUjJWamEyOGdWMmx1TXpJZ05TNHdJQ2hYYVc1a2IzZHpJRTVVSURFd0xqQTdJRmRwYmpZME95QjROalFwSUVGd2NHeGxWMlZpUzJsMEx6VXpOeTR6TmlBb1MwaFVUVXdzSUd4cGEyVWdSMlZqYTI4cElFTm9jbTl0WlM4eE1qZ3VNQzR3TGpBZ1dXRkNjbTkzYzJWeUx6STBMakV3TGpBdU1DQlRZV1poY21rdk5UTTNMak0ySURJd01ETXdNVEEzSUUxdmVtbHNiR0U9LGV5SmphSEp2YldVaU9uc2lZWEJ3SWpwN0ltbHpTVzV6ZEdGc2JHVmtJanBtWVd4elpTd2lTVzV6ZEdGc2JGTjBZWFJsSWpwN0lrUkpVMEZDVEVWRUlqb2laR2x6WVdKc1pXUWlMQ0pKVGxOVVFVeE1SVVFpT2lKcGJuTjBZV3hzWldRaUxDSk9UMVJmU1U1VFZFRk1URVZFSWpvaWJtOTBYMmx1YzNSaGJHeGxaQ0o5TENKU2RXNXVhVzVuVTNSaGRHVWlPbnNpUTBGT1RrOVVYMUpWVGlJNkltTmhibTV2ZEY5eWRXNGlMQ0pTUlVGRVdWOVVUMTlTVlU0aU9pSnlaV0ZrZVY5MGIxOXlkVzRpTENKU1ZVNU9TVTVISWpvaWNuVnVibWx1WnlKOWZTd2lhVEU0YmlJNmUzMTlMQ0o1WVc1a1pYZ2lPbnNpYldWa2FXRWlPbnQ5TENKeVpXRmtZV0pwYkdsMGVTSTZlMzBzSW01bGRYSnZRWE56YVhOMFlXNTBJanA3SW05dVVHRm5aVU5vWVc1blpXUWlPbnQ5TENKdmJrNWxkWEp2UVhOemFYTjBZVzUwVDNCbGJtVmtTVzVUY0d4cGRGWnBaWGROWVhsaVpVTm9ZVzVuWldRaU9udDlmU3dpY0hWaWJHbGpSbVZoZEhWeVpTSTZleUpVZFhKaWIwRndjRk4wWVhSbElqcDdJa2hCVTE5Q1JWUlVSVkpmVmtWU1UwbFBUaUk2SW1oaGMwSmxkSFJsY2xabGNuTnBiMjRpTENKSlRsOVFVazlIVWtWVFV5STZJbWx1VUhKdlozSmxjM01pTENKSlRsTlVRVXhNUVZSSlQwNWZSVkpTVDFJaU9pSnBibk4wWVd4c1lYUnBiMjVGY25KdmNpSXNJazVCVmtsSFFWUkpUMDVmVkU5ZlZVNUxUazlYVGw5QlVGQk1TVU5CVkVsUFRpSTZJbTVoZG1sbllYUnBiMjVVYjFWdWEyNXZkMjVCY0hCc2FXTmhkR2x2YmlJc0lrNVBWRjlKVGxOVVFVeE1SVVFpT2lKdWIzUkpibk4wWVd4c1pXUWlMQ0pTUlVGRVdWOUdUMUpmVlZORklqb2ljbVZoWkhsR2IzSlZjMlVpZlgxOWZRPT0sNjUsNTIxMDUxOTExLDEsMSwtMSwxNjk5OTU0ODg3LDE2OTk5NTQ4ODcsLTUwNTg5MjYxMSwyNA==",
      "origin": "https://www.ozon.ru",
      "priority": "u=1, i",
      "referer": "https://www.ozon.ru/my/order-done?orderNumber=43257616-0462&showTabBar=false&number=43257616-0462",
      "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"YaBrowser\";v=\"24.10\", \"Yowser\";v=\"2.5\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Safari/537.36",
      "x-o3-app-name": "dweb_client",
      "x-o3-app-version": "release_4-11-2024_1bfb0a1c",
      "x-o3-manifest-version": "1bfb0a1cfc6b65f7f73ca2d86695dec6e6e31d20",
      "x-o3-parent-requestid": "f90deb6a1f26bf1cf9bbfb81ae46cdec"
  };

  // Тело запроса
  const raw = JSON.stringify({
      "asyncData": "eyJ1cmwiOiIvIiwiY2kiOnsidmVydGljYWwiOiJjc21hIiwibmFtZSI6Im9yZGVyVHJhY2tpbmciLCJwYXJhbXMiOlt7Im5hbWUiOiJQcmVzZXQiLCJ0ZXh0IjoiMSJ9XSwidmVyc2lvbiI6NCwibGF5b3V0SUQiOjYxOTMsImlkIjozMjU3ODIxfX0="
});

  try {
      // Выполнение запроса к API Ozon
      const response = await axios.post(
          "https://www.ozon.ru/api/composer-api.bx/widget/json/v2?widgetStateId=orderTracking-3257821-default-1",
          raw,
          { headers: myHeaders }
      );
      // Отправка ответа клиенту
      res.json(response.data);
  } catch (error) {
      console.error('Error fetching data from Ozon API:', error);
      // Обработка ошибок
      if (error.response) {
          res.status(error.response.status).json(error.response.data);
      } else {
          res.status(500).send('Internal Server Error');
      }
  }
});

app.get('/api/orders/tracking', async (req, res) => {
  try {
    const response = await fetch('https://market-delivery.yandex.ru/api/v2/orders/tracking', {
      method: 'GET',
      headers: {
        "accept": "application/json, text/plain, */*",
        "accept-language": "ru",
        "cookie": "Eats-Session=0a8335cc08924a569c0843ae519b6d3d; receive-cookie-deprecation=1; yashr=4334156201733337411; gdpr=0; _ym_uid=1728547301408543163; _ym_d=1733338918; yandexuid=7484612501724495527; yuidss=7484612501724495527; ymex=2048699028.yrts.1733339028; yabs-vdrf=A0; font_loaded=YSv1; amcuid=5391140211733341985; cycada=iR/llcN+LYuOti2yuGAD3F7VGH8lkbjsFXDerOEDp+o=; Session_id=3:1733344163.5.0.1733344163343:bq6mBQ:63d5.1.2:1|727659051.0.2.3:1733344163|3:10299195.796308.IjopPdnNWGI5fRq00sHgwG0mNZA; sessar=1.1196.CiDoQj3sO9yCMW6pGxc2bS1K7G_f0WGdHS_OBYd2B9t54w.nhD1vvqNO5qsutwuRfCCjukon0evqIFL0gIsC7Aav6s; sessionid2=3:1733344163.5.0.1733344163343:bq6mBQ:63d5.1.2:1|727659051.0.2.3:1733344163|3:10299195.796308.fakesign0000000000000000000; L=WgpqeV9nUG9jCltSAQh7Wmd5UwBKVnADBTYAFVUCHjA=.1733344163.15971.349571.b8947f41e5ee64a10f963e305e5ae055; yandex_login=bryleffe; device_id=a51d4088812f60b7de7fe27f91cfad2dff9e184cf; yclid_src=yandex.cloud/ru/services/api-gateway/:10550032363586060287:7484612501724495527; maps_session_id=1733397957423371-10017738503153855425-balancer-l7leveler-kubr-yp-sas-38-BAL; yandex_expboxes=1163120%2C0%2C57%3B1164006%2C0%2C68%3B1161883%2C0%2C80%3B1068828%2C0%2C29%3B1131449%2C0%2C72%3B998603%2C0%2C61%3B663872%2C0%2C38%3B1160110%2C0%2C29%3B1163140%2C0%2C0; is_gdpr=0; is_gdpr_b=CNa0CBCxogIoAg==; gpb=gpauto.57_999092%3A56_271350%3A140%3A1%3A1733409758; _ym_isad=1; active-browser-timestamp=1733415267692; isa=k+HwF2x0hw01rlsR4DbuEc3EbSga3SEDtYkf+HIZHzkECmeQXB+SGTIKUq464rnHfkkLX/ejMdVrmtPonQxv91cCpOM=; i=AZBVR+zp5VZ6SgZU6/592igQXL5vzycH+L8/kSS10F2WD38VTjtt3XN0afY3YtZ1ldKxpcMw/XYKKGSzfpx3VY+tseI=; ys=def_bro.1#udn.cDpicnlsZWZmZQ%3D%3D#wprid.1733417484064423-1912353672227261709-balancer-l7leveler-kubr-yp-vla-16-BAL#c_chck.778471452; _yasc=nqZnESC0jI93lnE776B1VAfkcKsS/c76OCdzpqrRBBUBJ8VcAy5j3uljLnxXHdFKi/xWn+u3tTu4L8smC4f2n/4kErlX; yp=1764875028.brd.0702004923#1764875028.cld.2270452#1733590573.dlp.3#1733499908.duc.ru#1733424909.gpauto.57_999092:56_271351:140:1:1733417709#1734537877.hdrc.1#2016803947.multib.1#2048777484.pcs.1#1742547735.stltp.serp_bk-map_1_1711011735#1764953484.swntab.0#1743461844.szm.1_100000023841858:3440x1440:1502x1162#1733499908.uc.ru#2048704163.udn.cDpicnlsZWZmZQ%3D%3D#1734447546.vhstfltr_onb.3:1726671545629; bh=ElEiQ2hyb21pdW0iO3Y9IjEyOCIsICJOb3Q7QT1CcmFuZCI7dj0iMjQiLCAiWWFCcm93c2VyIjt2PSIyNC4xMCIsICJZb3dzZXIiO3Y9IjIuNSIaBSJ4ODYiIg0iMjQuMTAuNC43NTYiKgI/MDICIiI6CSJXaW5kb3dzIkIIIjE1LjAuMCJKBCI2NCJSaCJDaHJvbWl1bSI7dj0iMTI4LjAuNjYxMy4xODYiLCAiTm90O0E9QnJhbmQiO3Y9IjI0LjAuMC4wIiwgIllhQnJvd3NlciI7dj0iMjQuMTAuNC43NTYiLCAiWW93c2VyIjt2PSIyLjUiWgI/MGDvtce6Bmoh3Mrh/wiS2KGxA5/P4eoD+/rw5w3r//32D7bGhJ8B84EC; eda_web={%22app%22:{%22analyticsSession%22:{%22id%22:%22m4bk524o-espxy804v5-2zn8phik1h6-24sec1jgbap%22%2C%22start%22:1733417696%2C%22update%22:1733417788}%2C%22deliveryTime%22:null%2C%22themeVariantKey%22:%22light%22%2C%22xDeviceId%22:%22m1brd8jc-8kbz7y5hfcs-e6nu36gyy8-1piedm6tjhsh%22%2C%22lastObtainedGps%22:{%22lat%22:57.99909210205078%2C%22lon%22:56.2713508605957%2C%22timestamp%22:1733417791040}%2C%22lat%22:57.99887%2C%22lon%22:56.27047}}",
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

app.post('/api/tasks', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);

  var userName = req.body.name;
  var userAge = req.body.age;
  var user = { name: userName, age: userAge };

  var data = fs.readFileSync('tasks.json', 'utf8');
  var users = JSON.parse(data);

  // находим максимальный id
  var id = Math.max.apply(
      Math,
      users.map(function (o) {
          return o.id;
      })
  );
// увеличиваем его на единицу
user.id = id + 1;
// добавляем пользователя в массив
users.push(user);
var data = JSON.stringify(users);
// перезаписываем файл с новыми данными
fs.writeFileSync('tasks.json', data);
res.send(user);
});
app.delete('/api/tasks/:id', function (req, res) {
  var id = req.params.id;
  var data = fs.readFileSync('tasks.json', 'utf8');
  var users = JSON.parse(data);
  var index = -1;
  // находим индекс пользователя в массиве
  for (var i = 0; i < users.length; i++) {
      if (users[i].id == id) {
          index = i;
          break;
      }
  }
  if (index > -1) {
      // удаляем пользователя из массива по индексу
      var user = users.splice(index, 1)[0];
      var data = JSON.stringify(users);
      fs.writeFileSync('tasks.json', data);
      // отправляем удаленного пользователя
      res.send(user);
  } else {
      res.status(404).send();
  }
});







app.use(cors(corsOptions), createProxyMiddleware({
  
  router: (req) => new URL(req.path.substring(1)),
  pathRewrite: (path, req) => (new URL(req.path.substring(1))).pathname,
  changeOrigin: true,
  logger: console
}))

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello world')
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})