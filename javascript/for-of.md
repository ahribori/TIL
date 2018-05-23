# for ~ of 구문

```js
for (let i in 'hello') {
    console.log(i);
}
// 0, 1, 2, 3, 4

for (let i of 'hello') {
    console.log(i);
}
// h, e, l, l, o
```
* for ~ in 은 속성의 key를 반복하지만 for ~ of 는 속성의 value를 반복한다.
* 단, for ~ of 가 반복하는 컬렉션은 [Symbol.iterator] 속성이 있어야 한다.
* [Symbol.iterator] 속성을 가지고 있는 대표적인 컬렉션에는 Array, String, TypedArray, Map, Set, DOM, Generator 등이 있다.


```js
let arr = [3, 5, 7];

arr.foo = 'bar';

for(let j in arr) { console.log(j); } // 0, 1, 2, foo

for(let j of arr) { console.log(j); } // 3, 5, 7

```
for ~ of 에서는 배열에서 foo라는 임의의 속성을 자동으로 걸러주고 정상적인 요소만 표시한다.

