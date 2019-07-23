import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './indexbodymenu.scss';

class Indexbodymenu extends Component {

    render() {
        var imgstyle = {
            width: "6vw",
            marginRight: "1vw",
            borderRadius: "50%"
        };
        var astyle1 = {
            marginRight: "10px"
        };
        var astyle2 = {
            marginRight: "50px"
        };
        return (
            <HashRouter>
                <div className="jumbotron jumbotron-fluid">
                    <div className="menucon">
                        <NavLink to='/'>
                            <div className="carlogo">
                                <img src="http://70.12.50.174:3001/image/carlogo.png" alt="" width="145px" /><br />Carset
                            </div>
                        </NavLink>
                        <div className="menuset">
                            <NavLink to='/login' style={astyle2}>로그인</NavLink>
                            <NavLink to='/signup' style={astyle1}>회원가입</NavLink>
                        </div>
                    </div>
                </div>
            </HashRouter>
        )
    }
}


export default Indexbodymenu;