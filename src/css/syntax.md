# 1. 셀렉터 (Selector, 선택자)
스타일을 먹일 HTML 요소들을 선택하기 위해 CSS에서 제공하는 방법.
제목을 빨간색으로 바꾸려면 먼저 제목을 선택해야된다.
```css
p {
    color: red;
}
```
여기서 p를 selector라고 한다.
# 2. 프로퍼티 (Property, 속성)
```css
p {
    color: red;
}
```
여기서 color를 property라고 한다.
# 3. 값 (Value, 속성값)
```css
p {
    color: red;
}
```
여기서 red를 value라고 한다.
# 4. HTML에 적용하는 여러가지 방법
> ## 4-1. Link
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <p>Contents of page</p>
  </body>
</html>
```
> ## 4-2. Embedding
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
        p {
            color: red;
        }
    </style>
  </head>
  <body>
    <p>Contents of page</p>
  </body>
</html>
```
> ## 4-3. Inline
```html
<!DOCTYPE html>
<html>
  <body>
    <p style="color: red">Contents of page</p>
  </body>
</html>
```