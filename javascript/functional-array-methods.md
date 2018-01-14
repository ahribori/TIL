# Array methods (functional)
Array 객체의 메소드중 Immutable한 메소드인 map, filter, reduce를 정리한다.
Immutable하다는 것은 메소드가 호출되어도 원본에 영향이 가지 않는 것을 의미한다.
세 가지 메소드 모두 호출되면 복사된 새로운 배열을 반환한다.

## 1. map
map은 callback을 인자로 받는 메소드이고 callback의 return값으로 새로운 배열을
만들어낸다.
```js
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((currentValue, index, array) => {
    return currentValue + 1;
});

console.log(newArr); // [2, 3, 4, 5, 6];
```

## 2. filter
filter는 배열 내 각 요소에 대해 callback 함수를 호출해서
callback의 return 조건을 true로 하는 값들의 집합인 새로운 배열을 생성한다.

```js
const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter((currentValue, index, array) => {
    return currentValue > 3;
});

console.log(newArr); // [4, 5];
```

## 3. reduce
reduce는 배열의 각 요소마다 callback을 호출하는데
callback의 첫번째 인자에 accumulator가 있어서 누산을 할 수 있다.
accumulator를 어떻게 활용하냐에 따라서 reduce()의 return 값이
array뿐만 아니라 다른 타입이 될 수도 있다.
주의해야 할 점은 reduce()의 두번째 인자로 initialValue를 설정할 수 가 있는데
이 initialValue를 설정하고 안하고에 따라서 초기값과 index가 달라진다는 것이다.

```js
const initialValue = 0;

arr.reduce((
    accumulator, // 누산기, initialValue가 지정될 경우 initialValue부터 시작, 아니면 배열의 첫번째 원소부터 시작
    currentValue, // 현재 루프의 배열 값
    index, // initialValue가 지정될 경우 0부터 시작, 아니면 1부터 시작
    array, // reduce가 호출된 array
) => {

}[, initialValue])
```

```js
const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((accumulator, currentValue,index, array) => {
    return accumulator + currentValue;
});

console.log(result) // 15;
```