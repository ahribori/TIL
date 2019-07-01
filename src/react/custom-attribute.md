# React에서 Custom Attribute 사용하기

```jsx
import React from 'react';

class MyComponent extends React.Component {
    handleClick = (e) => {
        console.log(e.target.dataset.hello); // 안녕하세요!
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick} data-hello="안녕하세요!">버튼</button>
            </div>
        );
    }
}

export default MyComponent;
```
data-* , aria-* 와 같은 패턴의 custom attribute를 react dom에서 사용했을 경우 element의 dataset object에 값들이 들어간다.