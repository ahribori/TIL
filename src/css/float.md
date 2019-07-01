# float

## 1. float 속성

float 속성은 본래 이미지와 텍스트가 있을 때, 이미지 주위를 텍스트로 감싸기 위해 만들어진 속성이다.

속성값  | 설명
--------|---------------------------------
none    | 요소를 떠 있게 하지 않음 (기본값)
right   | 요소를 오른쪽에 떠있게 함
left    | 요소를 왼쪽에 떠있게 함

* 일반 블록 요소들은 수직 정렬
* float: left 요소들은 왼쪽부터 정렬
* float: right 요소들은 오른쪽부터 정렬 (먼저 선언된 요소가 더 오른쪽에 있음)
* block 요소에 float 속성이 지정되면 inline 요소처럼 width가 컨텐츠 너비에 맞추어짐

## 2. float 속성 관련 이슈

### 2.1 float 요소와 non-float 요소 사이의 margin이 적용되지 않는 현상
```html
<div class="d1"></div>
<div class="d2"></div>
```
```css
.d1 {
    background: red;
    height: 100px;
    width: 100px;
    float: left;
    margin-right: 200px;
}
.d2 {
    background: blue;
    height: 100px;
}
```
위의 경우, d1에 margin-right을 200px 주었기 때문에 d2는 d1의 오른쪽으로 200px 떨어져야하지만 제대로 적용되지 않는다.
해결책은 d2에 <b>overflow: hidden</b> 속성을 적용하면 margin 또한 제대로 적용된다.

### 2.2 float 요소를 자식으로 가진 non-float 부모의 높이가 제대로 적용되지 않는 현상
```html
<div class="d1">
    <div class="d2"></div>
</div>
```
```css
.d1 {
    background-color: orange;
    padding: 10px;
}

.d2 {
    background-color: red;
    width: 80px;
    height: 80px;
    float: left;
}
```
d1의 높이는 자식인 d2 높이인 80px을 따라갈 것이라고 기대하지만
실제로는 padding top 10px + padding bottom 10px = 20px 밖에 되질 않는다.
d2가 float 요소이기 때문인데, 이렇게 부유객체인 자식 요소 떄문에 부모 요소의 높이가
제대로 적용되지 않을 땐, 몇 가지 해결책이 있다.

1. 부모 요소인 d1에 <b>overflow: hidden</b> 속성을 적용하는 방법
2. 부모 요소인 d1 또한 float 요소로 만들어 버리는 방법
3. d1 요소의 자식이자 d2의 바로 뒤에 빈 요소를 만들어 그 요소에 clear: both 하는 방법
4. d1 요소의 ::after 가상요소에 display: block; clear: both; content: ''; 를 적용하는 방법 (추천)