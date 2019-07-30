import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checked, notchecked } from '../../../actions';

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

export default btnclicked;