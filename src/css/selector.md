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

```css
selector:pseudo-class {
  property: value;
}
```

> ### 7.1 링크 셀렉터(Link pseudo-classes), 동적 셀렉터(User action pseudo-classes)

* :link        : 셀렉터가 방문하지 않은 링크일 때
* :visited     : 셀렉터가 방문한 링크일 때
* :hover       : 셀렉터에 마우스가 올라와 있을 때
* :active      : 셀렉터가 클릭된 상태일 때
* :focus       : 셀렉터에 포커스가 들어와 있을 때

> ### 7.2 UI 요소 상태 셀렉터(UI element states pseudo-classes)

* :checked     : 셀렉터가 체크 상태일 때
* :enabled     : 셀렉터가 사용 가능한 상태일 때
* :disabled    : 셀렉터가 사용 불가능한 상태일 때

> ### 7.3 구조 가상 클래스 셀렉터(Structural pseudo-classes)

* :first-child       : 셀렉터에 해당하는 모든 요소 중 첫번째 자식인 요소를 선택한다.
* :last-child        : 셀렉터에 해당하는 모든 요소 중 마지막 자식인 요소를 선택한다.
* :nth-child(n)      : 셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식인 요소를 선택한다.
* :nth-last-child(n) : 셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식인 요소를 선택한다.
* :first-of-type       : 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 첫번째 등장하는 요소를 선택한다.
* :last-of-type        : 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 마지막에 등장하는 요소를 선택한다.
* :nth-of-type(n)      : 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 앞에서 n번째에 등장하는 요소를 선택한다.
* :nth-last-of-type(n) : 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 뒤에서 n번째에 등장하는 요소를 선택한다.


> ### 7.4 부정 셀렉터(Negation pseudo-class)

* :not(셀렉터)            : 셀렉터에 해당하지 않는 모든 요소를 선택한다.


## 8. 가상 요소 셀렉터 (Pseudo-Element Selector)

```css
selector::pseudo-element {
  property:value;
}
```

* ::first-letter        : 콘텐츠의 첫글자를 선택한다.
* ::first-line          : 콘텐츠의 첫줄을 선택한다. 블록 요소에만 적용할 수 있다.
* ::after               : 콘텐츠의 뒤에 위치하는 공간을 선택한다. 일반적으로 content 어트리뷰트와 함께 사용된다.
* ::before              : 콘텐츠의 앞에 위치하는 공간을 선택한다. 일반적으로 content 어트리뷰트와 함께 사용된다.
* ::selection           : 드래그한 콘텐츠를 선택한다. iOS Safari 등 일부 브라우저에서 동작 않는다.
