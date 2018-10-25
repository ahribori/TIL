# Support Internet Explorer

## IE11

None issue.

## IE10

### 1. Set, Map 이 정의되지 않았다고 나옴.

브라우저 콘솔 에러

```
'Set'이 정의되지 않았습니다.
'Get'이 정의되지 않았습니다.
```

해결방법

-   core-js polyfill 사용.

```
import 'core-js/es6/map';
import 'core-js/es6/set';
```

### 2. childContext 어쩌구 에러

브라우저 콘솔 에러

```
childContextTypes must be defined in order to use getChildContext()
```

해결방법

```
npm i -D @babel/plugin-transform-proto-to-assign
```

.babelrc

```
{
    "plugins": ["@babel/plugin-transform-proto-to-assign"]
}
```
