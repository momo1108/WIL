const localSelector = (state = [], action) => {
    switch(action.type){
        case 'CHECKED':
            if(action.payload){
                state.push(action.payload);
            	return state;    
            } else {
                return state;
            }
        case 'NOTCHECKED':
            if(action.payload){
                var arrnum = state.indexOf(action.payload);
                state.splice(arrnum, 1);
            	return state;
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default localSelector;