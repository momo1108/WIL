import { createStore } from 'redux';
import localSelector from './reducers';

const myStore = createStore(
    localSelector,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default myStore;