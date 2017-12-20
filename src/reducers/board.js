import {MOVE_PIECE} from '../types';

const board = (state = [], action) => {
    switch (action.type) {
        case MOVE_PIECE:
            return [
                ...state
            ]
    }
};

export default board;