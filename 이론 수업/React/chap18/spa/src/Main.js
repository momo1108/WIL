import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import Carlist from './Carlist';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      // 라우팅을 사용할 부분을 지정해준다. HashRouter
      <HashRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className='header'>
          {/* 라우터 경로를 a태그 대신 NavLink 컴포넌트와 to 옵션을 사용해서 설정한다. */}
          {/* React 라우터는 모자라서 path주소가 겹치면 같이 출력이된다. 이를 막기위해 exact 옵션을 쓰자. */}
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink to='/stuff'>Stuff</NavLink></li>
          <li><NavLink to='/carlist'>Carlist</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
        <div className='content'>
          {/* 외부요청을 받아서 처리하주는 Route 컴포넌트를 사용하자 */}
          {/* path url 요청이 들어오면 컴포넌트를 출력해줘라. */}
          <Route exact path='/' component={Home} />
          <Route path='/stuff' component={Stuff} />
          <Route path='/carlist' component={Carlist} />
          <Route path='/contact' component={Contact} />
        </div>
      </div>
      </HashRouter>
    )
  }
}

export default Main;
