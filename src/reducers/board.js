import {MOVE_PIECE, REMOVE_PIECE} from '../consts/types';
import {getPiecePositions} from '../util/util';

let positions = {
    positions: getPiecePositions()
};

function copyState(state) {
    return Object.assign({}, state);
}

const board = (state = positions, action) => {
    switch (action.type) {
        case MOVE_PIECE: {
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
        }
        case REMOVE_PIECE: {
            let stateCopy = copyState(state);
            let positions = stateCopy.positions;

            let pieceIndex = positions.findIndex(piece => {
                let [x, y] = piece.position;
                return x === action.x && y === action.y;
            });
            if (pieceIndex !== -1) {
                positions.splice(pieceIndex, 1);
                return Object.assign({}, state, {
                    positions: [
                        ...positions
                    ]
                });
            } else {
                return state;
            }
        }
        default:
            return state;
    }
};

export default board;