# Font와 Text에 대하여
## 1. font-size
폰트의 크기를 정의

## 2. font-family
폰트를 지정
* 디바이스에 해당 폰트가 설치되어 있어야함
* 폰트는 여러개 동시에 지정 가능
* 첫 번째로 지정한 폰트가 디바이스에 설치되어있지 않으면 두 번째로 지정한 폰트가 적용
* 지정한 폰트가 모두 디바이스에 설치되어 있지 않으면 OS 디폴트 폰트 적용
* 폰트명에 띄어쓰기가 없는 경우 " 로 감싸주지 않아도 됨
```css
.font {
    font-family: "Times New Roman", Times, serif;
}
```

## 3. font-style
폰트의 스타일을 지정
* normal
* italic
* oblique

## 4. font-weight
폰트의 굵기를 지정
* 100~900 사이의 값
* normal
* bold
* lighter
* bolder

## 5. font Shorthand

font : font-style(optional) font-variant(optional) font-weight(optional) font-size(mandatory) line-height(optional) font-family(mandatory)

## 6. line-height
인라인 요소의 높이를 지정
* %나 배수의 단위
* 요소의 폰트를 기준으로 계산

## 7. letter-spacing
글자와 글자 사이의 간격을 지정

## 8. text-align
텍스트의 수평 정렬을 설정
* left, center, right: 왼쪽, 가운데, 오른쪽 정렬
* justify: 왼쪽꽈 오른쪽 양끝으로 글자 간격을 벌려서 맞춤

## 9. text-decoration
* none
* overline : 윗줄
* line-through : 가운데줄
* underline : 밑줄