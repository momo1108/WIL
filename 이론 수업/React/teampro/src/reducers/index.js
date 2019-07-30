import { combineReducers } from 'redux';

const localSelector = (state = [], action) => {
    switch(action.type){
        case 'CHECKED':
            if(action.payload){
                console.log('checked.action.payload :',action.payload);
                state.push(action.payload);
            	return state;    
            } else {
                console.log('action.payload 없음');
                return state;
            }
        case 'NOTCHECKED':
            if(action.payload){
                console.log('notchecked.action.payload :',action.payload);
                var arrnum = state.indexOf(action.payload);
                state.splice(arrnum, 1);
            	return state;
            } else {
                console.log('action.payload 없음');
                return state;
            }
        default:
            console.log('default인데?');
            return state;
    }
};

const rootReducer = combineReducers({
    selectedLocal: localSelector
});
export default rootReducer;