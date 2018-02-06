# Javascript의 this

Java와 같은 객체지향 언어에서 this는 클래스로부터 생성된 인스턴트 자신을 의미하며,
대부분의 상황에서 클래스 밖에서는 사용할 수 없다.
하지만 Javascript의 this를 이런 관점에서 접근하면 상당히 혼란스럽다.
<b>Javascript에서의 this는 함수의 현재 실행 컨텍스트를 의미</b>하기 때문이다.

게다가 Javascript의 함수 실행 타입은 세 가지(함수 실행, 메소드 실행, 생성자 실행, new를 안붙힌 생성자 실행)나 된다.
타입에 따라 서로 다른 컨텍스트를 가지기 때문에 개발자가 생각했던 것과는 다른 결과가 자주 나오곤 하기 떄문에 주의해야 한다.

실행 타입에 따라 this가 어떻게 달라지는지 정리해보자.

## 1. 함수 실행

### 1-1) 일반적인 함수 실행
```js
function test() {
    console.log(this); // => Global Object
}

test();
```
함수 실행에서의 실행 컨텍스트는 전역 객체이다.
브라우저 환경에서는 window 객체가 될 것이고, Node환경에서는 global객체가 될 것이다.

### 1-2) strict 모드에서의 함수 실행 (use strict)
```js
function test() {
    'use strict';
    console.log(this); // => undefined
}

test();
```

### 1-3) 내부 함수 실행
내부 함수의 문맥은 외부 함수의 문맥에 의존하지 않고 오직 실행 컨텍스트에 영향을 받는다.
```js
const obj = {
    num1: 10,
    num2: 30,
    test: function() {
        console.log(this); // => obj
        function innerFunction() {
            console.log(this); // => Global object
        }
        innerFunction();
    },
};

obj.test();
```
test는 obj object의 멤버이므로 메소드 실행이기 떄문에 실행 컨텍스트는 obj 객체이다.
test 내부에 있는 innerFunction은 메소드가 아니기 때문에 함수 실행이고 실행 컨텍스트는 글로벌이다.

## 2. 메소드 실행
### 2-1) 함수와 메소드
객체의 멤버로 있는 함수를 메소드라고 한다.
함수 실행과 메소드 실행을 구분하는 가장 간단한 방법은,
메소드 실행은 무언가를 참조한다는 기호인 콤마가 있고(obj.myFunc()), 함수 실행은 없다(myFunc()).
```js
['Hello', 'World'].join(', '); // 메소드 실행
({ ten: function() { return 10; } }).ten(); // 메소드 실행
var obj = {};
obj.myFunction = function() {
  return new Date().toString();
};
obj.myFunction(); // 메소드 실행

var otherFunction = obj.myFunction;
otherFunction();     // 함수 실행
parseFloat('16.60'); // 함수 실행
isNaN(0);            // 함수 실행
```

### 2-2) 메소드 실행에서의 this
```js
const task = {
    run: function() {
        console.log(this === task); // true
    },
};

task.run();
```
task.run() 을 호출하면 run 메소드의 실행 컨텍스트가 task 객체가 된다.

### 2-3) 주의: 메소드를 변수에 할당하여 실행할 때
```js
const task = {
    a: 3,
    run: function() {
        console.log(this.a)
    },
};

const taskRun = task.run;

taskRun();
```
2-2와 비슷하지만 task object의 run이라는 메소드를 taskRun이라는 변수에 담아 호출하였다.
this는 어떻게 될까?
task.run이 메소드일지라도 taskRun()은 함수 호출이기 때문에 this는 전역객체가 되고
전역 객체에는 a라는 멤버가 없기 때문에 undefined가 콘솔에 찍히게 된다.

## 3. 생성자 실행
### 3-1) 생성자 실행에서의 this
```js
/*
    ES5
*/
function Person () {
    this.foo = 'bar';
    console.log(this); // => Person{}
}

const personInstance = new Person();
console.log(personInstance.foo); // => 'bar';

/*
    ES6
*/
class Person {
    constructor() {
        this.foo = 'bar';
        console.log(this); // => Person{}
    }
}

const personInstance = new Person();
console.log(personInstance.foo); // => 'bar';
```
new Person()은 생성자 실행이다. 이 때 컨텍스트는 Person의 인스턴스이다.

### 3-2) 주의: 생성자 실행에서 new를 안붙히면 어떻게 될까?
몇몇 함수는 생성자 실행이 아니라 함수 실행을 해도 인스턴스를 반환하는 함수가 있다.
<br/>
예를 들면,
```js
function Person () {
    this.foo = 'bar';
    return this;
}

const personInstance = Person();
console.log(personInstance.foo);
```
위의 Person 함수는 함수 실행을 해도 객체가 반환 된다. (this를 반환하기 때문에)
<br/>
하지만, 생성자 실행으로 반환되는 this와 함수실행으로 반환되는 this는 완전히 다르다.
생성자 실행으로 반환되는 this는 Person 인스턴스이지만, 함수실행으로 반환되는 this는
전역 오브젝트이다. 그렇기 때문에, 'bar'이라는 문자열을 this.foo에 할당했는데,
window.foo = 'bar'을 한 것이나 마찬가지이다. 주의해야 한다.

이런 부작용은 방지하려면 다음과 같이 하면 된다.
```js
function Person () {
    if (!(this instanceof Person)) {
        throw Error('Error: Incorrect invocation');
    }
    this.foo = 'bar';
    return this;
}

const personInstance = Person();
console.log(personInstance.foo)
```
instanceof 키워드로 this가 Person타입의 객체가 맞는지 확인하는 방어코드를 추가하면
위의 부작용을 방지할 수 있다.