# Docker remote engine API 활성화하기

## Ubuntu 16.04↑
```
sudo nano /lib/systemd/system/docker.service
```
```
ExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:50000
```
-H 옵션으로 포트를 열어주자
```
sudo systemctl daemon-reload
```
```
sudo systemctl restart docker
```
```
sudo docker -H tcp://127.0.0.1:50000 ps
```
확인해보자.


## Ubuntu 14.04↓
```
sudo systemctl status docker
```

```
sudo nano /etc/default/docker
```

```
DOCKER_OPTS="-H tcp://0.0.0.0:50000 -H unix:///var/run/docker.sock"
```
-H 옵션으로 포트를 열어준다.

```
sudo service docker restart
```

```
sudo docker -H tcp://127.0.0.1:50000 ps
```
확인해보자.
