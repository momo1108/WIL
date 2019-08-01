import { combineReducers } from 'redux';
const localSelector = (state = {locals: []}, action) => {
    switch(action.type){
        case 'CHECKED':
            if(action.payload){
                var arr = state.locals;
                arr.push(action.payload);
                // console.log('checked.action.payload :',action.payload);
                // state.push(action.payload);
            	return {
                    ...state,
                    locals: arr
                    // ...state,
                    // localarray: statecopy
                };
            } else {
                // console.log('action.payload 없음');
                return state;
            }
        case 'NOTCHECKED':
            if(action.payload){
                // console.log('notchecked.action.payload :',action.payload);
                var arrnum = state.locals.indexOf(action.payload);
                // var arr = state.localarray;
                // arr.splice(arrnum, 1);
                var arr = state.locals;
                arr.splice(arrnum, 1);
            	return {
                    ...state,
                    locals: arr
                };
            	// return {
                //     ...state,
                //     localarray: arr
                // };
            } else {
                // console.log('action.payload 없음');
                return state;
            }
        default:
            // console.log('default인데?');
            return state;
    }
};

const rootReducer = combineReducers({
    selectedLocal: localSelector
});
export default rootReducer;