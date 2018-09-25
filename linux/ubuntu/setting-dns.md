# Ubuntu DNS 설정하기

NetworkManger.conf를 수정한다.
```
vi /etc/NetworkManager/NetworkManager.conf

[기존]
dns=dnsmaskq

[변경]
#dns=dnsmaskq
```

resolveconf를 수정한다.
```
vi /etc/resolvconf/resolv.conf.d/tail

[추가]
nameserver 8.8.8.8

service network-manager restart

tail /etc/resolv.conf
```
시스템을 재시작 한다.
```
sudo reboot
```

