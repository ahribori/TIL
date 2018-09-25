# ngrok 사용하기

ngrok은 외부에서 도메인으로 접근할 수 있게 해주는 터널링 서비스이다.

https://ngrok.io에 회원가입 한 다음 auth token을 받을 수 있다.

### 로그인
```
ngrok authtoken <authtoken>
```

### 특정 포트에 도메인 연결하기
다음 명령어로 80포트와 연결된 도메인을 생성해주는 ngrok 서비스를 띄울 수 있다.
```
ngrok http 80
```
백그라운드로 띄우려면 다음과 같은 방법을 사용한다.
```
nohup ngrok http 80 &
```
백그라운드로 띄우면 발급된 도메인을 화면상으로 확인할 수 없는데, ngrok은 http api를 지원하므로 curl을 날려서 확인한다.
```
curl http://localhost:4040/api/tunnels
```
