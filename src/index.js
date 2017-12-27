import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Board from './components/Board';
import board from './reducers/board';
import {ItemTypes} from './components/ItemTypes';
import {Colors} from './Colors';

let store = createStore(board);

let positions = [
    {
        color: Colors.BLACK,
        piece: ItemTypes.KNIGHT,
        position: [0, 0]
    }
];

ReactDOM.render(
    <Provider store={store}>
        <Board
            piecePositions={positions}
        />
    </Provider>,
    document.getElementById('root')
);