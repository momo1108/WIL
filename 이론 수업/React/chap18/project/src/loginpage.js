import React, { Component } from 'react';
import Indexbodymenu from './indexbodymenu';
import Loginbody from './loginbody';
import { Route, NavLink, HashRouter } from 'react-router-dom';

class Loginpage extends Component {
    render() {
        return (
            <div>
                <Route path='/login' component={Indexbodymenu} />
                <Route path='/login' component={Loginbody} />
            </div>
        )
    }
}

export default Loginpage;