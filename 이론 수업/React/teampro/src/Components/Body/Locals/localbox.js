import React, { Component } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { checked, notchecked } from '../../../actions';
import './localbox.css';


export const Seoul = () => {
    const dispatch = useDispatch();
    var btnclicked = (e) => {
        let btnname = e.target.parentNode.getAttribute('id');
        console.log(btnname);
        if (e.target.checked = true) {
            return () => dispatch(checked(btnname));
        } else if (e.target.checked = false) {
            return () => dispatch(notchecked(btnname));
        };
    };
    return (
        <div className='localdiv localdiv1'>
            <ToggleButtonGroup className='togglebtngrp' type="checkbox">
                <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' id="강남구" onChange={btnclicked} variant="outline-primary" value={1}>강남구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>강동구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>강북구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>강서구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>관악구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>광진구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>구로구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>금천구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={9}>노원구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={10}>도봉구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={11}>동대문구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={12}>동작구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={13}>마포구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={14}>서대문구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={15}>서초구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={16}>성동구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={17}>성북구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={18}>송파구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={19}>양천구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={20}>영등포구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={21}>용산구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={22}>은평구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={23}>종로구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={24}>중구</ToggleButton>
                <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={25}>중랑구</ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
};
export class Gyeongi extends Component {
    render() {
        return (
            <div className='localdiv localdiv2'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>가평군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>고양시 덕양구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>고양시 일산서구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>고양시 일산동구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>과천시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>광명시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>광주시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>구리시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={9}>군포시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={10}>김포시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={11}>남양주시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={12}>동두천시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={13}>부천시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={14}>성남시 분당구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={15}>성남시 수정구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={16}>성남시 중원구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={17}>수원시 권선구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={18}>수원시 장안구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={19}>수원시 영통구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={20}>수원시 팔달구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={21}>시흥시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={22}>안산시 상록구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={23}>안산시 단원구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={24}>안성시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={25}>안양시 동안구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={26}>안양시 만안구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={27}>양주시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={28}>양평군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={29}>여주시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={30}>연천군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={31}>오산시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={32}>용인시 기흥구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={33}>용인시 수지구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={34}>용인시 처인구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={35}>의왕시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={36}>의정부시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={37}>이천시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={38}>파주시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={39}>평택시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={40}>포천시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={41}>하남시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={42}>화성시</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Incheon extends Component {
    render() {
        return (
            <div className='localdiv localdiv3'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>강화군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>계양구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>미추홀구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>남동구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>동구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>부평구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>서구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>연수구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={9}>옹진구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={10}>중구</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Busan extends Component {
    render() {
        return (
            <div className='localdiv localdiv4'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>강서구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>금정구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>기장군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>남구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>동구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>동래구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>부산진구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>북구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={9}>사상구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={10}>사하구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={11}>서구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={12}>수영구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={13}>연제구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={14}>영도구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={15}>중구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={16}>해운대구</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Daegue extends Component {
    render() {
        return (
            <div className='localdiv localdiv5'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>남구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>달서구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>달성군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>동구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>북구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>서구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>수성구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>중구</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Daejeon extends Component {
    render() {
        return (
            <div className='localdiv localdiv6'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>대덕구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>동구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>서구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>유성구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>중구</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Sejong extends Component {
    render() {
        return (
            <div className='localdiv localdiv7'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>반곡동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>소담동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>보람동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>대평동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>가람동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>한솔동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>나성동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>새롬동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={9}>다정동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={10}>어진동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={11}>중촌동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={12}>아름동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={13}>고운동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={14}>도담동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={15}>조치원읍</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={16}>연기면</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={17}>연동면</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={18}>부강면</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={19}>금남면</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={20}>장군면</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={21}>연서면</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={22}>전의면</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={23}>정동면</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={24}>소정면</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Gwangju extends Component {
    render() {
        return (
            <div className='localdiv localdiv8'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>광산구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>남구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>동구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>북구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>서구</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Ulsan extends Component {
    render() {
        return (
            <div className='localdiv localdiv9'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>남구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>동구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>북구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>울주군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>중구</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Gangwon extends Component {
    render() {
        return (
            <div className='localdiv localdiv10'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>강릉시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>고성군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>동해시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>삼척시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>속초시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>양구군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>양양군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>영월군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={9}>원주시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={10}>인제군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={11}>정선군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={12}>철원군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={13}>춘천시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={14}>태백시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={15}>평창군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={16}>홍천군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={17}>화천군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={18}>횡성군</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Gyungnam extends Component {
    render() {
        return (
            <div className='localdiv localdiv11'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>거제시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>거창군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>고성군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>김해시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>남해군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>밀양시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>사천시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>산청군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={9}>양산시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={10}>의령군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={11}>진주시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={12}>창녕군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={13}>창원시 마산합포</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={14}>창원시 마산회원</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={15}>창원시 성산구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={16}>창원시 의창구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={17}>창원시 진해구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={18}>통영시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={19}>하동군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={20}>함안군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={21}>함양군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={22}>합천군</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Gyungbuk extends Component {
    render() {
        return (
            <div className='localdiv localdiv12'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>경산시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>경주시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>고령군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>구미시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>군위군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>김천시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>문경시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>봉화군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={9}>상주시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={10}>성주군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={11}>안동시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={12}>영덕군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={13}>영양군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={14}>영주시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={15}>영천시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={16}>예천군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={17}>울릉군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={18}>울진군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={19}>의성군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={20}>청도군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={21}>청송군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={22}>칠곡군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={23}>포항시 남구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={24}>포항시 북구</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Jeonnam extends Component {
    render() {
        return (
            <div className='localdiv localdiv13'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>강진군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>고흥군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>곡성군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>광양시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>구례군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>나주시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>담양군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>목포시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={9}>무안군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={10}>보성군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={11}>순천시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={12}>신안군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={13}>여수시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={14}>영광군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={15}>영암군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={16}>완도군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={17}>장성군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={18}>장흥군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={19}>진도군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={20}>함평군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={21}>해남군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={22}>화순군</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Jeonbuk extends Component {
    render() {
        return (
            <div className='localdiv localdiv14'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>고창군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>군산시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>김제시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>남원시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>무주군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>부안군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>순창군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>완주군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={9}>익산시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={10}>임실군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={11}>장수군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={12}>전주시 덕진구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={13}>전주시 완산구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={14}>정읍시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={15}>진안군</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Choongnam extends Component {
    render() {
        return (
            <div className='localdiv localdiv15'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>공주시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>금산군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>논산시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>당진시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>보령시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>부여군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>서산시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>서천군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={9}>아산시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={10}>연기군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={11}>예산군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={12}>천안시 동남구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={13}>천안시 서북구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={14}>청양군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={15}>태안군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={16}>홍성군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={17}>계룡시</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Choongbuk extends Component {
    render() {
        return (
            <div className='localdiv localdiv16'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>괴산군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>단양군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>보은군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>영동군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>옥천군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>음성군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>제천시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>진천군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={9}>청주시 서원구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={10}>청주시 청원구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={11}>청주시 상당구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={12}>청주시 흥덕구</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={13}>충주시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={14}>증평군</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Jeju extends Component {
    render() {
        return (
            <div className='localdiv localdiv17'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>남제주군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>북제주군</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>서귀포시</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>제주시</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};
export class Othercountry extends Component {
    render() {
        return (
            <div className='localdiv localdiv18'>
                <ToggleButtonGroup className='togglebtngrp' type="checkbox" >
                    <ToggleButton name="강남구" className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={1}>중국,홍콩</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={2}>미국</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={3}>일본</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={4}>아시아,중동</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={5}>북아메리카</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={6}>남아메리카</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={7}>유럽</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={8}>아프리카</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={9}>오세아니아</ToggleButton>
                    <ToggleButton name="강남구" className='togglebtn' variant="outline-primary" value={10}>그외</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
};