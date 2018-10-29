# Express 에서 async function을 middleware로 사용하기

express middleware로 async function을 사용했을 때, express는 async function 내부에서 발생한 에러를 잡아내지 못한다.

async function은 내부적으로 Promise인데, express middleware는 promise가 아니라 function인 것을 전제로 작성되었기 때문이다.

async middleware에서 에러가 발생하면 다음과 같은 UnhandledRejectionError를 뿜어낸다.
```
(node:5819) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error
(node:5819) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

해결방법은,

promise 에서 발생한 에러를 잡아낼 수 있는 wrapper 함수를 만들어서 async middleware로 감싸는 것이다.
```js
export const asyncMiddlewareWrapper = (asyncMiddleware) => {
    return async (req, res, next) => {
        try {
            await asyncMiddleware(req, res, next);
        } catch (err) {
            next(err);
        }
    }
}

const asyncMiddleware = async (req, res, next) => {
    throw new Error('Error in asyncMiddleware!');
}

// wrapper로 async middleware를 감싼다.
router.use('/', asyncMiddlewareWrapper(asyncMiddleware), (req, res) => {
    res.json('OK');
})
```
위와 같이 처리하면 async middleware 안에서 에러가 발생해도 서버가 뻗지 않고 express가 에러를 잘 잡아낸다.

