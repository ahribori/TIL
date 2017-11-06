# 셀렉터 정리
## 1. 전체 셀렉터
```css
* {

}
```
문서 내의 모든 요소를 선택

## 2. 태그 셀렉터
```css
p {

}

span, div {
}
```
태그명으로 요소를 선택

## 3. ID 셀렉터
```css
#hello {

}
```
id가 일치하는 요소를 선택

## 4. Class 셀렉터
```css
.hello {

}
```
class가 일치하는 요소를 모두 선택

## 5. Attribute 셀렉터
```css
a[href] {
    /* href 어트리뷰트를 가지고 있는 a 태그 모두 선택 */
}

.hello[data-id] {
    /* data-id 어트리뷰트를 가지고 있으며 클래스가 hello인 요소 모두 선택 */
}
```
* 셀렉터[어트리뷰트] : 해당 어트리뷰트를 가지고 있는 요소 선택
* 셀렉터[어트리뷰트="값"] : 값도 일치하는 요소 선택
* 셀렉터[어트리뷰트~="값"] : 값을 공백으로 분리된 단어로 포함하는 요소 선택
* 셀렉터[어트리뷰트|="값"] : 값과 일치하거나 값-으로 시작하는 요소 선택
* 셀렉터[어트리뷰트^="값"] : 값으로 시작하는 요소 선택
* 셀렉터[어트리뷰트$="값"] : 값으로 끝나는 요소 선택
* 셀렉터[어트리뷰트*="값"] : 값을 포함하는 요소 선택

## 6. 복합 셀렉터
> ### 6.1 후손 셀렉터
```html
<div>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
    <span><p>paragraph 3</p></span>
</div>
```
```css
div p {
    color: red
}
```
셀렉터A 셀렉터B 형식으로 사용하며 셀렉터A 후손 요소 중 셀렉터B와 일치하는 모든 요소를 선택한다.
자식과 후손을 헷깔리면 안됨. 자식은 바로 하위 1단계 노드만을 의미하며 후손은 리프 노드까지 모두 포함한다.

> ### 6.2 자식 셀렉터
```html
<div>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
    <span><p>paragraph 3</p></span>
</div>
```
```css
div > p {
    color: red
}
```
셀렉터A > 셀렉터B 형식으로 사용하며 셀렉터A의 자식 요소 중 셀렉터B와 일치하는 모든 요소를 선택한다.
자식과 후손을 헷깔리면 안됨. 자식은 바로 하위 1단계 노드만을 의미하며 후손은 리프 노드까지 모두 포함한다.

> ### 6.3 형제 셀렉터
```css
p + p {
    color: red
}
p ~ p {
    color: yellow
}
```
* 인접 형제 셀렉터 (A + B) : A의 형제 중 A의 바로 뒤에 인접한 B를 선택
* 일반 형제 셀렉터 (A ~ B) : A의 형제 중 A의 뒤에 위치한 B를 모두 선택

## 7. 가상 클래스 셀렉터 (Pseudo-Class Selector)

가상 클래스는 요소의 특정 상태에 따라 스타일을 정의할 때 사용된다. 특정 상태란 예를 들어 다음과 같다.

- 마우스가 올라와 있을때

- 링크를 방문했을 때와 아직 방문하지 않았을 때

- 포커스가 들어와 있을 때

이러한 특정 상태에는 원래 클래스가 존재하지 않지만 가상 클래스를 임의로 지정하여 선택하는 방법이다.

가상 클래스는 마침표(.) 대신 콜론(:)을 사용한다. CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없다.

```css
selector:pseudo-class {
  property: value;
}
```

다음은 div 요소가 hover 상태일 때(마우스가 올라와 있을 때) background-color를 yellow로 지정하는 예이다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* a 요소가 hover 상태일 때 */
    a:hover { color: red; }
    /* input 요소가 focus 상태일 때 */
    input:focus { background-color: yellow; }
  </style>
</head>
<body>
  <a href="#">Hover me</a><br><br>
  <input type="text" placeholder="focus me">
