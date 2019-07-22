import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <div className="jumbotron jumbotron-fluid">
                <div className="menucon">
                    <a href="/">
                        <div className="carlogo">
                            <img src="http://localhost:3001/image/carlogo.png" alt="" width="145px" /><br />Carset
                        </div>
                    </a>
                    <div className="menuset">
                            <img src="<%= user.profileimg %>" style={imgstyle} />
                            <a href="/carlist" style={astyle1}>자동차리스트</a>
                            <a href="/logout">로그아웃</a>
                            <a href="/login_form" style={astyle2}>로그인</a>
                            <a href="/signin_form">회원가입</a>
                    </div>
                </div>
            </div>
        )
    }
}
                    
                    
export default Indexbodymenu;