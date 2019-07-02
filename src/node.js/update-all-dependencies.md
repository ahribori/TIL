# dependency들을 모두 최신 버전으로 업데이트하기

npm에서 dependency를 최신 버전(latest)으로 업데이트 하려면 하나씩 따로 업데이트를 해줘야한다.
모든 의존성을 한번에 업데이트 하는 것은 프로젝트 관점에서 굉장히 큰 리스크를
가지고 있는 작업이기 때문에 npm에서 공식적으로 지원하지 않는 기능이다.
하지만 여러가지 보일러플레이트를 github에서 관리해야할 때에는 분명 일괄 업데이트
기능도 필요하기 마련이다.

그럴 때에는 npm-check-updates 라이브러리를 사용하면 된다.
```
npm install npm-check-updates
```
ncu를 global install 해준다.

```
ncu -u
```
위의 명령어로 현재 프로젝트 package.json에 있는 dependency 정보를 읽어
현재 버전이 몇이고 최신 버전은 몇인지 검사한다.

```
npm install
```
npm install을 하게 되면 모든 dependency가 latest 버전으로 install 되고 package.json에 업데이트 된다.
