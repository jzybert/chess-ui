import {MOVE_PIECE, REMOVE_PIECE} from '../consts/types';
import {getPiecePositions} from '../util/util';

let initialState = {
    positions: getPiecePositions(),
    capturedPieces: []
};

function copyState(state) {
    return Object.assign({}, state);
}

const board = (state = initialState, action) => {
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
            let captured = stateCopy.capturedPieces;

            let pieceIndex = positions.findIndex(piece => {
                let [x, y] = piece.position;
                return x === action.x && y === action.y;
            });
            if (pieceIndex !== -1) {
                captured.push(positions.splice(pieceIndex, 1));
                console.log(stateCopy);
                return Object.assign({}, state, {
                    positions: [
                        ...positions
                    ],
                    capturedPieces: [
                        ...captured
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