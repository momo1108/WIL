const localSelector = (state = [], action) => {
    switch(action.type){
        case 'NOTCHECKED':
            if(action.payload){
                state.push(action.payload)
            	return state;    
            } else {
                return state;
            }
        case 'CHECKED':
            if(action.payload){
            	return state - action.payload;    
            } else {
                return state - 1;
            }
        default:
            return state;
    }
};