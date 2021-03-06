import React, { Component } from 'react';
import { ToggleButton, ToggleButtonGroup, Jumbotron } from 'react-bootstrap';
// import { useStore, useSelector, useDispatch } from 'react-redux';
// import { Route, NavLink } from 'react-router-dom';
// import { checked, notchecked } from '../../actions';
// import { connect } from "react-redux";
import { Gyeongi, Incheon, Busan, Daegue, Daejeon, Sejong, Gwangju, Ulsan, Gangwon, Gyungnam, Gyungbuk, Jeonnam, Jeonbuk, Choongnam, Choongbuk, Jeju, Othercountry } from './Locals';
import Seoul from './Locals';
// import {Showlocals} from './Locals/Showlocals';
import './Detailsrch.css';

class Detailsrch extends Component{
    render(){
        var localselect = (e) => {
            // togglebtn[0].children[0].checked
            // console.log(e.target.getAttribute('name'));
            // console.log(selectedLocal);
            let selector = document.getElementsByClassName('locals');
            let selector_local = document.getElementsByClassName('localdiv');
            let i = 0;
            for (let j = 0; j < selector_local.length; j++) {
                selector_local[j].style.display = 'none';
            }
            let boxclass = e.target.getAttribute('name');
            if (boxclass) document.getElementsByClassName(boxclass)[0].style.display = 'block';
            while (selector[i]) {
                selector[i].className = 'locals';
                i++;
            }
            if (e.target.className == 'localtext') {
                e.target.parentElement.className = 'locals localclick';
            } else {
                e.target.className = 'locals localclick';
            }
        }
        return (
            <Jumbotron className='searchjumbo'>
                <p>지역</p>
                <ul>
                    <li className='locals' onClick={localselect}><span className='localtext'>전체</span></li>
                    <li className='locals' onClick={localselect} name='localdiv1'><span className='localtext' name='localdiv1'>서울</span></li>
                    <li className='locals' onClick={localselect} name='localdiv2'><span className='localtext' name='localdiv2'>경기</span></li>
                    <li className='locals' onClick={localselect} name='localdiv3'><span className='localtext' name='localdiv3'>인천</span></li>
                    <li className='locals' onClick={localselect} name='localdiv4'><span className='localtext' name='localdiv4'>부산</span></li>
                    <li className='locals' onClick={localselect} name='localdiv5'><span className='localtext' name='localdiv5'>대구</span></li>
                    <li className='locals' onClick={localselect} name='localdiv6'><span className='localtext' name='localdiv6'>대전</span></li>
                    <li className='locals' onClick={localselect} name='localdiv7'><span className='localtext' name='localdiv7'>세종</span></li>
                    <li className='locals' onClick={localselect} name='localdiv8'><span className='localtext' name='localdiv8'>광주</span></li>
                    <li className='locals' onClick={localselect} name='localdiv9'><span className='localtext' name='localdiv9'>울산</span></li>
                    <li className='locals' onClick={localselect} name='localdiv10'><span className='localtext' name='localdiv10'>강원</span></li>
                    <li className='locals' onClick={localselect} name='localdiv11'><span className='localtext' name='localdiv11'>경남</span></li>
                    <li className='locals' onClick={localselect} name='localdiv12'><span className='localtext' name='localdiv12'>경북</span></li>
                    <li className='locals' onClick={localselect} name='localdiv13'><span className='localtext' name='localdiv13'>전남</span></li>
                    <li className='locals' onClick={localselect} name='localdiv14'><span className='localtext' name='localdiv14'>전북</span></li>
                    <li className='locals' onClick={localselect} name='localdiv15'><span className='localtext' name='localdiv15'>충남</span></li>
                    <li className='locals' onClick={localselect} name='localdiv16'><span className='localtext' name='localdiv16'>충북</span></li>
                    <li className='locals' onClick={localselect} name='localdiv17'><span className='localtext' name='localdiv17'>제주</span></li>
                    <li className='locals' onClick={localselect} name='localdiv18'><span className='localtext' name='localdiv18'>해외</span></li>
                </ul>
                <Seoul />
                <Gyeongi />
                <Incheon />
                <Busan />
                <Daegue />
                <Daejeon />
                <Sejong />
                <Gwangju />
                <Ulsan />
                <Gangwon />
                <Gyungnam />
                <Gyungbuk />
                <Jeonnam />
                <Jeonbuk />
                <Choongnam />
                <Choongbuk />
                <Jeju />
                <Othercountry />
                <hr className='firsthr' />
                <span class="worktype">형태</span>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox">
                <ToggleButton className='togglebtn' variant="outline-primary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' variant="outline-primary" value={1} >출퇴근</ToggleButton>
                <ToggleButton className='togglebtn' variant="outline-primary" value={2} >입주</ToggleButton>
                <ToggleButton className='togglebtn' variant="outline-primary" value={3} >재택</ToggleButton>
                <ToggleButton className='togglebtn' variant="outline-primary" value={4} >출퇴근&입주</ToggleButton>
                <ToggleButton className='togglebtn' variant="outline-primary" value={5} >출퇴근&재택</ToggleButton>
                </ToggleButtonGroup>
                <hr />
    
                <p>경력</p><hr />
    
                <p>국적</p><hr />
    
                <p>성별</p>
            </Jumbotron>
        );
    }
};

export default Detailsrch;