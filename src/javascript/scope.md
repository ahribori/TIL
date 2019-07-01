# 스코프 (Scope)
## 1. 스코프 체인 (Scope chain)
```javascript
var name = 'ahribori';

function outer() {
    console.log('outer', name); // => outer ahribori
    function inner() {
        console.log('inner', name); // => inner ahribori
    }
    inner();
}
outer();
```
inner함수 내부에서 name이란 변수가 참조되었는데, 먼저 inner scope 내에서 name이란 변수를 찾고,
없으면 한 단계 밖인 outer scope에서 name을 찾고, 또 없으면 한 단계 더 밖으로 나가서 global scope에서
name을 찾아서 'ahribori'라는 값을 얻었다. 만약 global scope에도 name이 없었다면 참조 에러가 발생하였을 것이다.
이처럼 범위를 넓혀가며 참조를 찾는 것을 <b>스코프 체인</b>이라고 한다.

## 2. 렉시컬 스코핑(Lexical scoping)
자바스크립트에서의 함수 스코프는 함수가 호출될 때 정해지는 것이 아니라 함수를 선언할 때 정해지는데,
이를 <b>렉시컬 스코핑(Lexical scoping)</b>이라고 한다.

```javascript
var name = 'a';

function printName() {
    console.log(name); // => a
}

function invokePrintName() {
    var name = 'b';
    printName();
}
invokePrintName();
```
위 코드에서 invokePrintName이 호출되면서 printName도 호출되는데, 만약 호출 시점에 스코프가 결정된다면
printName 바로 윗 라인에 있는 name인 'b'가 찍힐 것이고 선언 시점에 스코프가 결정된다면 'a'가 찍힐 것이다. (스코프 체이닝에 의하여)
코드를 실행해보면 a가 출력된다. printName function이 선언될 당시 스코프 체인을 따라가보면 제일 가까운 name은
전역 변수로 선언된 var name = 'a'; 이기 때문이다.