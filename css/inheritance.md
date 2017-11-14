# 상속(Inheritance)

부모나 조상 요소에 적용된 속성과 속성값을 자식 요소가 물려 받는 것을 상속이라 한다.
CSS 역시 상속이 가능하지만, 자동으로 상속이 되는 속성과 그렇지 않은 속성이 있다.
표로 살펴보면 다음과 같다.

| property     | Inherit     |
| :----------: |:-----------:|
| width/height | no
| margin       | no
| padding      | no
| border       | no
| box-sizing   | no
| display      | no
| visibility   | yes
| opacity      | yes
| background   | no
| font         | yes
| color        | yes
| line-height  | yes
| text-align   | yes
| vertical-align  | no
| text-decoration | no
| white-space | yes
| position    | no
| top/right/bottom/left | no
| z-index     | no
| overflow    | no
| float       | no

```html
<div class="parent">
    <div class="child">dd</div>
</div>
```

```css
.parent {
    width: 200px;
    height: 200px;
    background-color: orange;
}
.child {
    width: 100px;
    height: inherit;
    background-color: blue;
}
```
height 속성은 기본적으로 자동 상속이 되지 않는 속성이지만, inherit 키워드를 지정하면 상속이 가능하다.