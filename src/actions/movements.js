import {MOVE_PIECE} from '../consts/types';

export const movePiece = (from, to) => {
    return {
        type: MOVE_PIECE,
        from,
        to
    }
};
