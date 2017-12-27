import {ItemTypes} from './components/ItemTypes';

export function getIcon(pieceType, isBlack) {
    if (isBlack) {
        switch (pieceType) {
            case ItemTypes.KING:
                return '♚';
            case ItemTypes.QUEEN:
                return '♛';
            case ItemTypes.ROOK:
                return '♜';
            case ItemTypes.BISHOP:
                return '♝';
            case ItemTypes.KNIGHT:
                return '♞';
            case ItemTypes.PAWN:
                return '♟';
        }
    } else {
        switch (pieceType) {
            case ItemTypes.KING:
                return '♔';
            case ItemTypes.QUEEN:
                return '♕';
            case ItemTypes.ROOK:
                return '♖';
            case ItemTypes.BISHOP:
                return '♗';
            case ItemTypes.KNIGHT:
                return '♘';
            case ItemTypes.PAWN:
                return '♙';
        }
    }
}