# Windows 환경에서 Nginx에 letsencrypt https 인증서 적용하기

> ### 환경
* Windows server 2012 R2
* nginx 1.12
* letsencrypt-win-simple 1.9.7
* 인증할 도메인(ahribori.com)과 연결된 서버

## 1. letsencrypt 다운로드
[letsencrypt-win-simple](https://github.com/Lone-Coder/letsencrypt-win-simple/releases)
에서 다운로드 받아 적당한 위치에 압축을 푼다.

## 2. letsencrypt 인증
> ### 2-1. 커맨드 창을 열어 letsencrypt.exe 실행
> ### 2-2. 이메일 입력
인증서가 만료되기 한 달 전에 메일로 알려준다.
> ### 2-3. 인증 모드 선택: M 입력 (Manual Mode)
> ### 2-4. 도메인 입력: ahribori.com
> ### 2-5. Web root 경로 입력: ahribori.com 서버의 Web root 절대 경로
nginx public 폴더 절대 경로를 지정해도 되고 nginx를 reverse proxy로서 이용하고 있다면
실제로 포워딩 되는 서버의 웹 루트 폴더의 절대 경로를 적으면 된다.
나의 경우는 node.js express 서버를 이용하고 있기 때문에 express 프레임워크의 static path로 설정한
경로를 적었다.

> ### 2-6. 스케줄러 등록 할 지 말지 (y/n) : y
letsencrypt 인증서는 꽁짜라 유효 기간이 3개월 밖에 되지 않는다. 3개월마다 수동으로 인증서를 갱신하려면
정말 귀찮은데 스케쥴러로 등록해두면 2개월 좀 넘었을 때 자동으로 갱신해준다. 무조건 y.

## 3. nginx에 https 설정 추가
위 과정에서 에러가 나지 않았으면, <br/>
C:\Users\사용자계정\AppData\Roaming\letsencrypt-win-simple\httpsacme-v01.api.letsencrypt.org <br/>
디렉토리 안에 인증서와 키체인이 생성되었을 것이다.

nginx에 설정을 추가하자.
```
server {
	listen       443;
	server_name  ahribori.com;

	ssl_certificate	C:\Users\사용자계정\AppData\Roaming\letsencrypt-win-simple\httpsacme-v01.api.letsencrypt.org\ahribori.com-chain.pem;
	ssl_certificate_key	C:\Users\사용자계정\AppData\Roaming\letsencrypt-win-simple\httpsacme-v01.api.letsencrypt.org\ahribori.com-key.pem;

	ssl on;
	ssl_session_cache  builtin:1000  shared:SSL:10m;
	ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
	ssl_ciphers HIGH:!aNULL:!eNULL:!EXPORT:!CAMELLIA:!DES:!MD5:!PSK:!RC4;
	ssl_prefer_server_ciphers on;

	location / {
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_http_version 1.1;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $http_host;
            proxy_set_header X-NginX-Proxy true;

            proxy_pass http://포워딩 될 서버 주소;
            proxy_redirect off;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

설정을 저장한 다음,

```
nginx.exe -s reload
```
nginx를 재시작 하고 ahribori.com으로 접속해보면 인증된 https로 접속되는 것을 확인할 수 있다.