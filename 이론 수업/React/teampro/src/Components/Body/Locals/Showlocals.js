import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function Showlocals() {
    var slocal = useSelector(state=>state.selectedLocal);
    console.log(slocal);
    return (
        <div>
            {slocal}
        </div>
    );
}