</body>
</html>
```

<div class="result"></div>

### 7.1 링크 셀렉터(Link pseudo-classes), 동적 셀렉터(User action pseudo-classes)

| pseudo-class | Description   |
|:-------------|:--------------|
| :link        | 셀렉터가 방문하지 않은 링크일 때
| :visited     | 셀렉터가 방문한 링크일 때
| :hover       | 셀렉터에 마우스가 올라와 있을 때
| :active      | 셀렉터가 클릭된 상태일 때
| :focus       | 셀렉터에 포커스가 들어와 있을 때

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* a 요소가 방문하지 않은 링크일 때 */
    a:link { color: orange; }

    /* a 요소가 방문한 링크일 때 */
    a:visited { color: green; }

    /* a 요소에 마우스가 올라와 있을 때 */
    a:hover { font-weight: bold; }

    /* a 요소가 클릭된 상태일 때 */
    a:active { color: blue; }

    /* text input 요소와 password input 요소에 포커스가 들어와 있을 때 */
    input[type=text]:focus,
    input[type=password]:focus {
      color: red;
    }
    </style>
  </head>
<body>
  <a href="#" target="_blank">This is a link</a><br>
  <input type="text" value="I'll be red when focused"><br>
  <input type="password" value="I'll be red when focused">
</body>
</html>
```

<div class="result"></div>

### 7.2 UI 요소 상태 셀렉터(UI element states pseudo-classes)

| pseudo-class | Description   |
|:-------------|:--------------|
| :checked     | 셀렉터가 체크 상태일 때
| :enabled     | 셀렉터가 사용 가능한 상태일 때
| :disabled    | 셀렉터가 사용 불가능한 상태일 때

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* input 요소가 사용 가능한 상태일 때,
       input 요소 바로 뒤에 위치하는 인접 형제 span 요소를 선택 */
    input:enabled + span {
      color: blue;
    }
    /* input 요소가 사용 불가능한 상태일 때,
       input 요소 바로 뒤에 위치하는 인접 형제 span 요소를 선택 */
    input:disabled + span {
      color: gray;
      text-decoration: line-through;
    }
    /* input 요소가 체크 상태일 때,
       input 요소 바로 뒤에 위치하는 인접 형제 span 요소를 선택 */
    input:checked + span {
      color: red;
    }
  </style>
</head>
<body>
  <input type="radio" checked="checked" value="male" name="gender"> <span>Male</span><br>
  <input type="radio" value="female" name="gender"> <span>Female</span><br>
  <input type="radio" value="neuter" name="gender" disabled> <span>Neuter</span><hr>

  <input type="checkbox" checked="checked" value="bicycle"> <span>I have a bicycle</span><br>
  <input type="checkbox" value="car"> <span>I have a car</span><br>
  <input type="checkbox" value="motorcycle" disabled> <span>I have a motorcycle</span>
</body>
</html>
```

<div class="result"></div>

### 7.3 구조 가상 클래스 셀렉터(Structural pseudo-classes)

| pseudo-class       | Description                          |
|:-------------------|:-------------------------------------|
| :first-child       | 셀렉터에 해당하는 모든 요소 중 첫번째 자식인 요소를 선택한다.
| :last-child        | 셀렉터에 해당하는 모든 요소 중 마지막 자식인 요소를 선택한다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* p 요소 중에서 첫번째 자식을 선택 */
    p:first-child { color: red; }

    /* p 요소 중에서 마지막 자식을 선택 */
    /* body 요소의 두번째 p 요소는 마지막 자식 요소가 아니다.
       body 요소의 마지막 자식 요소는 div 요소이다. */
    p:last-child { color: blue; }
  </style>
</head>
<body>
  <p>This paragraph is the first child of its parent (body).</p>

  <h1>Welcome to My Homepage</h1>
  <p>This paragraph is not the first child of its parent.</p>

  <div>
    <p>This paragraph is the first child of its parent (div).</p>
    <p>This paragraph is not the first child of its parent.</p>
  </div>
</body>
</html>
```

<div class="result"></div>

