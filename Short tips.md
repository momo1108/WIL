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

