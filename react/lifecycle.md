# React lifecycle 정리

## Mount
- getDefaultProps()
- getInitialState()
- componentWillMount() : setState() OK
- render() : Can't use setState()
- componentDidMount()

## Updating
- componentWillReceiveProps(nextProps, nextContext) : if props changed
- shouldComponentUpdate(nextProps, nextState, nextContext) : Can't use setState()

<br />-------------- if shouldComponentUpdate return true --------------

- componentWillUpdate(nextProps, nextState, nextContext) : Can't use setState()
- render() : Can't use setState()
- componentDidUpdate(prevProps, prevState, prevContext)

## Unmount
    - componentWillUnmount() : Can't use setState()
