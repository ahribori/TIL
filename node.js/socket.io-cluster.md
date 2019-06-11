# Socket.io 클러스터 환경에서 사용하기

socket.io 서버를 클러스터로 구성했을 때 가장 큰 문제는
각 노드에 어떤 클라이언트들이 커넥션을 맺었는지 서로 모르는 상태이기 때문에 메세지 전달이 제대로 이루어지지 않는다.
redis pub/sub 기능을 이용해서 커넥션을 공유하는 방법을 알아보자.

### Socket.io-redis 설정
 ```js
const express = require('express');
const app = express();

const redis = require('redis');
const socketIoRedisAdapter = require('socket.io-redis');
const config = require('../conf');
const { redis: redisConfig } = config;

// Create HTTP Server
const server = require('http').createServer(app);

// Initialize SocketIO
const io = require('socket.io')(server, {
  path: '/socket.io',
  transports: ['websocket'],
});

// SocketIO - Redis configuration
if (redisConfig.enable) {
  const { host, port, password } = redisConfig;

  if (host && port > 0) {
    const pubClient = redis.createClient({ host, port, password });
    const subClient = redis.createClient({ host, port, password });
    const redisAdapter = socketIoRedisAdapter({ pubClient, subClient });

    io.adapter(redisAdapter);
    redisAdapter.pubClient.on('connect', () => {
      console.log('Redis adapter pubClient connected');
    });
    redisAdapter.subClient.on('connect', () => {
      console.log('Redis adapter subClient connected');
    });
  }
}

// Listen
server.listen(8080, () => {
  console.log(`listen ${8080}`);
});
```

socket.io 서버에 redis pub/sub client를 설정했다.
이제 어떤 이벤트가 일어나면 redis를 통해 다른 노드로 이벤트가 전파된다.

### Redis로 직접 메세지를 보내 Socket으로 전파하기
Socket.io 컨텍스트 바깥에서 메세지를 emit 해야 할 때 유용하게 쓸 수 있는 방법이다.

```js
const io = require('socket.io-emitter')({ host: '127.0.0.1', port: 6379 });

io.emit('my-event', 'hello, world');
```
socket.io-emitter 패키지를 설치한다음, option 파라미터로 redis 커넥션 정보를 설정한 뒤,
io 객체를 통해 redis pub/sub 채널에 연결된 모든 노드에 이벤트를 보낼 수 있다.

```js
  const io = require('socket.io-emitter')({ host: '127.0.0.1', port: 6379 });

  // sending to all clients
  io.emit('broadcast', /* ... */);

  // sending to all clients in 'game' room
  io.to('game').emit('new-game', /* ... */);

  // sending to individual socketid (private message)
  io.to(<socketid>).emit('private', /* ... */);

  var nsp = io.of('/admin');

  // sending to all clients in 'admin' namespace
  nsp.emit('namespace', /* ... */);

  // sending to all clients in 'admin' namespace and in 'notifications' room
  nsp.to('notifications').emit('namespace', /* ... */);
```
io 객체에서 지원하는 namespace, room을 세분화하여 이벤트를 보내는 것도 가능하다.
