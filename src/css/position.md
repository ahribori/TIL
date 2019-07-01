# 1. 위치(Position)

## 1-1. static
* 기본값
* HTML 기본 배치 순서인 왼쪽에서 오른쪽, 위에서 아래로 배치
* 부모 요소의 위치가 기준이 됨

## 1-2. relative
* top, bottom, left, right 속성 사용 가능
* 부모 요소를 기준
* 기본적인 동작 원리는 기본값인 static과 동일

## 1-3. absolute
* top, bottom, left, right 속성 사용 가능
* <b>static요소가 아닌 가장 가까운 조상 요소를 기준</b>(가장 가까운 relative, absolute, fixed 조상 기준)
* 부모와 모든 조상 요소가 static일 경우, document body 기준
* 다른 요소와 위치가 겹쳐도 덮어씀 (float)
* absolute로 선언을 하게 되면 width가 inline 요소처럼 컨텐츠의 너비에 맞게 변화되므로 적절한 width를 지정해야 함

## 1-4. fixed
* top, bottom, left, right 속성 사용 가능
* viewport 기준
* 스크롤이 되어도 항상 화면상 절대적인 위치가 고정
* fixed로 선언을 하게 되면 width가 inline 요소처럼 컨텐츠의 너비에 맞게 변화되므로 적절한 width를 지정해야 함


# 2. z-index

컴퓨터 화면이 x축과 y축만 있는 2차원 평면이 아니라 화면을 보는 나와 얼마나 가까이 또는 멀리 있는지를 나타내는
z축까지 있다고 생각해보면 쉽게 이해할 수 있는 속성이다.

* z-index 속성값이 크면 클수록 요소가 전면에 출력 (나와 가까이 있음)
* z-index 속성값이 적용되려면 요소의 display 속성값이 기본값(static)이 아니어야 함
* <b>z-index 속성은 요소의 계층 구조가 상위일수록(root에 가까울수록) 우선 순위가 높음</b> (자식의 z-index값을 암만 올려봤자 조상 엘리먼트의 z-index가 작으면 소용없음)


# 3. overflow

overflow 프로퍼티는 자식 요소가 부모 요소의 영역를 벗어났을 때 처리 방법을 정의

| 속성값	    | 설명
|:----------|:-----------------
| visible   | 영역을 벗어난 부분을 표시한다. (기본값)
| hidden    | 영역을 벗어난 부분을 잘라내어 보이지 않게 한다.
| scroll    | 영역을 벗어난 부분이 없어도 스크롤 표시한다.(현재 대부분 브라우저는 auto과 동일하게 작동한다)
| auto      | 영역을 벗어난 부분이 있을때만 스크롤 표시한다.