| pseudo-class       | Description                          |
|:-------------------|:-------------------------------------|
| :nth-child(n)      | 셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식인 요소를 선택한다.
| :nth-last-child(n) | 셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식인 요소를 선택한다.

n은 0부터 시작하는 정수이다.

| n | 2n+1 | 2n-1 | 3n-2 | 3n+1 | -n+5 |
|:-:|:----:|:----:|:----:|:----:|:----:|
| 0 | 1    | -1   | -2   | 1    | 5    |
| 1 | 3    | 1    | 1    | 4    | 4    |
| 2 | 5    | 3    | 4    | 7    | 3    |
| 3 | 7    | 5    | 7    | 10   | 2    |
| 4 | 9    | 7    | 10   | 13   | 1    |
| 5 | 11   | 9    | 13   | 16   | 0    |

0과 음수는 생략되기 때문에 2n+1과 2n-1, 3n-2와 3n+1은 결과적으로 같은 수열을 생성한다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* ol 요소의 자식 요소인 li 요소 중에서 짝수번째 요소만을 선택 */
    ol > li:nth-child(2n)   { color: orange; }
    /* ol 요소의 자식 요소인 li 요소 중에서 홀수번째 요소만을 선택 */
    ol > li:nth-child(2n+1) { color: green; }

    /* ol 요소의 자식 요소인 li 요소 중에서 첫번쨰 요소만을 선택 */
    ol > li:first-child     { color: red; }
    /* ol 요소의 자식 요소인 li 요소 중에서 마지막 요소만을 선택 */
    ol > li:last-child      { color: blue; }

    /* ol 요소의 자식 요소인 li 요소 중에서 4번째 요소 요소만을 선택 */
    ol > li:nth-child(4)    { background: brown; }

    /* ul 요소의 모든 자식 요소 중에서 뒤에서부터 시작하여 홀수번째 요소만을 선택 */
    ul > :nth-last-child(2n+1) { color: red; }
    /* ul 요소의 모든 자식 요소 중에서 뒤에서부터 시작하여 짝수번째 요소만을 선택 */
    ul > :nth-last-child(2n)   { color: blue; }
  </style>
</head>
<body>
  <ol>
    <li>Espresso</li>
    <li>Americano</li>
    <li>Caffe Latte</li>
    <li>Caffe Mocha</li>
    <li>Caramel Latte</li>
    <li>Cappuccino</li>
  </ol>

  <ul>
    <li>Espresso</li>
    <li>Americano</li>
    <li>Caffe Latte</li>
    <li>Caffe Mocha</li>
    <li>Caramel Latte</li>
    <li>Cappuccino</li>
  </ul>
</body>
</html>
```

<div class="result"></div>

| pseudo-class         | Description                          |
|:---------------------|:-------------------------------------|
| :first-of-type       | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 첫번째 등장하는 요소를 선택한다.
| :last-of-type        | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 마지막에 등장하는 요소를 선택한다.
| :nth-of-type(n)      | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 앞에서 n번째에 등장하는 요소를 선택한다.
| :nth-last-of-type(n) | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 뒤에서 n번째에 등장하는 요소를 선택한다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* p 요소의 부모 요소의 자식 요소 중 첫번째 등장하는 p 요소 */
    p:first-of-type  { color: red; }
    /* p 요소의 부모 요소의 자식 요소 중 마지막 등장하는 p 요소 */
    p:last-of-type   { color: blue; }
    /* p 요소의 부모 요소의 자식 요소 중 앞에서 2번째에 등장하는 p 요소 */
    p:nth-of-type(2) { color: green; }
    /* p 요소의 부모 요소의 자식 요소 중 뒤에서 2번째에 등장하는 p 요소 */
    p:nth-last-of-type(2) { color: orange;}

    /* p 요소 중에서 첫번째 자식을 선택 */
    p:first-child { background: brown;}
  </style>
</head>
<body>
  <h1>This is a heading</h1>
  <p>The first paragraph.</p>
  <p>The second paragraph.</p>
  <p>The third paragraph.</p>
  <p>The fourth paragraph.</p>
  <div>
    <h1>This is a heading</h1>
    <p>The first paragraph.</p>
    <p>The second paragraph.</p>
    <p>The third paragraph.</p>
    <p>The fourth paragraph.</p>
  </div>
</body>
</html>
```

