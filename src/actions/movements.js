import {MOVE_PIECE, REMOVE_PIECE} from '../consts/types';

export const movePiece = (from, to) => {
    return {
        type: MOVE_PIECE,
        from,
        to
    }
};

export const removePiece = (x, y) => {
    return {
        type: REMOVE_PIECE,
        x,
        y
    }
};