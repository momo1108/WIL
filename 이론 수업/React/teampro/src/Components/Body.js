import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Detailsrch from './Body/Detailsrch';
import Lists from './Body/Lists';
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div className='bodydiv'>
                <Detailsrch />
                <Lists />
            </div>
        );
    }
};

export default Body;