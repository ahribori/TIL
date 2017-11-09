# Background

## 1. background-image
* 요소의 배경 이미지 지정
```css
body {
    background-image: url("http://image-server.com/my-image.png");
}
```
* 여러 개의 이미지를 설정할 수 있음 (먼저 설정된게 앞에 출력)
```css
body {
    background-image: url("http://image-server.com/my-image1.png") url("http://image-server.com/my-image2.png");
}
```
## 2. background-repeat
* background-image의 반복을 지정
* background-repeat: repeat (기본값)
* background-repeat: repeat-x (수평 반복)
* background-repeat: repeat-y (수직 반복)
* background-repeat: no-repeat (반복 안함)
* 이미지를 여러 개 설정했을 경우 속성 값도 마찬가지로 나열하여 설정할 수 있음
```css
body {
    background-image: url("http://image-server.com/my-image1.png") url("http://image-server.com/my-image2.png");
    background-repeat: no-repeat, repeat;
}
```
## 3. background-size
* 배경 이미지의 사이즈를 지정
* px, %, cover, contain 등이 속성값으로 올 수 있음
* width, height를 지정할 수 있는데 둘 중 하나만 지정할 경우 나머지 하나는 auto로 지정됨
* background-size: (width) (height);
* background-size: cover (이미지의 비율을 유지한 상태에서 요소의 너비와 높이 중 큰 쪽에 이미지를 맞춤)
* background-size: contain (이미지의 비율을 유지한 상태에서 이미지가 잘리는 부분 없이 모두 보이는 쪽으로 맞춤)
```css
/* Keyword values */
background-size: cover;
background-size: contain;

/* One-value syntax */
/* the width of the image (height becomes 'auto') */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* Two-value syntax */
/* first value: width of the image, second value: height */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* Multiple backgrounds */
background-size: auto, auto; /* Not to be confused with `auto auto` */
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;

/* Global values */
background-size: inherit;
background-size: initial;
background-size: unset;
```
## 4. background-attachment
* background-attachment: scroll (기본값으로 요소에 상대적인 위치이다)
* background-attachment: fixed (윈도우 창에 상대적인 위치. 스크롤을 내려도 이미지가 고정되어있음)
* background-attachment: local (잘 안씀. 요소의 내용에 상대적인 위치. overflow: auto; 처럼 자동스크롤이 생길 때 배경이미지는 고정되어있는데, local 속성을 쓰면 같이 스크롤됨)

```css
/* Keyword values */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* Global values */
background-attachment: inherit;
background-attachment: initial;
background-attachment: unset;
```
## 5. background-position
* 기준점은 박스 모델의 좌측 상단 모서리
* 기본값은 background-position: 0% 0%;
```css
/* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> values */
background-position: 25% 75%;

/* <length> values */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiple images */
background-position: 0 0, center;

/* Edge offsets values */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Global values */
background-position: inherit;
background-position: initial;
background-position: unset;
```

## 6. background-color
* 색상값과 transparent를 지정할 수 있음
```css
/* Keyword values */
background-color: red;

/* Hexadecimal value */
background-color: #bbff00;

/* Hexadecimal value with alpha channel */
background-color: #11ffee00; /* 00 - fully transparent */
background-color: #11ffeeff; /* ff - fully opaque */

/* RGB value */
background-color: rgb(255, 255, 128);

/* RGBA value or RGB with alpha channel */
background-color: rgba(117, 190, 218, 0.0); /* 0.0 - fully transparent */
background-color: rgba(117, 190, 218, 0.5); /* 0.5 - semi-transparent */
background-color: rgba(117, 190, 218, 1.0); /* 1.0 - fully opaque */
​​​​​​​
/* HSLA value */
background-color: hsla(50, 33%, 25%, 0.75);

/* Special keyword values */
background-color: currentcolor;
background-color: transparent;

/* Global values */
background-color: inherit;
background-color: initial;
background-color: unset;
```
## 7. Shorthand
```css
background: color || image || repeat || attachment || position
```
