# 마진 겹침 현상

마진 겹침 현상은 인접한 엘리먼트의 margin이 만났을 때 겹쳐서 표현되는 css의 특징이다.
여러 개의 문단을 표현할 때 동일한 간격을 유지하기 위해 이렇게 계산하는 것으로 추측되지만
의도했던 것과 다른 결과를 가져올 때가 많아 많은 혼란을 야기한다.

## 마진 겹침 현상이 발생하는 조건
* 인접한 엘리먼트의 시각적 요소가 없을 때 마진이 겹친다.

### 1. 부모-자식 마진 겹침
```html
<div class="parent">
    <div class="child"></div>
</div>
```

```css
.parent {

}

.child {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: red;
    height: 20px;
}
```
위와 같은 상황에서 보통 parent와 child 사이가 20px 만큼 떨어져 있을 것이라고 기대하지만
실상은 child의 margin이 parent를 뚫고 나와 parnet 바깥으로 margin이 20px 생긴다.

### 2. 형제 마진 겹침
```html
<div class="element1"></div>
<div class="element2"></div>
```
```css
.element1 {
    margin-top: 50px;
    margin-bottom: 30px;
    background-color: #EE9D31;
}
.element2 {
    height: 100px;
    margin-top: 40px;
    background-color: deepskyblue;
}
```
위와 같은 경우, element1의 시각적 요소가 없기 때문에 마진 겹침 현상이 발생한다.
element1의 위쪽으로 50px의 margin, 아래쪽으로 40px의 공간을 두고(element1의 margin-bottom과 element2의 margin-top중에 큰 값이 적용되므로)
element2가 위치해 있을 것 같지만 실상은 50px의 공백 이후에 바로 element2가 위치한다.
element1의 시작적 요소가 없어서 마진 겹침 현상이 발생했기 때문인데, element1의 margin-top과 margin-bottom 중
큰 값 하나만 적용됨을 유의하자.


> 이러한 마진 겹침 현상을 제거하려면 다음 조건중 1개만 충족하면 된다.
* parent를 시각적 요소로 만든다 (border를 추가하거나 시각적으로 보이는 내용물을 추가)
* parent에 overflow: hidden; 이나 overflow: auto;를 추가한다
* parent의 top과 bottom을 margin -1px, padding 1px 해준다