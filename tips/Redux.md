# Redux란 뭘까?

https://redux.js.org/basics/basic-tutorial

## Flux

`Redux`에 대해 설명하기 앞서, `Flux`란 아키텍쳐에 대해 설명하겠다.
`Flux`는 단방향 데이터 흐름을 이용함으로써 리액트의 컴퍼넌트들을 보완한다.
사용자가 뷰와 상호작용할 때, 뷰는 중앙 디스패쳐를 통해 다양한 `store`에 `액션`을 전파한다.
(`store`는 애플리케이션의 데이터와 로직을 가지고 있으며, 데이터와 로직은 상태에 따라 뷰를 업데이트하는 역할을 수행한다.)
`Flux`에는 많은 `store`가 있으며, 각 `store`는 상태의 각각 다른 작은 부분이나 애플리케이션의 데이터를 사용한다.

### Flux 데이터 흐름

- 사용자가 뷰와 상호작용을 하면, 뷰는 `액션`을 트리거한다.
- `액션`이 해당 함수를 전달하고, 해당 함수는 `store`를 변경한다.
- `store`가 데이터를 갱신하면, 뷰는 이에 따라 갱신된다.

애플리케이션이 커지면, 여러 `store`가 데이터를 관리하게 된다.

## Redux

`Redux`는 예측가능한 상태 컨테이너로 `Flux`의 구현체이다.
하지만 완전한 `Flux` 구현체라고 보기는 힘들다. `Redux`는 애플리케이션의 상태를 위해 단 한 개의 스토어를 사용하기 때문이다. 대신, `Redux`의 `store`는 다양한 상태 객체로 나뉘어진다.

### Redux의 세 가지 원칙

1. 진리의 단일 소스
2. 상태는 읽기 전용
3. 순수 함수로써 변경이 된다.

### Actions

> `Redux`의 상태를 변경하기 위해서는 `액션`을 내보내야한다. `액션`은 자바스크립트 객체이며, 어떤 일이 발생하는지 설명하는 `type` 속성을 반드시 가진다. 또한, 상태 변경을 위한 값인 `payload`를 가진다.
> 이 때, `payload`는 없을 수도 있으며, `2`개 이상일 수도 있다. 또한, 속성 이름은 개발자가 임의로 지정할 수 있다.
>
> Action을 store로 보내고싶으면
>
> ```js
> store.dispatch().
> ```
>
> 를 사용하면 된다.
>
> Todo item을 추가하는 Action의 예제를 살펴보자.
>
> ```js
> const ADD_TODO = 'ADD_TODO';
> 
> {
>   type: ADD_TODO,
>   text: 'Build my first Redux app'
> }
> ```
>
> Action은 **순수 Javascript Object** 이다. Action은 반드시 **type** property를 가져야한다.
>
> 이 **type** property는 **수행되어야 할 Action의 종류**를 나타낸다.
>
> type은 보편적으로 **string constants(따옴표로 묶인 문자들의 묶음)**로서 정의된다. App이 커지면 커질수록 Action들을 세분화된 모듈 안에 넣어야 할 것이다.
>
> 
>
> >**※ 참고**
> >
> >```js
> >import { ADD_TODO, REMOVE_TODO } from '../actionTypes'
> >```
> >
> >- 위에서 볼 수 있는것처럼 우리는 Action의 type const를 모든 모듈마다 선언해줄 필요는 없다.
>
> 
>
> Action object의 구조에서 type 을 제외하고는 전부 우리가 원하는대로 정할 수 있다.
>
> Action의 추천 구조를 보고싶다면 https://github.com/acdlite/flux-standard-action 를 살펴보자.
>
> Todo list 항목에 완료 체크를 하기 위한 Action type을 하나 더 추가해보자. 특정 Todo 항목에 접근하기 위해 index를 사용할건데, 이는 Todo 항목들을 배열에 저장할 것이기때문이다. 실제 앱에서는 매 항목이 새로 생성될 때 마다 unique ID를 생성해주는것이 현명하다.
>
> ```js
> const TOGGLE_TODO = 'TOGGLE_TODO';
> 
> {
>   type: TOGGLE_TODO,
>   index: 5
> }
> ```
>
> Action마다 최대한 작은 data를 보내는 게 좋은 방식이다. 예를 들어 Todo 객체를 통째로 보내는 것보다는 index를 보내는게 좋은 생각이다.
>
> 
>
> 마지막으로 출력할 Todo 항목을 바꾸기위한 Action type을 하나 더 정해주자.
>
> ```js
> const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
> 
> {
>   type: SET_VISIBILITY_FILTER,
>   filter: SHOW_COMPLETED
> }
> ```
>
> #### Action Creators
>
> Action creators란 정확히 말하면 - Action들을 생성해주는 function 이라고 할 수 있다.
>
> Redux에서는 Action creator는 그저 action을 return해준다.
>
> ```js
> function addTodo(text) {
>   return {
>     type: ADD_TODO,
>     text
>   }
> }
> ```
>
> 간편하고 쉽게 테스트할 수 있게 해준다.
>
> Redux에서는 dispatch를 시행하기 위해 action create의 결과를 dispatch() function에 넘겨준다.
>
> ```js
> dispatch(addTodo(text))
> dispatch(completeTodo(index))
> ```
>
> 또다른 방법으로는 자동으로 dispatch를 해주는 **bound action creator** 를 만드는 경우가 있다.
>
> ```js
> const boundAddTodo = text => dispatch(addTodo(text))
> const boundCompleteTodo = index => dispatch(completeTodo(index))
> ```
>
> 이 경우 바로 호출을 할 수 있다.
>
> ```js
> boundAddTodo(text)
> boundCompleteTodo(index)
> ```
>
> 

