import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import myStore from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
