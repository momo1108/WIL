import React, { Component } from 'react';
import serialize from 'form-serialize';
import {Redirect} from 'react-router-dom';
import Axios from 'axios';
import './loginbody.scss';

class Loginbody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            alert: null
        }
    }
    uploadHandler = () => {
        let myform = document.querySelector("#loginput");
        let data = serialize(myform, {hash: true} );
        Axios({
            url: '/api/login',
            method: 'post',
            data: data
        })
            .then(res => {
                console.log(res);
                this.setState({
                    login: res.data.loginset
                });
                if(res.data.msg) alert(res.data.msg)
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        var formStyle = {
            padding: "0 25px"
        }
        var inputborderStyle = {
            border: "1px solid rgb(216, 216, 216)"
        };
        var pStyle = {
            marginTop: "15px",
            fontSize: "15px",
            fontFamily: "'Nanum Gothic', sans-serif"
        }
        var aStyle = {
            textDecorationLine: "none"
        }
        return (
            <div className='loginpage'>
                {
                    this.state.login && <Redirect to='/' />
                }
                <div className="welcome">
                    <p>환영합니다 고객님!</p>
                </div>
                <div className="container loginbox">
                    <form style={formStyle} id="loginput">
                        <span className="whattoinput">이메일</span><br />
                        <input type="text" placeholder="ex) abcdefg@naver.com" name="id" style={inputborderStyle} /><br /><br />
                        <span className="whattoinput">비밀번호</span><br />
                        <input type="password" placeholder="password" name="password" style={inputborderStyle} /><br />
                        <p style={pStyle}><a href="/findpw" style={aStyle}>비밀번호 찾기</a></p>
                        <input type="checkbox" /><span className="whattoinput"> 로그인 정보 기억하기</span>
                        <input type="button" value="로그인" onClick={this.uploadHandler} />
                    </form>
                </div>
            </div>
        )
    }
}

export default Loginbody;