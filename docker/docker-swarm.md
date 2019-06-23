# Docker swarm

## 1. Initialize

### 마스터 노드 활성화
```
docker swarm init --advertise-addr <이 머신의 ip address> 
```
위 명령어로 마스터 노드 초기화를 하면, 워커 노드에서 마스터 노드로 조인할 수 있는 명령어와 토큰을 알려준다.

### 워커 노드 활성화

워커 노드에서 위의 명령어를 입력하면 마스터 노드에 접속된다.
```
To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-0ih9e2eo3k1gtjtmyxc3hbh2mxwgbubrui9q3k1vb9jq2j0w5b-e2f03fzaliedgk9md806kwgsl <마스터 노드 ip address> 

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```


### 노드 정보 확인

docker node ls 명령어로 마스터와 워커 노드가 잘 세팅되었는지 확인할 수 있다.
```
docker node ls

ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
kx1yde6m0y7ya3jtbtnbflab5 *   docker-master       Ready               Active              Leader              18.06.1-ce
5leoxfpwlo9u2giz46i2nu2sp     docker-worker1      Ready               Active                                  18.06.1-ce
h7j0qru4yljt5ny04juisrlyk     docker-worker2      Ready               Active                                  18.06.1-ce
```

### 서비스 띄우기
```
docker service create -p 80:80 --name nginx nginx:latest
```

### docker-compose.yml로 서비스 띄우기
```
docker stack deploy -c <compose.yml path>
```

### 스케일링
인스턴스를 n개로 늘릴 수 있다.
```
docker service scale nginx=5
```