<div class="result"></div>

### 7.4 부정 셀렉터(Negation pseudo-class)

| pseudo-class          | Description                          |
|:----------------------|:-------------------------------------|
| :not(셀렉터)            | 셀렉터에 해당하지 않는 모든 요소를 선택한다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* input 요소 중에서 type 어트리뷰트의 값이 password가 아닌 요소를 선택 */
    input:not([type=password]) {
      background: yellow;
    }
  </style>
</head>
<body>
  <input type="text" value="Text input">
  <input type="email" value="email input">
  <input type="password" value="Password input">
</body>
</html>
```

<div class="result"></div>

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
    }
    div {
      float: left;
      width: 32%;
      height: 200px;
      background-color: red;
      /* margin-bottom: 2%; */
      color: #fff;
      font-size: 3em;
      line-height: 200px;
      text-align: center;
    }
    /* div 요소 중에서 1, 4, 7...번째 등장하는 요소가 아닌 요소만을 선택 */
    /* 1, 4, 7... : 공차가 3인 등차수열 */
    div:not(:nth-of-type(3n+1)) {
      margin-left: 2%;
    }
    /* div 요소 중에서 4번째 이후 등장하는 요소가 아닌 요소만을 선택 */
    div:not(:nth-of-type(n+4)) {
      margin-bottom: 2%;
    }
  </style>
</head>
<body>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</body>
</html>
```

<div class="result"></div>

## 8. 가상 요소 셀렉터 (Pseudo-Element Selector)

가상 요소는 요소의 특정 부분에 스타일을 적용하기 위하여 사용된다. 특정 부분이란 예를 들어 다음과 같다.

- 요소 콘텐츠의 첫글자 또는 첫줄

- 요소 콘텐츠의 앞 또는 뒤

가상 요소에는 두개의 콜론(::)을 사용한다. CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없다.

```css
selector::pseudo-element {
  property:value;
}
```

| pseudo-element        | Description                          |
|:----------------------|:-------------------------------------|
| ::first-letter        | 콘텐츠의 첫글자를 선택한다.
| ::first-line          | 콘텐츠의 첫줄을 선택한다. 블록 요소에만 적용할 수 있다.
| ::after               | 콘텐츠의 뒤에 위치하는 공간을 선택한다. 일반적으로 content 어트리뷰트와 함께 사용된다.
| ::before              | 콘텐츠의 앞에 위치하는 공간을 선택한다. 일반적으로 content 어트리뷰트와 함께 사용된다.
| ::selection           | 드래그한 콘텐츠를 선택한다. iOS Safari 등 일부 브라우저에서 동작 않는다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* p 요소 콘텐츠의 첫글자를 선택 */
    p::first-letter { font-size: 3em; }
    /* p 요소 콘텐츠의 첫줄을 선택 */
    p::first-line   { color: red; }

    /* h1 요소 콘텐츠의 앞 공간에 content 어트리뷰트 값을 삽입한다 */
    h1::before {
      content: " HTML!!! ";
      color: blue;
    }
    /* h1 요소 콘텐츠의 뒷 공간에 content 어트리뷰트 값을 삽입한다 */
    h1::after {
      content: " CSS3!!!";
      color: red;
    }

    /* 드래그한 콘텐츠를 선택한다 */
    ::selection {
      color: red;
      background: yellow;
    }
  </style>
</head>
<body>
  <h1>This is a heading</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illum sunt distinctio sed, tempore, repellat rerum et ea laborum voluptatum! Quisquam error fugiat debitis maiores officiis, tenetur ullam amet in!</p>
</body>
</html>
```

<div class="result"></div>

# Reference

* [W3C CSS Document](https://www.w3.org/TR/CSS/)

* [Select Sushi](https://flukeout.github.io/)

* [CSS selectors](https://quirksmode.org/css/selectors/)

* [Poiemaweb](http://poiemaweb.com/css3-selector)
