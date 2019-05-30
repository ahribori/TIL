RabbitMQ(amqp protocol) Node.js에서 사용하기

## amqplib

```
npm i amqplib
```
amqp 클라이언트 패키지중에 다운로드수가 제일 많은 패키지라 일단 시작해봄.

callback API와 promise API를 제공하는데, promise API로 샘플코드를 작성해보았다.
```js
import * as amqp from 'amqplib';

const connect = amqp.connect('amqp://localhost:5672');
const q = 'my-queue';

connect
  .then(conn => {
    return conn.createChannel();
  })
  .then(channel => {
    channel.assertQueue(q).then(ok => {
      return channel.sendToQueue(
        q,
        Buffer.from(JSON.stringify({ message: 'hello, world' })),
      );
    });
  });

connect
  .then(conn => {
    return conn.createChannel();
  })
  .then(channel => {
    return channel.assertQueue(q).then(ok => {
      return channel.consume(q, message => {
        if (message) {
          console.log(JSON.parse(message.content.toString()));
          channel.ack(message);
        }
      });
    });
  });
```
consume 할때 ack를 보내줘야 큐에서 빠진다.
