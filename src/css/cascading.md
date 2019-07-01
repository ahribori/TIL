# 캐스캐이딩(Cascading)
요소에 css 선언을 적용하는 방법은 여러 가지가 있다. 예를 들면,

style.css
```css
.sample {
    color: pink;
}
```
```html
<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <style>
            .sample {
                color: blue;
            }
        </style>
    </head>
    <body>
        <div class="sample" style="color: red;">Hello, world!</div>
    </body>
</html>
```
클래스가 sample인 div 요소의 글자 색상을, css 파일에서는 pink, style 태그에서는 blue, inline에서는 red 라고 정의하고 있다.
이럴 경우, css 적용 우선순위가 필요한데 이를 <b>캐스캐이딩(Cascading)</b> 이라고 한다.

css 적용 우선순위는 다음과 같은 규칙을 따른다.
### 1. 선언 위치
1번에 가까울수록 우선순위가 높고 5번에 가까울수록 우선순위가 낮음
1. head 요소 내의 style 요소
2. head 요소 내의 style 요소 내의 @import 문
3. `<link>` 로 연결된 CSS 파일
4. `<link>` 로 연결된 CSS 파일 내의 @import 문
5. 브라우저 디폴트 스타일시트


### 2. 명시도
적용 대상을 구체적으로 특정할수록 우선순위가 높아짐
```
!important > 인라인 스타일 > 아이디 선택자 > 클래스/어트리뷰트/가상 선택자 > 태그 선택자 > 전체 선택자 > 상위 요소에 의해 상속된 속성
```

### 3. 선언 순서
나중에 선언된 것이 적용된다.
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    p { color: blue; }
    p { color: red; }

    .red { color: red; }
    .blue { color: blue; }
  </style>
</head>
<body>
  <p>Will be RED.</p>
  <p class="blue red">Will be BLUE.</p>
</body>
</html>
```