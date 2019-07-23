import React, { Component } from 'react';
import Indexbodymenu from './indexbodymenu';
import Indexbody from './indexbody';
import { Route, NavLink, HashRouter } from 'react-router-dom';

class Indexpage extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Indexbodymenu} />
                <Route exact path='/' component={Indexbody} />
                <Route path='/index/' component={Indexbodymenu} />
                <Route path='/index/' component={Indexbody} />
            </div>
        )
    }
}

export default Indexpage;