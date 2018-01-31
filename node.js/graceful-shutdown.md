# ctrl+c를 눌러 프로세스를 종료할 때 안전하게 종료하기

node에서 child process를 만드는 앱을 작성했을 때 이 앱을 ctrl+c키를 눌러 종료하면
child process가 죽지 않는 경우가 있다. close를 해줘야되는데 앱이 shutdown 되는 바람에
close 되지 않은 상태로 영영 남아있는다던지..

이럴 땐 인터럽트 이벤트를 받아, 콜백에서 graceful 하게 프로세스를 종료할 수 있는 작업들을 한 뒤
종료하면 된다.

```javascript
setInterval(() => {
    // app is running
}, 1000);

const gracfulCleanJob = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        // cleaning job done
        resolve();
    }, 3000);
});

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    gracfulCleanJob().then(() => {
        process.exit();
    })
});
```
이렇게 하면, ctrl+c로 프로세스를 종료하면 gracfulCleanJob이 모두 완료된 후 process.exit()이 실행된다.