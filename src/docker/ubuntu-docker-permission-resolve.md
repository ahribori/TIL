# 우분투 18.04에서 항상 sudo 없으면 permission 요구하는 이슈

```
sudo groupadd docker
sudo gpasswd -a $USER docker
sudo usermod -aG docker $USER
sudo systemctl restart snap.docker.dockerd.service
```
위 명령어 치고 터미널 재접속 하면 된다.
