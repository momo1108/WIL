import React,{Component} from 'react';
import Indexbody from './indexbody';
import Indexbodymenu from './indexbodymenu';
import { Route, NavLink, HashRouter } from 'react-router-dom';

class Main extends Component {
  render(){
    return (
      <HashRouter>
      <div>
        <Indexbodymenu />
        <Indexbody />
      </div>
      </HashRouter>
    )
  }
}

export default Main;
