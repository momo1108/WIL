import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Carinfo from './Carinfo';
import Carhis from './Carhis';
import Carlist from './Carlist';
import './indexbody.scss';


class Indexbody extends Component {


    render() {
        var carsetstyle = {
            color: 'orangered',
            fontWeight: 'bold',
            position: 'relative',
            left: '300px'
        };
        var divStyle = {
            width: '65%',
            margin: '0 auto',
            marginBottom: '25px',
        }
        return (
            // 본문 시작
            <HashRouter>
                <div className="maincon">
                    <div className="mainexpln">
                        자동차 온라인 마켓의 시작<br />
                        <span style={carsetstyle}>카 셋.</span>
                    </div>
                    <div className='indexbuttongroup' style={divStyle}>
                        <div className='indexbutton1'><NavLink to='/1'>자동차 정보 조회</NavLink></div>
                        <div className='indexbutton2'><NavLink to='/2'>자동차 이력 조회</NavLink></div>
                        <div className='indexbutton3'><NavLink to='/3'>자동차 리스트 조회</NavLink></div>
                        <div className='indexbutton4'><NavLink to='/4'>자동차 등록</NavLink></div>
                    </div>
                    <Route exact path='/' component={Carinfo} />        
                    <Route className='infofade' path='/1' component={Carinfo} />
                    <Route className='hisfade' path='/2' component={Carhis} />
                    <Route className='listfade' path='/3' component={Carlist} />
                </div>
            </HashRouter>
        )
    }
}

export default Indexbody;