# Display
## 1. display
>
### 1.1 block
* 항상 새로운 라인에서 시작
* width: 100%
* width, height, margin, padding 지정 가능
* block 엘리먼트 내부에 inline 요소 포함 가능
* div, h1~h6, p, ol, ul, li, hr, table, form 등이 있음
### 1.2 inline
* 새로운 라인에서 시작하지 않고 문자 그대로 인라인
* width: 컨텐트의 너비
* width, height, margin-top, margin-bottom 지정 불가
* 상하 여백은 line-height로 지정
* inline 요소 뒤에 엔터나 스페이스가 들어가면 space(4px) 들어감
* span, a, strong, img, br, input, select, textarea, button 등이 있음
### 1.3 inline-block
* inline 처럼 한 줄에 표현되면서 width, height, margin을 지정 가능(완전체ㅋ)
* 상하 여백을 지정할 때 margin-top, margin-bottom, line-height 전부 먹음
* inline 요소처럼 뒤에 엔터나 스페이스 들어가면 space(4px) 들어감
### 1.4 none
* 엘리먼트를 화면에 표시하지 않는다.
* visibility: hidden이 그냥 화면에 표시만 하지 않는 반면,
display: none은 dom 자체가 사라짐.

## 2. visibility
>
### 2.1 visible
* 요소를 화면에 보이게 한다 (기본값)
### 2.2 hidden
* 요소를 화면에 보이지 않게 한다.
* display: none이 dom 자체를 사라지게 한다면 visibility: hidden은 공간은 있고 표시만 하지 않음
### 2.3 collapse
* table 요소에 사용하며 행이나 열을 보이지 않게 함
### 2.4 none
* table 요소의 행이나 열을 보이지 않게 함. IE, 파이어폭스에서만 동작하며 크롬에서는 hidden과 동일하게 동작한다. 잘 안쓸 것같다.

## 3. opacity
>
* 요소의 투명도를 정의
* 0.0 ~ 1.0 사이값
* 0에 가까울수록 투명해지고 1에 가까울수록 진해짐
* 요소를 투명하게 만들면 하위 노드들도 같이 투명해짐