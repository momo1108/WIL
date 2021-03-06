# JQuery 사용하지 않는 이유

\1. 사이즈가 크다.
jQuery 1.12.4 minified버전은 95K이고 압축하면 34K정도 됩니다. 크다면 크고 작다면 작은 사이즈입니다. 몇년전까지만해도 핸드폰의 사양이 낮아서 문제가 컸는데, 요즘은 그 정도는 아닙니다. 게다가 React나 Angular같은 라이브러리는 훨씬 더 크니 사이즈로 문제삼기는 좀 애매하죠. 필요없는 라이브러리를 제거한 slim버전은 27K인데, 예전 IE는 지원하지 않습니다.

\2. Modular하지 않다.
한 프로젝트에서 jQuery의 모든 기능을 이용하는 경우는 없습니다. Javascript의 표준 모듈 방식인 것도 아니고, Tree Shaking도 지원하지 않기에 필연적으로 안쓰는 코드를 포함하게 되는데, 이게 옳은 일인지 고민이 필요합니다. 특히 Animation이나 AJAX는 너무 구식이라 더 좋은 대안을 쓰는게 낫습니다. slim 버전에서는 이와 같은 기능이 분리되었습니다.

\3. 너무 쉽다.
document.getElementById(“some-id”)보다 $(“#some-id”)쪽이 훨씬 보기 편합니다. 그런데 너무 쉽다보니 $를 남발하게 됩니다. 생각보다 $를 쓰는게 메모리와 CPU를 잡아먹습니다. 그리고 jQuery.data같은 함수는 DOM에 직접 읽고 쓰는 기능을 제공하는데, 덕분에 속도면에서도 느리고 변수를 Global에 노출시키게 됩니다. 너무 편해서 잘못된 코딩을 하게 되는 것도 문제입니다만, 근본적으로 보자면 jQuery를 이해하지 못하고 쓰는게 문제겠죠.

\4. jQuery는 javascript가 아니다.
기본적으로 jQuery는 Select한 element의 배열을 기준으로 작업합니다. $(“.some-class”) 이면 [el1, el2, el3]와 같은 Selector에 의해 선택된 배열을 내부에 가지고 있으면서 그 기준으로 작업을 합니다. 그런데 예를 들어 $(“div”).text()를 하면 div의 내용을 가져오는데, div가 두개가 있을 때는 두 div의 내용을 합쳐서 하나의 스트링을 반환합니다. < div >123< /div >< div >456</ div >이면 $(“div”).text()의 결과는 “123456”이 됩니다. 근데 과연 이런 동작이 맞을까요? 대부분 text()로 값을 가져오는 경우는 하나의 값이 필요해서 입니다. 두개의 text값이 필요하다면 각각의 값을 배열로 반환하는게 맞지 않을까 하네요. jQuery의 수많은 함수가 배열로 동작하는데, $(“.some-class”)가 배열처럼 보이지 않기에 문제를 일으킬 소지가 있습니다. 이와는 반대로 val()일때는 맨 처음 element의 값만 가져오도록 되어있는데 다른 함수들과 동작이 다릅니다.

jQuery의 hide, show는 element에 style을 적용합니다. < div style=”display:none” >처럼요. 그런데 element의 style은 우선도가 높기에 css에서 설정한게 안먹을 수도 있습니다. 그러므로 가급적 쓰면 안됩니다만 어디에고 그런 설명을 찾기는 어렵습니다.

jQuery만의 독특한 동작이 상당히 많습니다. 그게 틀린 방식은 아닙니다만 웹표준은 아닙니다. 그러므로 jQuery를 잘 쓰기 위해서는 jQuery 내부 동작을 잘 알아야 합니다. 근데 그럴꺼면 그냥 javascript로 작성하는게 더 편하지 않나 합니다.

\5. 웹표준을 지키지 않는다.
지키지않는다는게 정확한 표현은 아니고, jQuery가 워낙 오래되서 웹표준이 정해지기 전에 나왔기 때문에 문제가 좀 있습니다. 예를 들어 jQuery Deferred는 하위호환때문에 Promise/A+ 표준을 지키지 않습니다. Ajax도 fetch라는 표준이 나와서 굳이 jQuery방식을 쓸 필요가 없구요. jQuery를 도입하게 되면 브라우저에서 지원하니 성능적으로 월등하고, 표준이라서 앞으로도 변함이 없는 기술을 놔두고 굳이 예전 방식을 써야 하는 상황이 됩니다. ES6로 들어서면서 Javascript의 기능도 많이 늘었기에 polyfill이나 transpiler로 처리하는게 장래를 생각하면 더 나은 방식입니다.

\6. 업데이트의 문제
1.x버전과 2.x버전은 공식적으로 소프트웨어로서의 수명을 다했습니다. IE6~8을 지원하려면 1.x를 써야 하는데 그렇게 되면 차후의 서포트를 받지 못하게 됩니다. IE9부터는 jQuery 3.x에서 지원하므로 당분간은 문제가 없을 예정입니다만 IE9, 10지원을 포기하면 수많은 대안이 존재합니다.

\7. Virtual DOM과 상성이 안좋다.
Virtual DOM뿐만이 아니라 요즘 나오는 라이브러리들은 DOM을 직접 다루지 않고 template에서 자동으로 생성하기 때문에 jQuery와 함께 쓰기가 매우 애매합니다. 둘 중의 하나를 골라야한다면 Vue, React, Angular같은 새로운 라이브러리를 선택하는게 맞겠죠.

이 외에도 문제는 많이 찾을수 있을테지만, jQuery같이 규모가 크고 수많은 사람들이 쓰고 있는 라이브러리에 치명적인 문제는 그리 많지 않습니다. 작은 사이트를 만들고 돌리는데는 아직도 jQuery만으로 충분합니다. 그러나 점점 트렌드가 바뀌고 있으니 준비하고 다음 단계로 넘어가야 하지 않을까 하네요. 특히나 Javascript 업계는 전례가 없을 정도로 빨리 변하고 있으니까요.

# 애니메이션

jQuery offers various animated effects out of the box including sliding and fading. Native JavaScript can be faster but none of that matters: *CSS3 animation trounces both*.

CSS 애니메이션을 사용하자



# margin 0 해도 공백이 있을 때

The problem is the white space between inline-blocks.

```
<div style="display:inline-block">A</div> <!-- There is a white-space here --><div style="display:inline-block">B</div>
```

You can avoid this by packing the divs together seemlessly (although ugly):

```
<div style="display:inline-block"></div
><div style="display:inline-block></div>
```

This eliminates the spaces between the tags which actually do get parsed!

Another way to avoid this is instead of

```
display:inline-block
```

using

```
float:left
```

which, however, requires a

```
clear:both
```

at the end



# JavaScript CSS change Onclick

```js
document.getElementsByClassName('good').style.color = 'yellow';
```



# Visibility 속성

`visibility` 속성은 태그의 가시성을 결정합니다.

아래의 4가지 값을 가지며, 기본 값은 `inherit` 입니다.

- `visible`: 보임
- `hidden`: 숨김 (자신의 영역은 계속 차지)
- `collapse`: 겹치도록 지정(테이블의 행과 열 요소만 지정할 수 있으며, 그 외 요소의 지정하면 hidden으로 해석)
- `inherit`: 부모 요소의 값을 상속



# Navlink 에 Active속성을 넣고싶을 때

Your approach is bit confusing. But if you want to highlight the active link which is navigated you can simply add **activeClassName** to your NavLink. Something like this

```js
<NavLink to={url} exact activeClassName="activeLink" style=>{title}</NavLink>
```

CSS for activeLink:

```js
.activeLink {
    color: red;
 }
```

\* **react-router-dom: "^4.1.2"**

# Mysql connection 대신 pool을 쓰는 이유

- 매번 connect를 하는데 시간이 걸린다

- connection관리가 어렵다. 더 안전한 방법이다.

- 동시에 여러 query를 수행할 수 있다.



# json-server 확장모듈

json-server 확장모듈을 이용해서 쉽게 restfule api를 사용하자.

`npm install -g json-server`

db.json 파일을 생성하고 그 경로를 지정해주면 자동으로 json파일을 fake restfule api로 response해주는 json server를 실행할 수 있다.

`/public/db.json`

```json
{
    "momo1108": {
        "userid": "momo1108",
        "password": "6xqDYbgu2lxbcAdc582CSno/jf6suDGZKiRU/wXIjzq8aHeyUuIRZceqNONbed0hah+uknFPgBEGVpTRbmNZphTUn2p3Nu3CQoeUflNA5qH+kvhgNLLp361b62sVDI4H3D48L0i0Ued/+8soFjkG18D8i8mlWaXXbD9wsJ0juwU=",
        "originpass": "123",
        "name": "방혜찬",
        "company": "백수",
        "address": "인천광역시 부평구",
        "carsell": 0,
        "carsellc": 0,
        "profileimg": "/files/profile/방혜찬.png"
    },
    "qwer1234": {
        "userid": "qwer1234",
        "password": "qlnNT878eOpb9BmmE8t7L950H0yA05SilYPyol7XDPB1/3FZTcpOgt4VN/1du8tXRIiWNDToA52pXy9afCebGEF29rLyJfXVl/OC2zXiPEPU/tSqnd67qFn3Jo6s7i8vDIG9fX4b28lkcCT5dZXDddFGanSqUw6AIRRRJewxSBU=",
        "originpass": "123",
        "name": "momo1108",
        "company": "백수",
        "address": "인천광역시 부평구",
        "carsell": 0,
        "carsellc": 0,
        "profileimg": "/files/profile/momo1108.png"
    }
}
```

`json-server public/db.json --port 8000`



# 레퍼지토리의 바뀐 내용을 커맨드로 직접 받아올 때

https://help.github.com/en/articles/getting-changes-from-a-remote-repository

```shell
$ git fetch remotename
# Fetches updates made to a remote repository
```

``` shell
$ git pull remotename branchname
# Grabs online updates and merges them with your local work
```



# event 의 properties and methods

https://www.w3schools.com/jsref/obj_event.asp

| Property/Method                                              | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [bubbles](https://www.w3schools.com/jsref/event_bubbles.asp) | Returns whether or not a specific event is a bubbling event  |
| [cancelBubble](https://www.w3schools.com/jsref/event_cancelbubble.asp) | Sets or returns whether the event should propagate up the hierarchy or not |
| [cancelable](https://www.w3schools.com/jsref/event_cancelable.asp) | Returns whether or not an event can have its default action prevented |
| composed                                                     | Returns whether the event is composed or not                 |
| [createEvent()](https://www.w3schools.com/jsref/event_createevent.asp) | Creates a new event                                          |
| [composedPath()](https://www.w3schools.com/jsref/event_composedpath.asp) | Returns the event's path                                     |
| [currentTarget](https://www.w3schools.com/jsref/event_currenttarget.asp) | Returns the element whose event listeners triggered the event |
| [defaultPrevented](https://www.w3schools.com/jsref/event_defaultprevented.asp) | Returns whether or not the preventDefault() method was called for the event |
| [eventPhase](https://www.w3schools.com/jsref/event_eventphase.asp) | Returns which phase of the event flow is currently being evaluated |
| [isTrusted](https://www.w3schools.com/jsref/event_istrusted.asp) | Returns whether or not an event is trusted                   |
| [preventDefault()](https://www.w3schools.com/jsref/event_preventdefault.asp) | Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur |
| [stopImmediatePropagation()](https://www.w3schools.com/jsref/event_stopimmediatepropagation.asp) | Prevents other listeners of the same event from being called |
| [stopPropagation()](https://www.w3schools.com/jsref/event_stoppropagation.asp) | Prevents further propagation of an event during event flow   |
| [target](https://www.w3schools.com/jsref/event_target.asp)   | Returns the element that triggered the event                 |
| [timeStamp](https://www.w3schools.com/jsref/event_timestamp.asp) | Returns the time (in milliseconds relative to the epoch) at which the event was created |
| [type](https://www.w3schools.com/jsref/event_type.asp)       | Returns the name of the event                                |



# hook을 사용할 때의 규칙

https://reactjs.org/docs/hooks-rules.html

# javascript 참조변수

[https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B3%80%EC%88%98-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%EC%99%80-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EC%B0%B8%EC%A1%B0](https://yuddomack.tistory.com/entry/자바스크립트-변수-파라미터와-메모리-참조)

# javascript 에서 array, object의 비교 ★

Javascript 에서는 array와 object 는 reference type이기 때문에 한 배열을 다른배열로, 한 오브젝트를 다른 오브젝트로 복사해 주려면 = 를 사용할 수 없다.

만약 = 를 사용하면 배열이나 객체의 내용이 복사되는것이 아니고 그 배열이나 객체의 참조변수가 되버린다.(주소값을 복사하는듯)

```js
var arr1 = [];
var arr2 = arr1;
// 두개의 배열을 선언해 준 후 = 을 사용한 후에 arr2에 push를 해보자.
arr2.push('one');
console.log(arr2); // 결과값: [one]
// 만약 arr2가 arr1의 value만을 복사했다면 arr1은 빈 배열 상태 그대로일 것이다.
console.log(arr1); // 예상 결과값: []
				   // 실제 결과값: [one]
// 위에서 확인했다시피 arr2가 arr1의 참조변수가 되어버렸으므로 arr2가 바뀌면 arr1의 값도 바뀐다.
```



# label tag 사용법

https://aboooks.tistory.com/298

# Functional component 에 props를 넘겨주는 방법

```js
const Usethisfunction = (thisisprop) => {
    return (
        <div>
        	<p>Here is the prop passed from parent component: {thisisprop}</p>
        </div>
    )
}

class Passprops extends Component{
    render(){
        return(
        	<div>
            	<Usethisfunction thisisprop = {whatever} />
            </div>
        )
    }
}
```



# console로 자세한 내용을 보기

`console.dir`을 사용하자

# 하위 컴포넌트에서 상위컴포넌트로의 전달

상위컴포넌트에서 callback 함수를 선언해주고 하위 컴포넌트에 props로서 보내주면 하위컴포넌트에서 실행된 함수의 결과를 상위컴포로 전달가능하다.

가까운 컴포넌트의 경우 이런식으로 통신하는게 redux보다 낫고, 복잡한, 넓은 관계의 컴포넌트에서는 callback함수를 계속해서 넘겨줘야 하므로 redux를 사용하는게 더 낫다.

# 자바 스크립트 async, await



# css display: flex 기초

https://thrillfighter.tistory.com/489

# css 텍스트 세로 중간정렬

https://stackoverflow.com/questions/8865458/how-do-i-vertically-center-text-with-css

# javascript DOM 클래스 토글기능

https://developer.mozilla.org/ko/docs/Web/API/Element/classList

# 어떻게 redux를 refresh해도 유지할까

https://stackoverflow.com/questions/37195590/how-can-i-persist-redux-state-tree-on-refresh

# onclick 무한루프

https://stackoverflow.com/questions/48497358/reactjs-maximum-update-depth-exceeded-error

# 컴포넌트가 언제 rerender될까

https://lucybain.com/blog/2017/react-js-when-to-rerender/

# ide란?

https://blog.cordelia273.space/27

# try(java, javascript는 확인해보자)

try 구문안에서 오류가 있을 경우 catch에서 잡겠다.

catch가 끝나면 finally로 가거나 try에서 오류가 없으면 마지막으로 실행해줄 것들을 finally에 작성해준다.

# sorting algorithm

https://hsp1116.tistory.com/33

# break

break의 가장 큰 특징은 현재 루프만 끝낸다는 점입니다. 따라서 중첩 루프의 안쪽 루프에서 break를 사용하면 안쪽 루프만 끝낼 뿐 바깥쪽 루프는 계속 반복됩니다.

# 가장 큰 숫자 만들기

https://code-reading.tistory.com/81

# HTML Web Storage

https://www.w3schools.com/html/html5_webstorage.asp

# HTML Value Range Slider

https://www.youtube.com/watch?v=BrpiNUf2XCk

# Create-React-App 시작 포트 변경하는 법

How can we do that? There are three approaches:
\1. Setting environment variable
\2. Modifying package.json
\3. Creating .env file

### 1. Setting environment variable

To set the environment variable, we need to open the command line terminal and add a set a new environment variable for ReactJS port. Let’s say we want to change the port to 8000. After stopping the server (with Ctrl+C or Cmd+C), we then type.

```
$ export PORT=8000
```

We then restart the development server again with “**npm start**”.

This approach, however, is less preferred for an environment with several active projects. The environment variable PORT is arguably a generic, non-assuming variable name that can be used by other systems. Remember that by setting an environment variable via an export, that variable will be available for the all processes accessing or spawned by the shell. It will be better to localize the port assignment specific to React as shown in the remaining approaches.

### 2. Modifying package.json(이 방법의 경우 unix(ubuntu,mac,...)환경. window환경은 다른방법쓰세요)

Another approach is by modifying the command to start the development server in package.json. The default “**scripts**” key will contain the following object:

```
…
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
…
```

To change the development server port to port 8000, we need to modify the value of “**start**” key as follows:

```
…
  "scripts": {
    "start": “PORT=8000 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
…
```

We validate the port change by restarting the server and accessing the app at **http://localhost:8000**

With this approach, the port variable is local to the React project. One little caveat is some purists may not like to embed the port configuration in the command. We can address this what-is-your-flavor issue in the next approach.

### 3. Creating .env file

A **.env** file contains the additional environment variables / configurations that are attached to the NodeJS process that’s running React development server. Remember that when setting an environment variable from the command line terminal, the variable will be available to all processes that interact with the shell. This way, using .env is a sound approach to localize the port configuration and make it available for read only by the React project.

ReactJS leverages [dotenv](https://www.npmjs.com/package/dotenv) to handle the process of loading the variables declared in .env into Node’s process.env.

The .env file should be created in the root directory of the React project. In other words, it resides in the same directory with package.json. If we change the React development server port to 8000, the content of .env file will be as follows.

.env

```
PORT=8000
```

To validate the port change, we restart the server again and then access the app at http://localhost:8000



### | bash의 역할

A pipe takes what is piped into it.

So the pipe is full of text coming in from curl.

Instead of piping to sudo bash, you could pipe it to less and read the script:

```
curl https://packages.gitlab.com/install/repositories/gitlab/raspberry-pi2/script.deb.sh | less
```

sudo means, execute the following command as the superuser, the all-powerful user, the one that can do serious things like install software or remove system devices and stuff.

bash is a shell. It takes in commands and talks to the kernel to get them done.

So basically you are saying, hey, take this stream of commands from this URL on the internet and run it on my computer with superuser access.

You usually don't want to do this until you've read through the script first, to make sure that you're not actually setting up an open proxy server for some smaller Asian country.



# map 사용 시 key를 설정해주는 이유

## 1. key를 설정하는 이유

key 값은 html을 랜더링 할 때, 변경된 html만 랜더링, 최적화 하기 위해 사용됩니다. 예를 들면,

```js
`<``ul``>``  ``<``li``>first</``li``>``  ``<``li``>second</``li``>``</``ul``>` `<``ul``>``  ``<``li``>first</``li``>``  ``<``li``>second</``li``>``  ``<``li``>third</``li``>``</``ul``>`
```

<ul>태그의 자식 노드들을 반복하며 비교하여 변경된 내용을 랜더링 하게 됩니다. 

<li>third</li>가 추가 되어 위의 <ul>태그가 밑의 <ul>태그로 변경이 된다면,

- 1번째 2번째 자식 노드 변경이 없음
- 3번째 자식 노드 추가

이렇게 랜더링 하게 됩니다. 이렇게 추가된 자식 노드가 마지막 자식으로 추가가 된다면 매우 나이스한 경우이지만, 노드가 첫번째 자식으로 추가된다면 상황은 달라집니다.

```js
`<``ul``>``  ``<``li``>first</``li``>``  ``<``li``>second</``li``>``</``ul``>` `<``ul``>``  ``<``li``>zero</``li``>``  ``<``li``>first</``li``>``  ``<``li``>second</``li``>``</``ul``>`
```

<li>zero</li>가 1번째 자식 노드로 추가가 된다면,

- 1번째 자식 노드 zero로 변경
- 2번째 자식 노드 first로 변경
- 3번째 자식 노드 추가

이렇게 랜더링 하게 되는데, 이런 경우 최적화가 필요합니다. 최적화 하기 위해 사용되는 방법이 key를 사용하는 것입니다.

```js
`<``ul``>``  ``<``li` `key``=``"first"` `>first</``li``>``  ``<``li` `key``=``"second"` `>second</``li``>``</``ul``>` `<``ul``>``  ``<``li` `key``=``"zero"` `>zero</``li``>``  ``<``li` `key``=``"first"` `>first</``li``>``  ``<``li` `key``=``"second"` `>second</``li``>``</``ul``>`
```

key를 추가하면, 자식 노드의 key로 html를 비교하여 랜더링하게 되는데, 이 때는

- zero를 키로 가지는 자식 노드 추가
- first와 second를 키로 가지는 자식 노드 변경 없음

이렇게 랜더링 되어 html 랜더링이 최적화 되게 됩니다.





## 2. key 설정하기

React에서 키는, 위의 [1. key를 설정하는 이유](https://beomy.tistory.com/29#keyBecause)에서 말씀드렸던 것과 같이 각각의 element들이 변경되었는지 혹은 추가, 삭제 되었는지 확인하기 위해 사용됩니다. 그렇기 때문에 리스트 각각의 요소를 구별할 수 있도록 유니크 해야 하고, 그 할당된 key값은 변하지 않는 값을 할당해 주는것이 중요합니다.



가장 좋은 방법은 리스트 안에 있는 아이템들의 ID를 key로 사용하는 것입니다.

```js
`const todoItems = todos.map((todo) =>``  ``<li key={todo.id}>``    ``{todo.text}``  ``</li>``);`
```

하지만 리스트 안의 아이템들이 ID가 없다면 차선책으로 리스트의 위치(index)를 key로 사용하는 할 수 있습니다.

```js
`const todoItems = todos.map((todo, index) =>``  ``<li key={todo.index}>``    ``{todo.text}``  ``</li>``);`
```

리스트가 추가되었거나, 삭제되었을 경우 리스트의 순서가 변경 될 수 있기 때문에 이 방법은 좋지 않은 방법입니다.





## 3. key를 추출하기

key는 랜더링 될 때, 그 주변의 context에만 의미가 있습니다.

ListItem 컴포넌트를 만들어 ListItem 컴포넌트가 <li>를 랜더링 하는 예제를 들어보겠습니다.

```js
`// 아래와 같이 key를 설정하면 안됩니다.``function` `ListItem(props) {``  ``const value = props.value;``  ``return` `(``    ``<li key={value.toString()}>``      ``{value}``    ``</li>``  ``);``}` `function` `NumberList(props) {``  ``const numbers = props.numbers;``  ``const listItems = numbers.map((number) =>``    ``<ListItem value={number} />``  ``);``  ``return` `(``    ``<ul>``      ``{listItems}``    ``</ul>``  ``);``}` `const numbers = [1, 2, 3, 4, 5];``ReactDOM.render(``  ``<NumberList numbers={numbers}>,``  ``document.getElementById(``'root'``)``);`
```

위와 같이 key를 설정하면 안됩니다.

NumberList 컴포넌트가 리턴하는 JSX에서 {listItems}를 출력하는데, listItems가 저장하는 ListItem 컴포넌트는 key를 가지고 있지 않습니다. ListItem 컴포넌트에서 key를 가지고 있어야 합니다. 위의 코드를 아래 코드와 같이 수정되어야 합니다.

```js
`//아래와 같이 코드가 수정되어야 합니다.``function` `ListItem(props) {``  ``return` `<li>{props.value}</li>;``}` `function` `NumberList(props) {``  ``const numbers = props.numbers;``  ``const listItems = numbers.map((number) =>``    ``<ListItem key={number.toString()}``              ``value={number} />``  ``);``  ``return` `(``    ``<ul>``      ``{listItems}``    ``</ul>``  ``);``}` `const numbers = [1, 2, 3, 4, 5];``ReactDOM.render(``  ``<NumberList numbers={numbers} />,``  ``document.getElementById(``'root'``)``);`
```



## 4. key는 형제 노드끼리 유니크해야 합니다.

key는 전부 유니크할 필요 없이, 형제 노드끼리만 유니크하면 됩니다.

```js
`function` `Blog(props) {``  ``const sidebar = (``    ``<ul>``      ``{props.posts.map((post) =>``        ``<li key={post.id}>``          ``{post.title}``        ``</li>``      ``)}``    ``</ul>``  ``);``  ``const content = props.posts.map((post) =>``    ``<div key={post.id}>``      ``<h3>{post.title}</h3>``      ``<p>{post.content}</p>``    ``</div>``  ``);``  ``return` `(``    ``<div>``      ``{sidebar}``      ``<hr />``      ``{content}``    ``</div>``  ``);``}` `const posts = [``  ``{id: 1, title: ``'Hello World'``, content: ``'Welcome to learning React!'``},``  ``{id: 2, title: ``'Installation'``, content: ``'You can install React from npm.'``}``];``ReactDOM.render(``  ``<Blog posts={posts} />,``  ``document.getElementById(``'root'``)``);`
```



## 5. key는 props.key로 사용이 불가능합니다.

key는 컴포넌트의 구성요소로 전달되지 않습니다. 그렇기 때문에, key는 props.key로 읽어 오는 것이 불가능합니다. key값을 읽어와야 한다면, 다른 props에 key를 담아 읽어와야 합니다.

```js
`const content = posts.map((post) =>``  ``<Post``    ``key={post.id}``    ``id={post.id}``    ``title={post.title} />``);`
```

위의 예제에서 props.key는 읽어 오는 것이 불가능하지만, props.id로 key값을 읽어와 사용하는 것이 가능합니다.



# 렌더링

> **웹 브라우저의 HTML문서 렌더링 과정**

**1. 불러오기**

로더(Loader)가 서버로부터 전달 받는 리소스 스트림을 읽는 과정.

읽으면서 어떤 파일인지, 데이터인지 파일을 다운로드할 것인지 등을 결정한다.

**2. 파싱 (Phasing)**

웹 엔진이 가지고 있는 HTML/XML 파서가 문서를 파싱해서 DOM Tree를 만든다.

**3. 렌더링 트리 만들기**

DOM Tree는 내용을 저장하는 트리로 자바스크립트에서 접근하는 DOM객체를 쓸 때 이용하는 것이고 별도로 그리기 위한 트리가 만들어져야 하는데 그것이 렌더링 트리다. (그릴 때 필요없는 head, title, body태그등이 없음 + display:none 처럼 DOM에는 있지만 화면에서는 걸러내야할 것들을 걸러냄)

**4. CSS 결정**

CSS는 선택자에 따라서 적용되는 태그가 다르기 때문에 모든 CSS 스타일을 분석해 태그에 스타일 규칙이 적용되게 결정한다.

**5. 레이아웃**

렌더링 트리에서 위치나 크기를 가지고 있지 않기 때문에 객체들에게 위치와 크기를 정해주는 과정을 레이아웃이라고 함.

**6. 그리기**

렌더링 트리를 탐색하면서 그리기.

\* 참고로 렌더링 엔진은 가능하면 HTML문서가 파싱될 때까지 기다리지 않고, 배치와 그리기 과정을 시작한다.

> **CSS는 위에 Script는 아래에?**

웹브라우저의 렌더링 순서를 이해하면 이해가 가는 말이다.

문서를 파싱해서 DOM Tree를 만들어도 스타일 규칙이 없으면 렌더링 할 수가 없다.

즉, 최대한 빨리 스타일 규칙을 알아야 렌더링트리가 완전히 만들어지므로 스타일시트 파일을 모두 다운로드시키기 위해 <head></head>태그 사이에 놓는 것이다. (인터프리터에서 html파일 위에서 아래로 읽음)

자바스크립트는 왜 아래에 놓아야 성능이 좋아질까?

자바스크립트는 DOM객체를 이용해서 컴포넌트들을 조작하는데 <head></head>태그 사이 처럼 상단에 놓게 되면 HTML파서가 파싱을 멈추고 스크립트파일을 읽기 때문이다.

파싱을 멈추고 읽기 때문에 위에서 스크립트파일이 많거나 파일이 크면 읽는 시간이 오래걸려 사용자 입장에서 웹페이지가 느리게 보이게 되므로 느리다고 느낄 수 있다.

심지어 잘 못 코딩했을 경우 HTML 파싱보다 자바스크립트 파일이 먼저 실행되서 적용이 안되는 모습도 볼 수 있다.

따라서 일반적으로 </body>태그 위에 스크립트를 모아둔다.

\* 이렇게 하다보면 자바스크립트 애니메이션같은 것이 늦게 적용되서 처음 웹페이지를 들어갔을 때 아주 잠깐 다른 웹페이지가 보이다가 애니메이션이 적용되는 것을 볼 수 있는데, 이런 부분은 감안하는 방법이 있고, 애니메이션 관련된 부분만 <head></head>태그 사이로 올려서 적용하는 방법이 있다.

> **jQuery Document.ready(), Window.load() 실행 순서**

$(document).ready() : 외부 리소스, 이미지와 상관없이 DOM Tree 생성 후 실행됨.

$(window).load() : 화면에 필요한 모든 요소들이 메모리에 모두 올려진 다음에 실행됨. (=화면이 모두 그려진 다음)

결론이 벌써 나왔다.

$(document).ready()가 DOM Tree가 만들어진 후에 바로 실행되므로 $(window).load()보다 먼저 실행된다.

$(window).load()를 사용할 시 주의 사항

\- body의 onload 이벤트를 적용할 시 $(window).load()가 실행되지 않을 수 있음.

\- 외부 링크나 파일 include시 안에 $(window).load()가 있으면 둘 중 하나만 실행됨.

\- 웹페이지에 많은 이미지가 존재해서 이미지가 로딩되는데 오래걸리면 그것들이 로딩될 때까지 $(window).load()는 딜레이됨.

\* 또 하나의 렌더링 최적화 방법으로 *초기 렌더링때 AJAX 요청을 최소화 하는 방법*이 있다.

초기에 HTML은 화면을 구성하는 레이아웃만 있고 실제데이터는 AJAX요청을 통해 나중에 받아온다면

1차적으로 렌더링이 끝나고 나서 AJAX로 가져온 데이터로 다시 2차적으로 렌더링을 하게되므로 두 번 렌더링하기 때문에 느려보인다.

따라서 초기 렌더링때는 AJAX요청을 최소화 해야한다.



참고사이트 : 

http://wikibook.co.kr/article/web-sites-optimization-3/

http://d2.naver.com/helloworld/59361

https://appear.github.io/2017/09/28/Etc/etc-01/



https://jeong-pro.tistory.com/90



# 소켓과 포트의 차이점

 http://blog.naver.com/PostView.nhn?blogId=myca11&logNo=221389847130&categoryNo=24&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView 

# React class component vs function component

 https://overreacted.io/ko/how-are-function-components-different-from-classes/ 