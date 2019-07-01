Socket.io Proxy 서버 만들기

8081포트가 external port, 8080포트는 internal port인 상황일 때,
8081 -> 8080로 proxying하는 예제이다.

```javascript
const http = require('http');
const httpProxy = require('http-proxy');
const express = require('express');

const port = 8081;
const proxyApp = express();
const proxyServer = http.createServer(proxyApp);
const proxy = httpProxy.createProxyServer({ target: 'http://localhost:8080', ws: true });

proxy.on('error', function (err) {
    // console.error( err.stack );
    console.log('Proxy error: ', err);
});

proxy.on('proxyReq', function (proxyReq, req, res) {
    console.log('Proxy request: ', proxyReq.path);
});

proxy.on('proxyReqWs', function (proxyReqWs, req, res) {
    console.log('Proxy ws request:', proxyReqWs.path);
});

proxyApp.use(`/socket.io`, function (req, res) {
    proxy.web(req, res, { target: `http://localhost:8080` });
});

proxyServer.on('upgrade', function (req, socket, head) {
    console.log('Socket connection upgrading');
    proxy.ws(req, socket, head);
});

proxyApp.listen(port, function () {
    console.log('listen ', 8081)
});
```
