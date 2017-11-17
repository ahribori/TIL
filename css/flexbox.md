# 플렉스박스 (Flexbox)

레이아웃을 잡는다는 것은 굉장히 어려운 일이다. 정답이 없기 때문이다.
table을 이용하거나 position 또는 float 속성을 이용하는 등 여러가지 방법을
조합하여 어찌어찌 레이아웃을 잡고 나면 여러 부작용이 꼬리에 꼬리를 물고 나타난다.
하지만 Flexbox를 이용하면 표준화된 방법으로 쉽게 원하는 레이아웃을 잡을 수 있다.

## 1. 사용법
Flexbox Layout은 Flexbox container와 Flexbox item으로 구성된다.

```html
<div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
```
```css
.container {
    display: flex;
}
```
`.item` 다섯 개를 부모인 `.container`가 감싸고 있다.
이 컨테이너를 Flexbox container로 만드려면 <b>부모 요소인 `.container`의 `display` 속성을 `flex`로 지정해 주면 된다.</b>
`.container`가 `inline` 요소라면 `display` 속성을 `inline-flex`로 지정하면 된다.
이렇게 함으로써 .item들은 자동적으로 Flexbox item이 된다.


## 2. Flexbox Container의 속성

### 2-1. flex-direction
flex-direction 속성은 flex item들이 배치될 방향을 지정하는 속성이다.

속성값          | 설명
--------------- |---------------
row             | 좌 -> 우 (기본값)
row-reverse     | 우 -> 좌
column          | 상 -> 하
column-reverse  | 하 -> 상

### 2-2. flex-wrap
flex-wrap 속성은 컨테이너 크기가 작아지다가 아이템들의 크기의 합보다 작아질 때
어떻게 처리할 것인지를 지정하는 속성이다

속성값          | 설명
--------------- |---------------
nowrap          | flex item들의 크기가 container에 들어갈 수 있는 크기로 균등하게 줄어듬 (기본값)
wrap            | flex item들의 크기는 변하지 않고 다음 행으로 개행됨
wrap-reverse    | wrap과 동일하지만 개행될 때 윗줄로 넘어간다

### 2-3. flex-flow
shorthand로 위의 flex-direction과 flex-wrap 속성을 한번에 설정할 수 있는 속성이다
```css
.container {
    flex-flow: <flex-direction> || <flex-wrap>; /* 기본값 row nowrap */
}
```

### 2-4. justify-content
아이템들 수평 정렬 속성 (flex-direction 기준 수평)

속성값          | 설명
--------------- |---------------
flex-start      | 왼쪽 정렬 (기본값)
center          | 가운데 정렬
flex-end        | 오른쪽 정렬 (기본값)
space-between   | 좌우 양쪽 끝은 붙어있고 사이사이는 균등한 간격으로 띄움
space-around    | 모든 수평 간격을 균등하게

### 2-5. align-items
<b>!!! align-content랑 존나 헷갈리는 속성이다!!!</b> <br/>
align-item은 item들을 수직 정렬하는 속성이고 align-content는 컨테이너의 너비가 줄어들어서
item들이 stack될 때 어느 위치부터 stack 시킬지 정하는 속성이다.

속성값          | 설명
--------------- |---------------
stretch         | 아이템의 높이는 컨테이너의 높이에 꽉 참 (full) (기본값)
flex-start      | 수직 시작 부분에 정렬 (top)
flex-end        | 수직 끝 부분에 정렬 (bottom)
center          | 수직 가운데 정렬 (middle)
baseline        |  container의 baseline 기준 정렬

### 2-6. align-content
<b>!!! align-items 존나 헷갈리는 속성이다!!!</b> <br/>
align-item은 item들을 수직 정렬하는 속성이고 align-content는 컨테이너의 너비가 줄어들어서
item들이 stack될 때 어느 위치부터 stack 시킬지 정하는 속성이다. 아이템들이 stack될 때만 의미 있는 속성이다.

속성값          | 설명
--------------- |---------------
stretch         | 균등한 간격으로 배치 (기본값)
flex-start      | cross start 지점부터 stack
center          | cross axis 의 중앙에 stack
flex-end        | cross end 지점부터 stack
space-between   | 상하 양쪽 끝은 붙어있고 사이사이는 균등한 간격으로 띄워서 stack
space-around    | 모든 수직 간격을 균등하게 stack


## 3. Flexbox Item의 속성

### 3-1. order

속성값          | 설명
--------------- |---------------
order           | 정수 (기본값: 0)

기본값은 0이고 item의 배치 순서를 다르게 할 수 있음. 작은게 먼저 배치됨.

### 3-2. flex-grow

속성값          | 설명
--------------- |---------------
flex-grow       | 양의 정수 (기본값: 0)

* item의 너비 확대 인자(flex grow factor)를 지정
* 각 item은 너비를 1이라고 했을 때, (item 자신의 flex-grow값 / 모든 item들의 flex-grow의 합)만큼의 너비를 가진다

| 1 | 1 | 2 | 2 | 1 | <br />
위처럼 각각의 숫자 만큼의 flex-grow 값을 가진 item이 5개 있다고 하면,
flex-glow값의 총 합은 1 + 1 + 2 + 2 + 1 = 7이고,  <br />
각각 1/7 | 1/7 | 2/7 | 2/7 | 1/7 비율의 너비를 가지게 된다.

### 3-3. flex-shrink

속성값          | 설명
--------------- |---------------
flex-shrink     | 양의 정수 (기본값: 1)

* item의 너비 축소 인자(flex shrink factor)를 지정
* <b>0을 지정하면 너비가 고정</b>


### 3-4. flex-basis

속성값          | 설명
--------------- |---------------
flex-basis      | auto | width (기본값: auto)

* item의 너비를 지정

### 3-5. align-self
컨테이너의 align-items 속성보다 우선하여 아이템의 수직 정렬을 개별 설정

속성값          | 설명
--------------- |---------------
auto            | 기본값
stretch         | 아이템의 높이는 컨테이너의 높이에 꽉 참 (full) (기본값)
flex-start      | 수직 시작 부분에 정렬 (top)
flex-end        | 수직 끝 부분에 정렬 (bottom)
center          | 수직 가운데 정렬 (middle)
baseline        |  container의 baseline 기준 정렬