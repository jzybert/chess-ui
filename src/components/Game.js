let knightPosition = [0, 0];
let observer = null;

function emitChange() {
    observer(knightPosition);
}

export function observe(o) {
    if (observer) {
        throw new Error('Multiple observers not implemented.');
    }

    observer = o;
    emitChange();
}

export function movePiece(fromX, fromY, toX, toY) {

}

export function moveKnight(toX, toY) {
    knightPosition = [toX, toY];
    emitChange();
}

export function canMoveKnight(toX, toY) {
    const [x, y] = knightPosition;
    const dx = toX - x;
    const dy = toY - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
           (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

export function canMoveBishop(toX, toY) {
    const [x, y] = bishopPosition;
    const dx = toX - x;
    const dy = toY - y;

    return Math.abs(dx) === Math.abs(dy);
}

export function canMoveRook(toX, toY) {
    const [x, y] = rookPosition;

    return x === toX || y === toY;
}

export function canMoveQueen(toX, toY) {
    const [x, y] = queenPosition;
    const dx = toX - x;
    const dy = toY - y;

    return x === toX || y === toY || Math.abs(dx) === Math.abs(dy);
}

export function canMovePawn(toX, toY) {

}

export function canMoveKing(toX, toY) {

}
