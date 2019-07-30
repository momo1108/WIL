import React, { Component } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { connect } from "react-redux";
import { checked, notchecked } from '../../../actions';
import local from './address';
import './index.css';

export function Seoul() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        // console.log(btnname);
        console.log(e.target);
        if (e.target.checked) {
            // console.log('체크됨');
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            // console.log('체크안됨');
            dispatch(notchecked(btnname));
        };
    }

    return (
        <div className='localdiv localdiv1'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox">
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="서울 전체">서울 전체</ToggleButton>
                {local.Seoul.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    );
}

export function Gyeongi() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv2'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="경기 전체">경기 전체</ToggleButton>
                {local.Gyeongi.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Incheon() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv3'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="인천 전체">인천 전체</ToggleButton>
                {local.Incheon.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Busan() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv4'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="부산 전체">부산 전체</ToggleButton>
                {local.Busan.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Daegue() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv5'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="대구 전체">대구 전체</ToggleButton>
                {local.Daegue.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Daejeon() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv6'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="대전 전체">대전 전체</ToggleButton>
                {local.Daejeon.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Sejong() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv7'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="세종 전체">세종 전체</ToggleButton>
                {local.Sejong.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Gwangju() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv8'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="광주 전체">광주 전체</ToggleButton>
                {local.Gwangju.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Ulsan() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv9'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="울산 전체">울산 전체</ToggleButton>
                {local.Ulsan.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Gangwon() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv10'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="강원 전체">강원 전체</ToggleButton>
                {local.Gangwon.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Gyungnam() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv11'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="경남 전체">경남 전체</ToggleButton>
                {local.Gyungnam.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Gyungbuk() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv12'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="경북 전체">경북 전체</ToggleButton>
                {local.Gyungbuk.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Jeonnam() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv13'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="전남 전체">전남 전체</ToggleButton>
                {local.Jeonnam.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Jeonbuk() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv14'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="전북 전체">전북 전체</ToggleButton>
                {local.Jeonbuk.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Choongnam() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv15'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="충남 전체">충남 전체</ToggleButton>
                {local.Choongnam.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Choongbuk() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv16'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="충북 전체">충북 전체</ToggleButton>
                {local.Choongbuk.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Jeju() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv17'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="제주 전체">제주 전체</ToggleButton>
                {local.Jeju.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};
export function Othercountry() {
    var dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        if (e.target.checked) {
            dispatch(checked(btnname));
        };
        if (!e.target.checked) {
            dispatch(notchecked(btnname));
        };
    }
    return (
        <div className='localdiv localdiv18'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                <ToggleButton className='togglebtn0' onChange={btnclicked} variant="outline-secondary" value={0} id="해외 전체">해외 전체</ToggleButton>
                {local.Othercountry.map((value, index) => {
                    return (<ToggleButton key={index} className='togglebtn' onChange={btnclicked} variant="outline-primary" value={index + 1} id={value}>{value}</ToggleButton>)
                })}
            </ToggleButtonGroup>
        </div>
    )
};