# 트랜지션과 애니메이션
요소의 속성값이 변화하면 보통 즉각 그 효과가 나타나는데, 트랜지션과 애니메이션을 사용하면 변화가 일정 시간(duration)에 걸쳐 나타나게 할 수 있다.
트랜지션과 애니메이션의 사용법과 각각의 특징을 정리한다.

## 1. 트랜지션
* 요소의 변화를 일정 기간(duration)동안 일어나게 함
* 자동으로 발동되지 않음 (hover나 onclick 같은 이벤트 트리거에 의해 동작함)

### 1-1. 사용법
```html
<div class="sqare"></div>
```
```css
.sqare {
    width: 100px;
    height: 100px;
    background-color: red;

    transition-property: width, background-color; // 트랜지션의 대상이 되는 프로퍼티를 지정 (기본값 all)
    transition-duration: 1.2s, 3s // 변화가 일어나는 기간. 초단위. 프로퍼티와 각각 대응 (기본값 0s)
    transition-timing-function: ease; // 트랜지션 변화율 함수 지정 (기본값 ease)
    transition-delay: 1s; // 트리거 이벤트 발생 후 몇 초 후에 트랜지션이 시작될 것인지 지정 (기본값 0s)
    transition : (shorthand)
}

.sqare:hover {
    width: 300px;
    background-color: blue;
}
```

### 1-2. 주의점
* layout에 영향을 주는 요소의 크기나 위치가 변화하면 영향을 받는 모든 요소들의
 크기나 위치를 재계산 하게 되는데 영향을 받는 요소들이 많을수록 많은 부하가 감
* 가급적이면 가능한 낮은 계층의 요소에 트랜지션을 효과를 주기 위한 노력을 해야함

layout에 영향을 주는 속성들
```
width height padding margin border
display position float overflow
top left right bottom
font-size font-family font-weight
text-align vertical-align line-height
clear white-space
```

## 2. 애니메이션
* 트랜지션보다 할 수 있는 것이 많음
* 트랜지션은 시작하기 위해 이벤트가 필요하지만 애니메이션은 시작, 정지, 반복까지 제어할 수 있음
* 하나 또는 복수의 `@keyframes`으로 이루어짐

### 2.1 `@keyframes`
`@keyframes` 키워드는 애니메이션을 정의하는 키워드라고 할 수 있음
```css
@keyframes myAnimation {

}
```
myAnimation 이라는 이름을 가진 `@keyframes`을 선언한 모습

```css
@keyframes myAnimation {
    from {
        background-color: red;
        width: 100px;
        height: 100px;
    }
    to {
        background-color: blue;
        width: 200px;
        heigh: 100px;
    }
}
```
from{}과 to{}로 애니메이션이 시작하는 시점의 상태와 끝나는 시점의 상태를 정의할 수 있다.

```css
@keyframes myAnimation {
    0% {
        background-color: red;
        width: 100px;
        height: 100px;
    }
    30% {
        background-color: yellow;
    }
    100% {
        background-color: blue;
        width: 200px;
        heigh: 200px;
    }
}
```
from{}은 사실 0%이고 to{}는 100%이다. %단위로 애니메이션의 각 시점을 세밀하게 기술할 수 있다.

```html
<div class="sqare"></div>
```
```css
.sqare {
    animation-name: myAnimation; // @keyframes 이름
    animation-duration: 3s // 변화가 일어나는 기간. 초단위. (기본값 0s)
    animation-iteration-count: 3; (기본값 1. number or infinite.)
    animation-timing-function: ease; // 애니메이션 함수 지정 (기본값 ease)

    /*
        애니메이션이 반복될 때 진행 방향을 지정

        normal: to -> from (기본값)
        reverse: from -> to
        alternate: 홀(normal) 짝(reverse)
        alternate-reverse: 홀(reverse) 짝(normal)
    */
    animation-direction: normal;

    /*
        애니메이션이 실행 상태가 아닐 때 (대기 or 종료) 요소의 스타일 지정

        none:       대기 -> 시작 프레임(from)에 설정한 스타일을 적용하지 않고 대기한다.
                    종료 -> 애니메이션 실행 전 상태로 애니메이션 요소의 프로퍼티값을 되돌리고 종료한다.

        forwards:   대기 -> 시작 프레임(from)에 설정한 스타일을 적용하지 않고 대기한다.
                    종료 -> 종료 프레임(to)에 설정한 스타일을 적용하고 종료한다.

        backwrads:  대기 -> 시작 프레임(from)에 설정한 스타일을 적용하고 대기한다.
                    종료 -> 애니메이션 실행 전 상태로 애니메이션 요소의 프로퍼티값을 되돌리고 종료한다.

        both :      대기 -> 시작 프레임(from)에 설정한 스타일을 적용하고 대기한다.
                    종료 -> 종료 프레임(to)에 설정한 스타일을 적용하고 종료한다.
    */
    animation-fill-mode: none;

    // running(기본값) || paused
    animation-play-state: running;
    animation-delay: 1s; // 요소 로딩 후 몇 초 후에 애니메이션이 시작될 것인지 지정 (기본값 0s)
    animation : (shorthand)
}
```
위에서 정의한 myAnimation을 실제 요소에 적용한 모습

