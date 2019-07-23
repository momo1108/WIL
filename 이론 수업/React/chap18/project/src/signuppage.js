import React, { Component } from 'react';
import Indexbodymenu from './indexbodymenu';
import Signupbody from './signupbody';
import { Route, NavLink, HashRouter } from 'react-router-dom';

class Signuppage extends Component {
    render() {
        return (
            <div>
                <Route path='/signup' component={Indexbodymenu} />
                <Route path='/signup' component={Signupbody} />
            </div>
        )
    }
}

export default Signuppage;