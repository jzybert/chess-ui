import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Board from './components/Board';
import board from './reducers/board';

let store = createStore(board);

ReactDOM.render(
    <Provider store={store}>
        <Board />
    </Provider>,
    document.getElementById('root')
);

document.getElementsByTagName('body')[0].style.backgroundColor = '#333333';