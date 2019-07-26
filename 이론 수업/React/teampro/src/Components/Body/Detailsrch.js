import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Route, NavLink } from 'react-router-dom';
import { Seoul, Gyeongi, Incheon, Busan, Daegue, Daejeon, Sejong, Gwangju, Ulsan, Gangwon, Gyungnam, Gyungbuk, Jeonnam, Jeonbuk, Choongnam, Choongbuk, Jeju, Othercountry } from './Locals';
import './Detailsrch.css';

class Detailsrch extends Component {

    render() {
        var localselect = (e) => {
            let selector = document.getElementsByClassName('locals');
            let i = 0;
            while (selector[i]) {
                selector[i].style.backgroundColor = 'white';
                selector[i].style.fontWeight = 'normal';
                i++;
            }
            e.target.style.backgroundColor = 'rgb(227, 242, 255)';
            e.target.style.fontWeight = 'bold';
        }
        return (
            <Jumbotron className='searchjumbo'>
                <p>지역</p>
                <ul>
                    <NavLink exact to='/workerinfo/'><li className='locals' onClick={localselect}>전체</li></NavLink>
                    <NavLink to='/workerinfo/seoul'><li className='locals' onClick={localselect}>서울</li></NavLink>
                    <NavLink to='/workerinfo/gyeongi'><li className='locals' onClick={localselect}>경기</li></NavLink>
                    <NavLink to='/workerinfo/incheon'><li className='locals' onClick={localselect}>인천</li></NavLink>
                    <NavLink to='/workerinfo/busan'><li className='locals' onClick={localselect}>부산</li></NavLink>
                    <NavLink to='/workerinfo/daegue'><li className='locals' onClick={localselect}>대구</li></NavLink>
                    <NavLink to='/workerinfo/daejeon'><li className='locals' onClick={localselect}>대전</li></NavLink>
                    <NavLink to='/workerinfo/sejong'><li className='locals' onClick={localselect}>세종</li></NavLink>
                    <NavLink to='/workerinfo/gwangju'><li className='locals' onClick={localselect}>광주</li></NavLink>
                    <NavLink to='/workerinfo/ulsan'><li className='locals' onClick={localselect}>울산</li></NavLink>
                    <NavLink to='/workerinfo/gangwon'><li className='locals' onClick={localselect}>강원</li></NavLink>
                    <NavLink to='/workerinfo/gyungnam'><li className='locals' onClick={localselect}>경남</li></NavLink>
                    <NavLink to='/workerinfo/gyungbuk'><li className='locals' onClick={localselect}>경북</li></NavLink>
                    <NavLink to='/workerinfo/jeonnam'><li className='locals' onClick={localselect}>전남</li></NavLink>
                    <NavLink to='/workerinfo/jeonbuk'><li className='locals' onClick={localselect}>전북</li></NavLink>
                    <NavLink to='/workerinfo/choongnam'><li className='locals' onClick={localselect}>충남</li></NavLink>
                    <NavLink to='/workerinfo/choongbuk'><li className='locals' onClick={localselect}>충북</li></NavLink>
                    <NavLink to='/workerinfo/jeju'><li className='locals' onClick={localselect}>제주</li></NavLink>
                    <NavLink to='/workerinfo/othercountry'><li className='locals' onClick={localselect}>해외</li></NavLink>
                </ul>
                <Route path='/workerinfo/seoul' component={Seoul} />
                <Route path='/workerinfo/gyeongi' component={Gyeongi} />
                <Route path='/workerinfo/incheon' component={Incheon} />
                <Route path='/workerinfo/busan' component={Busan} />
                <Route path='/workerinfo/daegue' component={Daegue} />
                <Route path='/workerinfo/daejeon' component={Daejeon} />
                <Route path='/workerinfo/sejong' component={Sejong} />
                <Route path='/workerinfo/gwangju' component={Gwangju} />
                <Route path='/workerinfo/ulsan' component={Ulsan} />
                <Route path='/workerinfo/gangwon' component={Gangwon} />
                <Route path='/workerinfo/gyungnam' component={Gyungnam} />
                <Route path='/workerinfo/gyungbuk' component={Gyungbuk} />
                <Route path='/workerinfo/jeonnam' component={Jeonnam} />
                <Route path='/workerinfo/jeonbuk' component={Jeonbuk} />
                <Route path='/workerinfo/choongnam' component={Choongnam} />
                <Route path='/workerinfo/choongbuk' component={Choongbuk} />
                <Route path='/workerinfo/jeju' component={Jeju} />
                <Route path='/workerinfo/othercountry' component={Othercountry} />
                <hr className='firsthr' />
                <p>형태</p><hr />

                <p>경력</p><hr />

                <p>국적</p><hr />

                <p>성별</p>
            </Jumbotron>
        );
    }
};

export default Detailsrch;