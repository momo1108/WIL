# React-Redux

![](https://miro.medium.com/max/588/1*rwnd-zztHEQ_Qt-ZVXH7Jw.png)

```js
import {createStore} from 'redux';
// 먼저 trigger될 Action들을 만들어 줘야한다.
// Action은 Object를 return 해주는 function이고, Object의 키 값은 type과 payload로 나눌 수 있는데, type은 리듀서에서 Action을 구분할 수 있게 해주고, payload는 action에서 reducer로 보내고 싶은 데이터를 마음대로 보내주는 역할이다.
const plus = () => {
    return {
        type: 'PLUS'
    }
};
const minus = () => {
    return {
        type: 'MINUS'
    }
};

// 이제 Trigger된 Action들에 따라 실행 될 Reducer들을 설정해주자. Reducer는 state의 변화를 정의해준다.
const counter = (state=0, action) => {
    switch(action.type){
        case 'PLUS':
            return state + 1;
        case 'MINUS':
            return state - 1;
    }
};

// 이제 정의된 Reducer를 store에 연결해주자.
let store = createStore(counter);

store.dispatch(plus());
```

위의 흐름이 가장 기본적인 흐름이다.

이제 React와 같이 사용해보자. 각 기능들을 컴포넌트로 만들어서 모듈처럼 사용해보자.

먼저 action들과 reducer들을 저장할 actions, reducers 디렉터리를 만들어주자.

reducers 디렉터리에는 각 기능을 가진 reducer들과 모든 reducer들을 통합해주는 말하자면 rootreducer를 만들 것이다.

```js
// reducers 디렉터리 안에 만든 카운트 리듀서
// counter.js
const counterReducer = (state = 0, action){
    switch(action.type){
        case 'PLUS':
            return state + 1
        case 'MINUS':
            return state - 1
    }
}
export default counterReducer;
```

```js
// reducers 디렉터리 안에 로그인체크 리듀서
// isLogged.js
const loggedReducer = (state = false, action){
    switch(action.type){
        case 'SIGN_IN':
            return !state
    }
}
export default loggedReducer;
```

이제 우리는 각각의 기능을 가진 리듀서 두개를 생성하였다. 처음 흐름을 보기위해 짠 코드에서는

`const store = createStore(counter);`

명령어로 리듀서를 스토어에 연결해주었다. 그렇다면 지금처럼 리듀서를 여러개 만든 경우는 어떻게 할까?

단순하게 createStore 함수 안에 2개의 arguments로 넣어주면 된다고 생각할 수 있지만 그 경우 제대로 작동하지 않을 것이다.

답은 두 개의 리듀서를 하나로 합쳐주는 것이다. 이렇게 여러개의 리듀서를 하나로 합쳐서 보통 rootReducer로 부르기도 한다.

이 rootReducer는 reducer 디렉터리 안에 있는 index.js 파일에 선언해준다.

```js
// 먼저 앞서 만든 두개의 리듀서를 import 해주자.
import counterReducer from './counter';
import loggedReducer from './isLogged';
// 이제 리듀서들을 합쳐주기 위한 컴포넌트를 redux 모듈에서 import 해주자.
import {combineReducers} from 'redux';

// 합쳐줄 때 combineReducers에 들어갈 reducer를 지칭해줄 key값은 우리 마음대로 넣어도 된다. 실제 reducer 이름과 같이 설정할 경우 ES6의 생략기능을 사용할 수 있기 때문에 간단하게 선언해줄 수 있다.(ex. counterReducer: counterReducer 대신 그냥 counterReducer만 써줘도 된다.)
const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default rootReducer;
```

이제 합친 리듀서들의 결과물인 rootReducer를 사용하기 위해서는 당연히 사용할 곳에 import를 해주

