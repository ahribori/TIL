# Higher Order Component(HOC)

리액트 컴포넌트를 파라미터로 받아 리액트 컴포넌트를 리턴하는 함수

> 왜 쓰냐?

* 코드 재사용
* 컴포넌트 강화 (원래 있던 컴포넌트에 커스텀 props, state, options 등을 추가하고 싶을 때)

함수 형태의 컴포넌트를 받아 강화된 함수형 컴포넌트를 리턴하는 HOC
```jsx
const withName = (WrappedComponent) => {
    const customProps = {
        name: 'ahribori',
    };

    return (props) => {
        return <WrappedComponent {...props} {...customProps} />
    }
}
```

클래스 형태의 컴포넌트를 받아 강화된 함수형 컴포넌트를 리턴하는 HOC
```jsx
import React from 'react';

const withName = (WrappedComponent) => {

    render() {
        const customProps = {
            name: 'ahribori',
        };

        return class EnhancedComponent extends React.Component {
            return <WrappedComponent {...props} {...customProps} />
        }
    }
}
```

> 위처럼 만든 HOC를 사용하려면?

```jsx
import withName from './pathOfHOC';

class MyComponent extends React.Component {

    constructor(props) {
        super(props);

        console.log(props.name); // 'ahribori'
    }

    render() {
        return <div>My Component</div>
    }
}

export default withName(MyComponent);
```

> MyComponent를 withName HOC로 강화하였다! (props에 name이 생김)

react-redux나 react-router도 이 hoc 패턴을 이용하여 props를 주입하는 것을 알 수 있다.