### Reducers

> `Reducer`는 store에 전송된 **action에 대한 application의 state의 변화**를 response로 알려준다.
>
> `Action`은 어디까지나 무슨 일이 발생했는지만 알려주고, application의 state가 어떻게 변하는지는 알려주지 않는다는걸 기억하자.
>
> Redux에서는 단 하나의 store에 application의 모든 state가 저장된다. 코드를 작성하기 전에 전체적인 모양을 생각해보는 것이 좋다.
>
> 
>
> Todo app을 완성하기 위해, 우리는 2가지를 저장해야 한다.
>
> - 선택한 것만 출력해주는 필터
> - 진짜 Todo list 항목들
>
> State tree에 UI state 뿐 아니라 몇몇의 data를 저장하고 싶을 수 있으나, data는 UI state와는 따로 분리해서 보관하자.
>
> 
>
> `리듀서`는 이전의 상태를 받아 새로운 상태를 반환하는 순수한 function이다.
>
> ```js
> (previousState, action) => newState
> ```
>
> 다음은 `리듀서` 내부에서 절대 해서는 안 되는 일들이다.
>
> - `리듀서`의 인자를 변경하는 일
> - 부작용을 일으킬 수 있는 일
>   - DB 호출, API 호출, 라우팅 전환
>   - `Date.now()`, `Math.random()`과 같은 순수하지 않은 함수를 호출하는 일
>
> `Reducer`는 같은 인자를 사용하면, 다음 state를 **그저 계산만**하여 return해주어야 한다.
>
> 
>
> 이제 initial state를 정해주는 것부터 시작해보자. 
>
> Redux가 처음에는 Reducer를 `undefined` state로 호출할 것이다. 
>
> 그러므로 app의 initial state를 return해주자.
>
> ```js
> import { VisibilityFilters } from './actions'
> 
> const initialState = {
>   visibilityFilter: VisibilityFilters.SHOW_ALL,
>   todos: []
> }
> 
> function todoApp(state = initialState, action) {
>   // if (typeof state === 'undefined') {
>   //    return initialState
>   // }
>   // 한가지 팁은 위의 if문을 써주는 대신 ES6 문법을 사용해 Reducer의 argument에 미리 설정해주는 것이다.
>     
>   // 당장은 action을 조종하지 않고
>   // 그냥 주어진 state만 return 해보자.
>   return state
> }
> ```
>
> 다음으로 `SET_VISIBILITY_FILTER` 를 handle해보자. 필요한 건 

### Store

### Data Flow

### Usage with React