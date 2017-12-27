import {MOVE_PIECE} from '../consts/types';

export const movePiece = (piece, color) => {
    return {
        type: MOVE_PIECE,
        piece,
        color
    }
};
