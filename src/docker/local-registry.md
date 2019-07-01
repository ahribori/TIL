# Docker registry 로컬 서버에 구축하기

## 1. Docker registry 구축
docker registry 이미지를 pull 받는다.
```docker
docker pull registry
```

registry 실행
```docker
docker run -dit -p 5000:5000 --name docker-registry registry
```
이제 localhost:5000가 docker registry 주소가 된다.

## 2. Docker registry Web UI
docker registry web ui 이미지를 pull 받는다.
```docker
docker pull hyper/docker-registry-web
```

registry 실행
```docker
docker run -it -p 8080:8080 --name docker-registry-web --link docker-registry -e REGISTRY_URL=http://docker-registry:5000/v2 -e REGISTRY_NAME=localhost:5000 hyper/docker-registry-web
```
브라우저에서 localhost:8080으로 접속해보면 docker regsitry web ui를 확인할 수 있다.