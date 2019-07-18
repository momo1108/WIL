import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './TodoList'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <TodoList />,
    document.querySelector('#container')
)
serviceWorker.unregister();
