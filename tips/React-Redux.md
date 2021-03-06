# React-Redux

[https://medium.com/@ca3rot/%EC%95%84%EB%A7%88-%EC%9D%B4%EA%B2%8C-%EC%A0%9C%EC%9D%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%AC%EC%9A%B8%EA%B1%B8%EC%9A%94-react-redux-%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%9D%98-%EC%9D%B4%ED%95%B4-1585e911a0a6](https://medium.com/@ca3rot/아마-이게-제일-이해하기-쉬울걸요-react-redux-플로우의-이해-1585e911a0a6)

https://code.tutsplus.com/ko/tutorials/getting-started-with-redux-connecting-redux-with-react--cms-30352

https://velopert.com/1266

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

 이렇게 합쳐줄 때 combineReducers 에 넣어준 key 값은 나중에 내부 컴포넌트에서 각 reducer에 연결된 state를 불러올 때 사용하는 key값이 되기 때문에 생각나기 쉽게 설정해주거나 reducer와 동일한 이름으로 설정해주자.

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
    <Provider store={myStore}>
        <App />
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();
```

 최상위 컴포넌트를 Provider 컴포넌트로 감싸줌으로써 모든 내부 컴포넌트에서 store를 사용할 수 있게 되었다. 다음은 내부 컴포넌트에서 store를 사용하는 방법에 대해서 알아보자.



#### 5. 내부 컴포넌트에서 store를 사용해보자.

 store에 저장되어있는 count 값을 내부 컴포넌트 중 하나인 App.js 에서 사용해보자. store에 저장되어있는 state 값을 불러오기 위해서는 useSelector 컴포넌트를 react-redux로부터 끌어와서 사용해주어야 한다.

`App.js`

```js
import React from 'react';
import { useSelector } from 'react-redux';

function App() {
    // Store에서 counterReducer에 해당하는 State를 불러와서 counter 변수에 저장해준다.
    const counter = useSelector(state=>state.counter);
	const isLogged = useSelector(state=>state.isLogged);
    render(){
        return (
        	<div className="App">
            	<h1>Counter {counter}</h1>

				{isLogged? <h3>Valuable Information I shouldn't see </h3> : ''}
            </div>
        )
    }
}

export default App;
```

 여기까지 우리는 Reducer에 연결된 state를 직접 출력해보기까지 했다. 이제 우리가 보고싶은건 이 state가 변화하는 것과 그 내용이 브라우저에 출력이 되는 것이다. Store에 있는 state를 변화시키고 싶으면 그 state에 연결된 reducer를 호출해야 한다. 그러기 위해서는 reducer의 호출 조건인 **Action**이 있어야 한다.

#### 5-1. 액션을 만들어보자.

 Action이란 우리가, 혹은 사용자가 발생시키는 event라고 생각하면 되겠다. 그런데 Action이 trigger되기 위해서는 우리가 action을 **dispatch**를 시켜줘야 한다. 이는 store에 어떤 action이 발생했음을 알려주는 역할을 한다.

 dispatch를 사용하기 위해서 useDispatch 컴포넌트를 react-redux로부터 불러오자.

```js
import React from 'react';
// useDispatch를 import해온다.
import { useSelector, useDispatch } from 'react-redux';

function App() {
    // Store에서 counterReducer에 해당하는 State를 불러와서 counter 변수에 저장해준다.
    const counter = useSelector(state=>state.counter);
	const isLogged = useSelector(state=>state.isLogged);
    render(){
        return (
        	<div className="App">
            	<h1>Counter {counter}</h1>
				
				// 로그인 확인 reducer의 state를 사용해 로그인 여부에 따라 
				{isLogged? <h3>Valuable Information I shouldn't see </h3> : ''}
            </div>
        )
    }
}

export default App;
```

 이제 우리는 Action을 Dispatch할 수 있게 되었다. 남은건 dispatch를 직접 해주는 일인데 이를 위해서는 당연히 action이 필요할 것이다. 아직 우리는 action을 만들어주지 않았기 때문에 직접 action을 만들어보자.

 src 디렉터리에 action들을 넣기위한 actions 디렉터리를 생성해 준 것을 기억한다면 당신의 기억력은 상위 1%이다. 기쁜 마음으로 actions 디렉터리에 action들을 선언해줄 index.js 파일을 생성해주자.

`/actions/index.js`

```js
export const plus = (number) => {
    return {
        type: 'PLUS',
        // 한번 누를때마다 더해줄 숫자를 정해주고 싶다면 payload에 실어서 보내주자.
        payload: number
    };
};

export const minus = (number) => {
    return {
        type: 'MINUS',
        payload: number
    };
};
```

 여기서 기억해야 할 것은 

1. action을 **"object를 리턴해주는 콜백함수"**로서 선언하고 return 해줄 object의 형태는 **reducer가 action을 구분할 수 있게 해주는 type**이 필요하다. (꼭 type이라고 이름을 지어주지 않아도 된다. 자기 맘대로 하쇼~ 대신 reducer에서 action을 "switch문을 사용해 case에 action의 type을 넣어줌으로써 구분을 하게 하므로" 편의를 위해서 보편적으로 type이라고 선언을 한다. )
2. 사용자의 필요에 따라서 **데이터를 넣고싶으면 보편적으로 payload를 키값으로** 하여 그 안에 data를 넣어준다.

payload를 사용하기로 했으므로 reducer의 설정도 바꿔주자.

`/reducers/counter.js`

```js
// reducers 디렉터리 안에 만든 카운트 리듀서
// counter.js
const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'PLUS':
            if(action.payload){
            	return state + action.payload;    
            } else {
                return state + 1;
            }
        case 'MINUS':
            if(action.payload){
            	return state - action.payload;    
            } else {
                return state - 1;
            }
        default:
            return state;
    }
};
export default counterReducer;
```



#### 5-2 Action을 dispatch를 사용하여 trigger 시켜보자.

 다시 App.js로 돌아가서 진행을 계속해보자. 

 우리는 Store에 있는 state를 사용해보기 위해서 useSelector 컴포넌트를 사용해 그 값을 불러와 주었고, state가 변화되는 것을 출력하여 눈으로 직접 확인해보기 위해 action을 trigger 시켜줄 수 있는 useDispatch 컴포넌트를 사용해주고 직접 action들을 생성해주었다.

 남은것은 이 action들을 import 해와서 직접 dispatch 해보고 변화를 살피는 일이다.

`App.js`

```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Action들을 import해준다. reducer의 경우와 마찬가지로 index.js는 import 경로에서 생략가능하다.
import { plus, minus } from './actions';

function App() {
    const counter = useSelector(state=>state.counter);
	const isLogged = useSelector(state=>state.isLogged);
    render(){
        return (
        	<div className="App">
            	<h1>Counter {counter}</h1>

				{isLogged? <h3>Valuable Information I shouldn't see </h3> : ''}
            </div>
        )
    }
}

export default App;
```

 사용자들이 직접 action을 trigger시켜줄 수 있게 해주기 위해 클릭이 되면 action을 dispatch시켜주는 button을 만들어주자.

`App.js`

```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plus, minus } from './actions';

function App() {
    const counter = useSelector(state=>state.counter);
	const isLogged = useSelector(state=>state.isLogged);
	// dispatch를 사용하기 쉽게 선언해주자.
	const dispatch = useDispatch();

    render(){
        return (
        	<div className="App">
            	<h1>Counter {counter}</h1>
				// plus와 minus 버튼을 만들고 onClick 속성을 부여해 action을 dispatch 시켜보자.
				<button onClick={()=>dispatch(plus)}>+</button>
				<button onClick={()=>dispatch(minus)}>-</button>

				{isLogged? <h3>Valuable Information I shouldn't see </h3> : ''}
            </div>
        )
    }
}

export default App;
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



# react-redux.js.org 튜토리얼

## Connect

### 1. mapStateToProps로 데이터 추출하기

​	`mapStateToProps`는 `connect`로 들어가는 첫번째 argument로서 component가 필요한 data를 store로부터 선택하게 하준다. 대부분 줄여서 mapState로 참조된다.

- store의 state가 바뀔때마다 매번 호출된다.
- store의 전체 state 정보를 받지만, component가 필요한 data를 object로서 return해주어야 한다.



#### 	`mapStateToProps` 정의

`mapStateToProps`는 function으로서 정의되어야 한다.

```js
function mapStateToProps(state, ownProps?)
```

 `mapStateToProps`는 첫번째 argument로서 `state`를 받아야 하며, 필요하면 두번째 argument로서 `ownProps`를 받는다. 그 뒤 component가 필요한 data를 담고있는 평범한 object를 return해주어야 한다.

이렇게 선언된 함수는 connect의 첫번째 argument로 들어가야 하며, Redux의 store state가 변화할 때 마다 매번 호출될 것이다. store에 연결되기 싫으면 `connect`의 첫번째 argument로서 `mapStateToProps`대신 `null`이나 `undefined`를 넣어주자.

(`mapStateToProps` function을 만들 때 `function mapState(state) {}`같은 기본 function형식이든 `const mapState = (state) => {}` 같은 arrow function 형식이든 똑같으니 신경쓰지 말자.)



	#### 	Argument들

1. `state`
2. `ownProps`(선택사항)

---

`state`

이 첫번째 argument는 **전체 Redux store**(`store.getState()`의 return값과 같음)이다. 그리하야 이 첫번째 argument는 대대로 그냥  `state`라고 불려왔다(이 argument에 원하는 이름을 줄 수 있으나, `store`는 적절하지 않다 - 이 argument는 "state value"이지, "store instance"가 아니기 때문이다.)

`mapStateToProps` function은 반드시 argument로 들어간 `state`를 사용해서 선언되어야 한다.

```js
// TodoList.js

function mapStateToProps(state) {
  const { todos } = state
  return { todoList: todos.allIds }
}

export default connect(mapStateToProps)(TodoList)
```



---

`ownProps`(선택사항)

만약 당신이 store로부터 data를 찾아오기 위해 own props의 data를 필요로 한다면, mapState의 두번째 argument로서 사용해주면 된다. 이 argument는 `connect`로부터 생성된 wrapper component에게 주어진 모든 props를 포함할 것이다.

```js
// Todo.js

function mapStateToProps(state, ownProps) {
  const { visibilityFilter } = state
  const { id } = ownProps
  const todo = getTodoById(state, id)

  // component receives additionally:
  return { todo, visibilityFilter }
}

// Later, in your application, a parent component renders:
;<ConnectedTodo id={123} />
// and your component receives props.id, props.todo, and props.visibilityFilter
```

`mapStateToProps`의 return 값(Object)에 `ownProps`의 value가 포함시킬 필요없다. `connect`가 다른 모든 prop source들을 자동으로 final set의 props에 merge시켜줄 것이다.

---



#### Return

`mapStateToProps` function은 component가 필요한 data를 단순 object 형태로 return해주어야 한다.

- object의 각 field들은 우리의 진자 component들의 prop이 될것이다.
- field안의 값들은 component가 다시 render되어야 하는지 판단할 수 있게 해준다.

```js
function mapStateToProps(state) {
  return {
    a: 42,
    todos: state.todos,
    filter: state.visibilityFilter
  }
}

// component will receive: props.a, props.todos, and props.filter
```



#### Reducer 예제

```js
import * as types from '../actions/ActionTypes';
 
const initialState = {
  number : 0
};
 
export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number : state.number + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        number : state.number - 1
      };
    default:
      return state;
  }
}

```



### 2. `mapDispatchToProps`로 Action Dispatch하기

`mapDispatchToProps`는 connect의 두번째 argument로써, store에 action을 dispatch하는데 사용된다.

`dispatch`는 Redux store의 function이다. 우린 action을 dispatch하기위해 `store.dispatch`를 사용하며 이게 유일하게 state 변화를 trigger할 수 있는 방법이다. (Redux쪽의 개념인듯)

React Redux에서는 Component들은 절대 Store에 직접적으로 연결되지 않고 그 기능을 `connect`가 대신 해준다. React Redux에서는 Component들이 action을 dispatch할 수 있는 두가지 방법이 있다.

- 기본 방식으로서, connect된 component는 `props.dispatch`를 받아와서 스스로 action을 dispatch할 수 있다.
- `connect`가 `mapDispatchToProps`라는 argument를 받아서 호출됐을 때 dispatch를 해주는 function을 만들 수 있게 해주고, 그 function들을 우리 Component의 props로서 넘겨준다.

`mapDispatchToProps`는 대부분 `mapDispatch`로 줄여서 쓴다. 하지만 원하는 아무이름이나 써도 된다.(connect의 argument 순서만 맞춰준다면 ^^)

---

#### Dispatch로의 접근

##### 	1. 기본 방식: Prop으로써 `dispatch`하기

`connect()`의 두번째 argument를 정해주지 않으면(아래처럼),

```js
connect()(MyComponent)
// 위 connect는 아래의 connect와 같다.
connect(
  null,
  null
)(MyComponent)

// 첫번째 argument만 사용해준 경우
connect(mapStateToProps /** no second argument */)(MyComponent)
```

 Component는 `dispatch`를 default로 받는다. 이런식으로 `connect`를 정해주면, Component는 `props.dispatch`를 받는다. 이걸 사용해서 action을 store에 dispatch할 수 있다. 아래의 코드를 보자.

```js
function Counter({ count, dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </div>
  )
}
```

##### 	2. `mapDispatchToProps`를 써준다.

`mapDispatchToProps`는 우리의 Component가 어떤 action을 dispatch할지 정할 수 있게 해준다. action을 dispatch하는 function을 props로 사용할 수 있게 해주는 것이다. 따라서, `props.dispatch(() => increment())`대신, `props.increment()`를 바로 호출할 수 있다. 이렇게 해주는 이유 몇가지를 살펴보자.

##### Declarative

dispatch 과정을 function으로 캡슐화 하는 것은 구현을 더욱 declarative하게 해준다. action을 dispatch하고 Redux store에서 데이터 흐름을 처리하도록 하는 것은 액션을 수행하는 것이 아니라 그 동작을 실행하는 것이다.

좋은 예제는 버튼이 눌렸을 때 action을 dispatch하는 것이다. Connecting the button directly probably doesn't make sense conceptually, and neither does having the button reference `dispatch`.

```js
// button needs to be aware of "dispatch"
<button onClick={() => dispatch({ type: "SOMETHING" })} />

// button unaware of "dispatch",
<button onClick={doSomething} />
```

Once you've wrapped all our action creators with functions that dispatch the actions, the component is free of the need of `dispatch`. Therefore, **if you define your own mapDispatchToProps, the connected component will no longer receive dispatch.**



### 내가 실제로 사용

```js
import { checked, notchecked } from '../../redux/actions/actions';

const mapStateToProps = state => {
    return {
      localsel : state.selectedLocal.locals
    }
}

class Seoul extends Component {
    // const selec = useSelector(state=>state.selectedLocal);
    // var dispatch = useDispatch();
    constructor(props){
        super(props)
    }
    render(){
        var btnclicked = (e) => {
            let btnname = e.target.parentNode.getAttribute('id');
            // console.log(btnname);
            // console.log(e.target);
            if (e.target.checked) {
                console.log('체크됨');
                // dispatch(checked(btnname));
                this.props.checked(btnname);
            };
            if (!e.target.checked) {
                console.log('체크안됨');
                // dispatch(notchecked(btnname));
                this.props.notchecked(btnname);
            };
            // console.log(selec);
            console.log(this.props.localsel);
        }
        return (
            <div className='localdiv localdiv1'>
                {/* {selec.locals.map((value, index)=>{
                    return (<h1>{value}</h1>)
                })} */}
                {this.props.localsel}
                <ToggleButtonGroup className='togglebtngrp' type="checkbox">
                    <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="서울 전체">서울 전체</ToggleButton>
                    {local.Seoul.map((value, index) => {
                        return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                    })}
                </ToggleButtonGroup>
            </div>
        );
    }
}

export default connect(mapStateToProps, {checked, notchecked})(Seoul);
```

#### Reducer

```js
const localSelector = (state = {locals: []}, action) => {
    switch(action.type){
        case 'CHECKED':
            if(action.payload){
                var arr = state.locals.slice();
                arr.push(action.payload);
            	return {
                    ...state,
                    locals: arr
                };
            } else {
                return state;
            }
        case 'NOTCHECKED':
            if(action.payload){
                var arrnum = state.locals.indexOf(action.payload);
                var arr = state.locals.slice();
                arr.splice(arrnum, 1);
            	return {
                    ...state,
                    locals: arr
                };
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default localSelector; 
```

