# 박스 모델(Box Model)

## 1. Box Model

<img width="708" alt="box-model" src="https://user-images.githubusercontent.com/10773118/32526189-5ea74e74-c46b-11e7-94df-59a911e11e17.png">

>
1.1. Content:
    - 태그 안에 내용을 넣었을 때 그 내용이 표시되는 영역.
    - width와 height 속성을 가짐
>
1.2. Padding:
    - Border 안쪽 여백
    - 기본 색은 transparent
    - 요소에 적용된 배경색과 이미지를 따름
>
1.3. Border:
    - 테두리 영역
>
1.4. Margin:
    - Border 바깥 여백
    - 배경색 지정할 수 없음
    - ** 인접한 엘리먼트의 시각적 요소가 없을 때 '마진 겹침 현상'이 발생함!!

## 2. Width, Height 그리고 box-sizing 속성의 관계

>
2.1. Width, Height
    - 너비와 높이를 지정하게 되는 속성
    - 요소의 content-box 속성의 값에 따라 Width와 Height의 기준 영역이 달라짐
>
2.2. content-box (기본 값)
    - box-sizing: content-box
    - box-sizing 속성의 값이 content-box로 지정되어 있으면 요소의 width와 height는 Content 영역의 너비와 너비가 된다.
>
2.3. border-box
    - box-sizing: border-box
    - box-sizing 속성의 값이 border-box로 지정되어 있으면 요소의 width와 height는 Content + Padding + Border 영역의 너비와 너비가 된다.

## 3. Margin, Padding

>
3.1. Margin
```css
margin: 25px 50px 75px 100px;   // shorthand (top, right, bottom, left)
margin-top: 40px;
margin-right: 30px;
margin-bottom: 20px;
margin-left: 10px;
```

>
3.2. Padding
```css
padding: 25px 50px 75px 100px;   // shorthand (top, right, bottom, left)
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;
```

>
3.3. Margin을 이용한 가운데 정렬
```css
.wrapper {
    margin: 0 auto;
    width: 800px;
}
```
- margin을 auto로 주면 가운데 정렬을 하는 효과가 있다.
- 단, width가 지정되어 있어야 한다.


## 4. Border

테두리 영역의 스타일을 정하는 방법

```css
border: 1px solid black;  // shorthand (크기, 스타일, 색상)

border-radius: 10px 40px 40px 10px; // shorthand
border-top-left-radius:     10px;
border-top-right-radius:    40px;
border-bottom-right-radius: 40px;
border-bottom-left-radius:  10px;

// 박스 모델의 왼쪽 위 모서리를 x축 반지름을 50px y축 반지름을 25px로 하는 타원 형태의 곡선으로 둥글게 지정
border-top-left-radius: 50px 25px;
```