## 3. 트랜스폼(Transform)
* 요소의 이동, 회전, 확대축소, 비틀기 효과를 제공하는 함수
* 트랜지션과 애니메이션과 조합하여 사용하면 편리

### 3-1. 사용법
```css
/*
    트랜스폼 함수들을 쉼표 없이 나열
*/
transform: 함수1 함수2 함수3

/*
    * transform-origin 속성은 요소의 기준점을 설정
    * 기본값은 요소의 정 중앙인 50%, 50%이다.
*/
transform-origin: 50% 50% 0 (x, y, z)
```

### 3-2. 2D 트랜스폼

| transform function    | 설명                          | 단위
|:----------------------|:-----------------------------|:-----------:|
| translate(x,y)        | 요소의 위치를 X축으로 x만큼, Y축으로 y만큼 이동시킨다. | px, %, em 등
| translateX(n)         | 요소의 위치를 X축으로 x만큼 이동시킨다.             | px, %, em 등
| translateY(n)         | 요소의 위치를 Y축으로 y만큼 이동시킨다.             | px, %, em 등
| scale(x,y)            | 요소의 크기를 X축으로 x배, Y축으로 y배 확대 또는 축소 시킨다. | 0과 양수
| scaleX(n)             | 요소의 크기를 X축으로 x배 확대 또는 축소 시킨다. | 0과 양수
| scaleY(n)             | 요소의 크기를 Y축으로 y배 확대 또는 축소 시킨다. | 0과 양수
| skew(x-angle,y-angle) | 요소를 X축으로 x 각도만큼, Y축으로 y 각도만큼 기울인다. | +/- 각도(deg)
| skewX(x-angle)        | 요소를 X축으로 x 각도만큼 기울인다. | +/- 각도(deg)
| skewY(y-angle)        | 요소를 Y축으로 y 각도만큼 기울인다. | +/- 각도(deg)
| rotate(angle)         | 요소를 angle만큼 회전시킨다.      | +/- 각도(deg)

### 3-3. 3D 트랜스폼

| transform function    | 설명                          | 단위
|:----------------------|:-----------------------------|:-----------:|
| translate3d(x,y,z)    | 요소의 위치를 X축으로 x만큼, Y축으로 y만큼 Z축으로 z만큼 이동시킨다. | px, %, em 등
| translateX(n)         | 요소의 위치를 X축으로 x만큼 이동시킨다.             | px, %, em 등
| translateY(n)         | 요소의 위치를 Y축으로 y만큼 이동시킨다.             | px, %, em 등
| translateZ(n)         | 요소의 위치를 Z축으로 z만큼 이동시킨다.             | px, %, em 등
| scale3d(x,y)          | 요소의 크기를 X축으로 x배, Y축으로 y배, Z축으로 z배 확대 또는 축소 시킨다. | 0과 양수
| scaleX(n)             | 요소의 크기를 X축으로 x배 확대 또는 축소 시킨다. | 0과 양수
| scaleY(n)             | 요소의 크기를 Y축으로 y배 확대 또는 축소 시킨다. | 0과 양수
| scaleZ(n)             | 요소의 크기를 Z축으로 z배 확대 또는 축소 시킨다. | 0과 양수
| rotate3d(x,y,z)       | 요소를 X축으로 x각도, Y축으로 y각도, Z축으로 z각도 회전시킨다. | +/- 각도(deg)
| rotateX(x)            | 요소를 X축으로 x각도 회전시킨다.      | +/- 각도(deg)
| rotateY(y)            | 요소를 Y축으로 y각도 회전시킨다.      | +/- 각도(deg)
| rotateZ(z)            | 요소를 Z축으로 z각도 회전시킨다.      | +/- 각도(deg)


## 4. WebGL
WebGL 기술을 이용하면 더욱 고품질의 3D를 웹에서 구현할 수 있음
* [WebGL](https://developer.mozilla.org/ko/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
* [WebGL Framework - Three.js](http://threejs.org/)