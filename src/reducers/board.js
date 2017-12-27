import {MOVE_PIECE} from '../consts/types';
import {getPiecePositions} from '../util/util';

let positions = {
    positions: getPiecePositions()
};

function copyState(state) {
    return Object.assign({}, state);
}

const board = (state = positions, action) => {
    switch (action.type) {
        case MOVE_PIECE:
            let stateCopy = copyState(state);
            let [fromX, fromY] = action.from;
            let positions = stateCopy.positions;

            let movedPositions = positions.map(piece => {
                let [x, y] = piece.position;
                if (x === fromX && y === fromY) {
                    piece.position = action.to;
                }
                return piece;
            });
            return Object.assign({}, state, {
                positions: [
                    ...movedPositions
                ]
            });
        default:
            return state;
    }
};

export default board;