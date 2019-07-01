# top->bottom 트랜지션 적용
트랜지션은 속성의 값이 변할 때 적용되기 때문에, 엘리먼트를 top에서 bottom으로 날려버리고 싶을 때 다음과 같은
스타일로는 트랜지션이 동작하지 않는다.
```css
.item {
    position: fixed;
    top: 5px;
    transition: all 1s;
}

.item.move {
    bottom: 5px;
}
```

이럴 땐, 이렇게 처리하면 깔끔하다.
```css
.item {
    position: fixed;
    top: 5px;
    transition: all 1s;
}

.item.move {
    top: calc(100% - (엘리먼트 높이 + 5)px);
}
```
