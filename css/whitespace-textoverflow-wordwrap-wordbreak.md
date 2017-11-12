# white-space, text-overflow, word-wrap, word-break 속성 정리
볼 때 마다 헷갈리는 속성들이라 따로 정리함

## 1. white-space
* space, tab, line break 세 가지를 white space라고 함
* html은 기본적으로 white space를 연속으로 아무리 입력해봤자 space 한 번만 적용됨 (줄바꿈도 무시)
* 텍스트는 기본적으로 요소의 width를 벗어나지 않고 자동 줄바꿈 됨

white-space는 이러한 공백에 관련된 설정들을 다루는 속성이다.

| 속성값   | line break | space/tab | 자동줄바꿈
|:---------|:----------:|:---------:|:---------:|
| normal   | 무시       | 1번만      | O
| nowrap   | 무시       | 1번만      | X
| pre      | 반영       | 무제한     | X
| pre-wrap | 반영       | 무제한     | O
| pre-line | 반영       | 1번만      | O

## 2. text-overflow
요소에서 삐져나간(자동줄바꿈이 되지 않은) 텍스트의 처리 방법을 정의. 이 속성을 사용하려면 몇 가지 조건이 충족되어야 함.
* white-space: nowrap (자동줄바꿈이 되지 않은 텍스트에 대해서 정의하는 속성이기 때문에)
* width가 지정되어야 함. (즉, display속성은 block or inline-block 이어야 함)
* overflow 속성이 visible 말고 다른 속성으로 지정되어야 함 (hidden, scroll, auto, ...등등)

위의 조건들을 충족하면 text-overflow 속성이 적용된다.

* clip : 영역을 벗어난 텍스트를 표시하지 않음 (기본값)
* ellipsis : 영역을 벗어난 텍스트를 표시하지 않고 말줄임표(...)를 뒤에 표시한다

## 3. word-wrap
단어의 길이가 길어서 영역을 벗어난 텍스트의 처리 방법을 정의
apple, banana 등은 단어의 길이가 짧지만 asdkfjaklsdjfklasdjfklasjdfkljasdlfjsadlfdsaklfjfklsadjf 같은 단어는 길이가 매우 길다.

* normal: 단어의 길이가 길면 삐져나감 (기본값)
* break-word: 단어의 길이가 길면 줄바꿈

## 4. word-break
단어의 길이가 길어서 영역을 벗어난 텍스트의 처리 방법을 정의

* normal: 단어의 길이가 길면 삐져나감 (기본값)
* break-all: 단어의 길이가 길면 줄바꿈 (가차없이)
* keep-all: 엔터나 스페이스를 기준으로 자름. 공백이 없다면 줄바꿈 되지 않음.

---
word-wrap과 word-break는 참 여러모로 애매모호한 점이 많은 것 같다...