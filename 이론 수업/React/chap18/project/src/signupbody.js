import React, { Component } from 'react';
import './signupbody.scss';
import serialize from 'form-serialize';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';

class Signupbody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            signup: false,
            alert: null
        }
    }
    fileChangedHandler = (event) => {
        document.getElementById('imgpreview').src = URL.createObjectURL(event.target.files[0]);
        this.setState({ selectedFile: event.target.files[0] });
    };
    uploadHandler = () => {
        let myform = document.querySelector("#loginput");
        let data = serialize(myform, {hash: true} );
        // const formData = new FormData()
        // formData.append(
        //     'myFile',
        //     this.state.selectedFile,
        //     this.state.selectedFile.name
        // )
        Axios({
            url: '/api/signup',
            method: 'post',
            data: data
        })
            .then(res => {
                this.setState({
                    signup: res.data.signupset
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
        var imgStyle = {
            borderRadius: "15px"
        }
        
        return (
            <div className='signuppage'>
                {
                    this.state.signup && <Redirect to='/login' />
                }
                <div className="welcome">
                    <p>새로운 회원님을 진심으로 환영합니다!</p>
                </div>
                <div className="container loginbox">
                    <form style={formStyle} id="loginput" encType="multipart/form-data">
                        <span className="whattoinput">사용할 이메일</span><br />
                        <input type="text" placeholder="ex) abcdefg@naver.com" name="id"
                            style={inputborderStyle} required /><br />
                        <span className="whattoinput">이름</span><br />
                        <input type="text" placeholder="ex) 방혜찬" name="name" style={inputborderStyle} required /><br />
                        <span className="whattoinput">회사</span><br />
                        <input type="text" placeholder="ex) Google" name="company"
                            style={inputborderStyle} required /><br />
                        <span className="whattoinput">주소</span><br />
                        <input type="text" placeholder="ex) 인천광역시 부평구" name="address"
                            style={inputborderStyle} required /><br />
                        <span className="whattoinput">사용할 비밀번호</span><br />
                        <input type="password" placeholder="password" name="password"
                            style={inputborderStyle} required /><br />
                        {/* <span className="whattoinput">프로필 사진</span><br />
                        <label htmlFor="profileimg" id="imglabel">프사찾기</label><br />
                        <img id="imgpreview" width="30%" style={imgStyle} alt='' />
                        <input type="file" name="profileimg" id="profileimg" accept="image/*" onChange={this.fileChangedHandler} required /> */}
                        <input type="button" value="회원가입 신청" onClick={this.uploadHandler} />
                    </form>
                </div>
            </div>
        )
    }
}

export default Signupbody;