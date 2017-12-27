import {MOVE_PIECE} from '../consts/types';
import {getPiecePositions} from '../util/util';

let positions = getPiecePositions();

const board = (state = positions, action) => {
    switch (action.type) {
        case MOVE_PIECE:
            return [
                ...state
            ]
    }
    return state;
};

export default board;