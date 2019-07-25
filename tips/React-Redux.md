# React-Redux

![](https://miro.medium.com/max/588/1*rwnd-zztHEQ_Qt-ZVXH7Jw.png)

### 기본적인 흐름을 보기위한 코드(+와 -를 가진 카운터)

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
let myStore = createStore(counter);

myStore.dispatch(plus());
```

위의 흐름이 가장 기본적인 흐름이다.

Action이 Store로 Dispatch가 되면 Store에 연결된 Reducer에 전달되고 Reducer는 전달받은 Action의 type에 따라 새로운 state를 return 해준다.



### React와 같이 사용하는 Redux

이제 React와 같이 사용해보자.

우리의 목표는 **+ 버튼과 - 버튼을 가진 카운터를 React와 Redux를 이용해 구현**하는 것이다.

 각 기능들을 컴포넌트로 만들어서 모듈처럼 사용해보자.

먼저 action들과 reducer들을 저장할 actions, reducers 디렉터리를 만들어주자.

reducers 디렉터리에는 각 기능을 가진 reducer들과 모든 reducer들을 통합해주는, 한마디로,

root reducer를 만들 것이다 (뒤에서 다시 확인하자).

#### 1. 우선 전달받은 Action의 type에 따라 새로운 state를 return 해주는 Reducer를 생성해보자.

- 버튼을 누름에 따라 숫자를 변화시켜줄 counter reducer

```js
// reducers 디렉터리 안에 만든 카운트 리듀서
// counter.js
const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'PLUS':
            return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            return state;
    }
};
export default counterReducer;
```

- 딱히 상관은 없지만 그냥 로그인 확인용 reducer도 생성해보자.

```js
// reducers 디렉터리 안에 로그인체크 리듀서
// isLogged.js
const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
};
export default loggedReducer;
```



#### 2. Reducer와 연결되어 State를 관리해줄 Store를 생성해보자.

이제 우리는 각각의 기능을 가진 리듀서 두개를 생성하였다. 처음 흐름을 보기위해 짠 코드에서는

`const myStore = createStore(counter);`

한곳에 모든 기능들을 생성하고 store까지 생성해주었고, 위와같이 createStore 컴포넌트에 reducer를 argument로 사용함으로써 리듀서를 스토어에 연결해주었다. 그러나 우리는 React를 사용하고 있으므로 한 파일에 있던 위 코드들을 모듈화해서 모두 흩어지게 해주었다. 이런 경우에는 Store는 어디에서 생성해주어야 할까?

Store는 모든 컴포넌트에서 사용이 가능해야 하므로 가장 최상위 모듈에서 생성해주도록 하자. 먼저 src 디렉터리에 있는 index.js 파일에  Store를 생성하기 위한 createStore 컴포넌트를 import 해준다.

`index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

const myStore = createStore()
```



#### 3. Reducer들을 Store에 연결시켜보자.

이제 Store도 만들어주었으니 앞서 생성한 2개의 Reducer들을 Store에 연결시켜주고 싶을것이다.

그런데 지금처럼 리듀서를 여러개 만든 경우에는 어떻게 할까?

단순하게 createStore 함수 안에 2개의 arguments로 넣어주면 된다고 생각할 수 있지만 그 경우 제대로 작동하지 않을 것이다. 그러면 도대체 뭘 해주어야 할까?

답은 **여러개의 리듀서를 하나로 합쳐주는 것**이다. 

이 작업을 위해서 우리는 **`combineReducers 컴포넌트`**(이름 그대로 Reducer들을 합쳐주는)를 redux로부터 가져와서 사용할 것이다. 이렇게 여러개의 리듀서를 하나로 합쳐서 보통 rootReducer로 부르기도 한다. 이제 이 rootReducer를 편의상 reducer 디렉터리 안에  index.js 파일을 생성하고 그 안에 선언해준다.

※ rootReducer의 실제 import 경로는 /reducers/index.js 이지만 뒤의 index.js를 생략할 수 있다

`/reducers/index.js`

```js
// 먼저 앞서 만든 두개의 리듀서를 import 해주자.
import counterReducer from './counter';
import loggedReducer from './isLogged';
// 이제 리듀서들을 합쳐주기 위한 컴포넌트를 redux 모듈에서 import 해주자.
import {combineReducers} from 'redux';

// Reducer들을 합쳐줄 때 combineReducers 컴포넌트에 들어갈 reducer를 지칭해줄 key값은 우리 마음대로 넣어도 된다. 실제 reducer 이름과 같이 설정할 경우 ES6의 생략기능을 사용할 수 있기 때문에 간단하게 선언해줄 수 있다.(ex. counterReducer: counterReducer 대신 그냥 counterReducer만 써줘도 된다.)
const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default rootReducer;
```

이제 합친 리듀서들의 결과물인 rootReducer를 사용하기 위해서는 당연히 사용할 곳에 import를 해주어야 한다. 그 위치는 앞서 store를 생성하기로 한 src 디렉터리의 index.js가 되시겠다.

`/index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
// 앞서 설명했듯이 reducers 디렉터리 뒤의 index.js는 생략 가능하다.
import rootReducer from './reducers' 

const myStore = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
```



#### 4. 정의된 Reducer들과 store를 최상위 컴포넌트인 App에 연결시켜주자.

우리는 이제 카운터를 완성하기 위한 대부분을 완성했다. 이제는 실제로 사용하기 위해 최상위 컴포넌트 \<App />에 연결해주는 일만 남았다.

이를 위해 우리는 담당 일진 컴포넌트인 Provider 컴포넌트를 react-redux로부터 불러올 것이다.

그 뒤 index.js에서 사용되고있는 \<App />을 Provider 컴포넌트로 감싸주자.

`/index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import rootReducer from './reducers' 
// Provider 컴포넌트를 불러오자.
import {Provider} from 'react-redux';


const myStore = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <App />, 
    document.getElementById('root'));

serviceWorker.unregister();
```





### ※ 편의를 위한 tip (redux-devtools-extension)

- 이 툴을 사용해 브라우저에서 redux가 어떻게 사용되는지 확인할 수 있다.

> ## 설치
>
> ### 1. For Chrome
>
> - from [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd);
> - or download `extension.zip` from [last releases](https://github.com/zalmoxisus/redux-devtools-extension/releases), unzip, open `chrome://extensions` url and turn on developer mode from top left and then click; on `Load Unpacked` and select the extracted folder for use
> - or build it with `npm i && npm run build:extension` and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./build/extension`;
> - or run it in dev mode with `npm i && npm start` and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./dev`.
>
> ### 2. For Firefox
>
> - from [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/);
> - or build it with `npm i && npm run build:firefox` and [load the extension's folder](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) `./build/firefox` (just select a file from inside the dir).
>
> ### 3. For Electron
>
> - just specify `REDUX_DEVTOOLS` in [`electron-devtools-installer`](https://github.com/GPMDP/electron-devtools-installer).
>
> ### 4. For other browsers and non-browser environment
>
> - use [`remote-redux-devtools`](https://github.com/zalmoxisus/remote-redux-devtools).
>
> 
>
> ## 사용법
>
> createStore 컴포넌트의 2번째 argument로 window.\__REDUX_DEVTOOLS_EXTENSION__ && window.\_\_REDUX_DEVTOOLS_EXTENSION__() 를 추가해준다.
>
> ```js
> const myStore = createStore(
>     rootReducer,
>     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
> );
> ```
>
> 