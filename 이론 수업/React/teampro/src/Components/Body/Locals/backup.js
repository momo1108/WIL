import React, { Component } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { connect } from "react-redux";
import { checked, notchecked } from '../../../actions';
import './index.css';

const local = {
    Seoul: ['서울 전체', '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
    Gyeongi: ['경기 전체', '가평군', '고양시 덕양구', '고양시 일산서구', '고양시 일산동구', '과천시', '광명시', '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시', '성남시 분당구', '성남시 수정구', '성남시 중원구', '수원시 권선구', '수원시 장안구', '수원시 영통구', '수원시 팔달구', '시흥시', '안산시 상록구', '안산시 단원구', '안성시', '안양시 동안구', '안양시 만안구', '양주시', '양평군', '여주시', '연천군', '오산시', '용인시 기흥구', '용인시 수지구', '용인시 처인구', '의왕시', '의정부시', '이천시', '파주시', '평택시', '포천시', '하남시', '화성시'],
    Incheon: ['인천 전체', '강화군', '계양구', '미추홀구', '남동구', '동구', '부평구', '서구', '연수구', '옹진구', '중구'],
    Busan: ['부산 전체', '강서구', '금정구', '기장군', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구'],
    Daegue: ['대구 전체', '남구', '달서구', '달성군', '동구', '북구', '서구', '수성구', '중구'],
    Daejeon: ['대전 전체', '대덕구', '동구', '서구', '유성구', '중구'],
    Sejong: ['세종 전체', '가람동', '고운동', '금남면', '나성동', '다정동', '대평동', '도담동', '반곡동', '보람동', '부강면', '새롬동', '소담동', '소정면', '아름동', '어진동', '연기면', '연동면', '연서면', '장군면', '전의면', '정동면', '조치원읍', '중촌동', '한솔동'],
    Gwangju: ['광주 전체', '광산구', '남구', '동구', '북구', '서구'],
    Ulsan: ['울산 전체', '남구', '동구', '북구', '울주군', '중구'],
    Gangwon: ['강원 전체', '강릉시', '고성군', '동해시', '삼척시', '속초시', '양구군', '양양군', '영월군', '원주시', '인제군', '정선군', '철원군', '춘천시', '태백시', '평창군', '홍천군', '화천군', '횡성군'],
    Gyungnam: ['경남 전체', '거제시', '거창군', '고성군', '김해시', '남해군', '밀양시', '사천시', '산청군', '양산시', '의령군', '진주시', '창녕군', '창원시 마산합포', '창원시 마산회원', '창원시 성산구', '창원시 의창구', '창원시 진해구', '통영시', '하동군', '함안군', '함양군', '합천군'],
    Gyungbuk: ['경북 전체', '경산시', '경주시', '고령군', '구미시', '군위군', '김천시', '문경시', '봉화군', '상주시', '성주군', '안동시', '영덕군', '영양군', '영주시', '영천시', '예천군', '울릉군', '울진군', '의성군', '청도군', '청송군', '칠곡군', '포항시 남구', '포항시 북구'],
    Jeonnam: ['전남 전체', '강진군', '고흥군', '곡성군', '광양시', '구례군', '나주시', '담양군', '목포시', '무안군', '보성군', '순천시', '신안군', '여수시', '영광군', '영암군', '완도군', '장성군', '장흥군', '진도군', '함평군', '해남군', '화순군'],
    Jeonbuk: ['전북 전체', '고창군', '군산시', '김제시', '남원시', '무주군', '부안군', '순창군', '완주군', '익산시', '임실군', '장수군', '전주시 덕진구', '전주시 완산구', '정읍시', '진안군'],
    Choongnam: ['충남 전체', '계룡시', '공주시', '금산군', '논산시', '당진시', '보령시', '부여군', '서산시', '서천군', '아산시', '연기군', '예산군', '천안시 동남구', '천안시 서북구', '청양군', '태안군', '홍성군'],
    Choongbuk: ['충북 전체', '괴산군', '단양군', '보은군', '영동군', '옥천군', '음성군', '제천시', '진천군', '청주시 서원구', '청주시 청원구', '청주시 상당구', '청주시 흥덕구', '충주시', '증평군'],
    Jeju: ['제주 전체', '남제주군', '북제주군', '서귀포시', '제주시'],
    Othercountry: ['해외 전체', '중국,홍콩', '미국', '일본', '아시아,중동', '북아메리카', '남아메리카', '유럽', '아프리카', '오세아니아', '그외']
}

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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="강남구">강남구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="강동구">강동구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="강북구">강북구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="강서구">강서구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="관악구">관악구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="광진구">광진구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="구로구">구로구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="금천구">금천구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={9} id="노원구">노원구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={10} id="도봉구">도봉구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={11} id="동대문구">동대문구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={12} id="동작구">동작구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={13} id="마포구">마포구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={14} id="서대문구">서대문구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={15} id="서초구">서초구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={16} id="성동구">성동구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={17} id="성북구">성북구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={18} id="송파구">송파구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={19} id="양천구">양천구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={20} id="영등포구">영등포구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={21} id="용산구">용산구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={22} id="은평구">은평구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={23} id="종로구">종로구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={24} id="중구">중구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={25} id="중랑구">중랑구</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="가평군">가평군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="고양시 덕양구">고양시 덕양구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="고양시 일산서구">고양시 일산서구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="고양시 일산동구">고양시 일산동구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="과천시">과천시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="광명시">광명시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="광주시">광주시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="구리시">구리시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={9} id="군포시">군포시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={10} id="김포시">김포시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={11} id="남양주시">남양주시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={12} id="동두천시">동두천시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={13} id="부천시">부천시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={14} id="성남시 분당구">성남시 분당구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={15} id="성남시 수정구">성남시 수정구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={16} id="성남시 중원구">성남시 중원구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={17} id="수원시 권선구">수원시 권선구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={18} id="수원시 장안구">수원시 장안구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={19} id="수원시 영통구">수원시 영통구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={20} id="수원시 팔달구">수원시 팔달구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={21} id="시흥시">시흥시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={22} id="안산시 상록구">안산시 상록구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={23} id="안산시 단원구">안산시 단원구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={24} id="안성시">안성시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={25} id="안양시 동안구">안양시 동안구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={26} id="안양시 만안구">안양시 만안구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={27} id="양주시">양주시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={28} id="양평군">양평군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={29} id="여주시">여주시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={30} id="연천군">연천군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={31} id="오산시">오산시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={32} id="용인시 기흥구">용인시 기흥구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={33} id="용인시 수지구">용인시 수지구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={34} id="용인시 처인구">용인시 처인구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={35} id="의왕시">의왕시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={36} id="의정부시">의정부시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={37} id="이천시">이천시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={38} id="파주시">파주시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={39} id="평택시">평택시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={40} id="포천시">포천시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={41} id="하남시">하남시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={42} id="화성시">화성시</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="강화군">강화군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="계양구">계양구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="미추홀구">미추홀구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="남동구">남동구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="동구">동구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="부평구">부평구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="서구">서구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="연수구">연수구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={9} id="옹진구">옹진구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={10} id="중구">중구</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="강서구">강서구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="금정구">금정구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="기장군">기장군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="남구">남구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="동구">동구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="동래구">동래구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="부산진구">부산진구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="북구">북구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={9} id="사상구">사상구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={10} id="사하구">사하구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={11} id="서구">서구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={12} id="수영구">수영구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={13} id="연제구">연제구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={14} id="영도구">영도구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={15} id="중구">중구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={16} id="해운대구">해운대구</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="남구">남구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="달서구">달서구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="달성군">달성군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="동구">동구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="북구">북구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="서구">서구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="수성구">수성구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="중구">중구</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="대덕구">대덕구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="동구">동구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="서구">서구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="유성구">유성구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="중구">중구</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="반곡동">반곡동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="소담동">소담동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="보람동">보람동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="대평동">대평동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="가람동">가람동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="한솔동">한솔동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="나성동">나성동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="새롬동">새롬동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={9} id="다정동">다정동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={10} id="어진동">어진동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={11} id="중촌동">중촌동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={12} id="아름동">아름동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={13} id="고운동">고운동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={14} id="도담동">도담동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={15} id="조치원읍">조치원읍</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={16} id="연기면">연기면</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={17} id="연동면">연동면</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={18} id="부강면">부강면</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={19} id="금남면">금남면</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={20} id="장군면">장군면</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={21} id="연서면">연서면</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={22} id="전의면">전의면</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={23} id="정동면">정동면</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={24} id="소정면">소정면</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="광산구">광산구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="남구">남구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="동구">동구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="북구">북구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="서구">서구</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="남구">남구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="동구">동구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="북구">북구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="울주군">울주군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="중구">중구</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="강릉시">강릉시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="고성군">고성군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="동해시">동해시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="삼척시">삼척시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="속초시">속초시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="양구군">양구군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="양양군">양양군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="영월군">영월군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={9} id="원주시">원주시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={10} id="인제군">인제군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={11} id="정선군">정선군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={12} id="철원군">철원군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={13} id="춘천시">춘천시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={14} id="태백시">태백시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={15} id="평창군">평창군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={16} id="홍천군">홍천군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={17} id="화천군">화천군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={18} id="횡성군">횡성군</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="거제시">거제시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="거창군">거창군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="고성군">고성군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="김해시">김해시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="남해군">남해군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="밀양시">밀양시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="사천시">사천시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="산청군">산청군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={9} id="양산시">양산시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={10} id="의령군">의령군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={11} id="진주시">진주시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={12} id="창녕군">창녕군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={13} id="창원시 마산합포">창원시 마산합포</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={14} id="창원시 마산회원">창원시 마산회원</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={15} id="창원시 성산구">창원시 성산구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={16} id="창원시 의창구">창원시 의창구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={17} id="창원시 진해구">창원시 진해구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={18} id="통영시">통영시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={19} id="하동군">하동군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={20} id="함안군">함안군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={21} id="함양군">함양군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={22} id="합천군">합천군</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="경산시">경산시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="경주시">경주시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="고령군">고령군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="구미시">구미시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="군위군">군위군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="김천시">김천시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="문경시">문경시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="봉화군">봉화군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={9} id="상주시">상주시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={10} id="성주군">성주군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={11} id="안동시">안동시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={12} id="영덕군">영덕군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={13} id="영양군">영양군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={14} id="영주시">영주시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={15} id="영천시">영천시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={16} id="예천군">예천군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={17} id="울릉군">울릉군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={18} id="울진군">울진군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={19} id="의성군">의성군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={20} id="청도군">청도군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={21} id="청송군">청송군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={22} id="칠곡군">칠곡군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={23} id="포항시 남구">포항시 남구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={24} id="포항시 북구">포항시 북구</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="강진군">강진군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="고흥군">고흥군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="곡성군">곡성군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="광양시">광양시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="구례군">구례군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="나주시">나주시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="담양군">담양군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="목포시">목포시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={9} id="무안군">무안군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={10} id="보성군">보성군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={11} id="순천시">순천시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={12} id="신안군">신안군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={13} id="여수시">여수시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={14} id="영광군">영광군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={15} id="영암군">영암군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={16} id="완도군">완도군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={17} id="장성군">장성군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={18} id="장흥군">장흥군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={19} id="진도군">진도군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={20} id="함평군">함평군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={21} id="해남군">해남군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={22} id="화순군">화순군</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="고창군">고창군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="군산시">군산시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="김제시">김제시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="남원시">남원시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="무주군">무주군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="부안군">부안군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="순창군">순창군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="완주군">완주군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={9} id="익산시">익산시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={10} id="임실군">임실군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={11} id="장수군">장수군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={12} id="전주시 덕진구">전주시 덕진구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={13} id="전주시 완산구">전주시 완산구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={14} id="정읍시">정읍시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={15} id="진안군">진안군</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="공주시">공주시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="금산군">금산군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="논산시">논산시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="당진시">당진시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="보령시">보령시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="부여군">부여군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="서산시">서산시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="서천군">서천군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={9} id="아산시">아산시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={10} id="연기군">연기군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={11} id="예산군">예산군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={12} id="천안시 동남구">천안시 동남구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={13} id="천안시 서북구">천안시 서북구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={14} id="청양군">청양군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={15} id="태안군">태안군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={16} id="홍성군">홍성군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={17} id="계룡시">계룡시</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="괴산군">괴산군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="단양군">단양군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="보은군">보은군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="영동군">영동군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="옥천군">옥천군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="음성군">음성군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="제천시">제천시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="진천군">진천군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={9} id="청주시 서원구">청주시 서원구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={10} id="청주시 청원구">청주시 청원구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={11} id="청주시 상당구">청주시 상당구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={12} id="청주시 흥덕구">청주시 흥덕구</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={13} id="충주시">충주시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={14} id="증평군">증평군</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="남제주군">남제주군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="북제주군">북제주군</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="서귀포시">서귀포시</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="제주시">제주시</ToggleButton>
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
                <ToggleButton className='togglebtn0' variant="outline-secondary" value={0} >전체</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={1} id="중국,홍콩">중국,홍콩</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={2} id="미국">미국</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={3} id="일본">일본</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={4} id="아시아,중동">아시아,중동</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={5} id="북아메리카">북아메리카</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={6} id="남아메리카">남아메리카</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={7} id="유럽">유럽</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={8} id="아프리카">아프리카</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={9} id="오세아니아">오세아니아</ToggleButton>
                <ToggleButton className='togglebtn' onChange={btnclicked} variant="outline-primary" value={10} id="그외">그외</ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
};