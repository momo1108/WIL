import React, { Component } from 'react';
import Indexpage from './indexpage';
import Loginpage from './loginpage';
import Signuppage from './signuppage';
import { Route, NavLink, HashRouter } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Indexpage />
          <Loginpage />
          <Signuppage />
        </HashRouter>
      </div>
    )
  }
}

export default Main;
