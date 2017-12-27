import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Board from './components/Board';
import board from './reducers/board';
import {getPiecePositions} from './util/util';

let store = createStore(board);

let positions = getPiecePositions();

ReactDOM.render(
    <Provider store={store}>
        <Board
            piecePositions={positions}
        />
    </Provider>,
    document.getElementById('root')
);