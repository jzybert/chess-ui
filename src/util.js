import {ItemTypes} from './components/ItemTypes';
import {Colors} from './Colors';

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

export function getPiecePositions() {
    return [
        {
            piece: ItemTypes.ROOK,
            color: Colors.BLACK,
            position: [0, 0]
        },
        {
            piece: ItemTypes.KNIGHT,
            color: Colors.BLACK,
            position: [1, 0]
        },
        {
            piece: ItemTypes.BISHOP,
            color: Colors.BLACK,
            position: [2, 0]
        },
        {
            piece: ItemTypes.QUEEN,
            color: Colors.BLACK,
            position: [3, 0]
        },
        {
            piece: ItemTypes.KING,
            color: Colors.BLACK,
            position: [4, 0]
        },
        {
            piece: ItemTypes.BISHOP,
            color: Colors.BLACK,
            position: [5, 0]
        },
        {
            piece: ItemTypes.KNIGHT,
            color: Colors.BLACK,
            position: [6, 0]
        },
        {
            piece: ItemTypes.ROOK,
            color: Colors.BLACK,
            position: [7, 0]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.BLACK,
            position: [0, 1]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.BLACK,
            position: [1, 1]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.BLACK,
            position: [2, 1]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.BLACK,
            position: [3, 1]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.BLACK,
            position: [4, 1]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.BLACK,
            position: [5, 1]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.BLACK,
            position: [6, 1]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.BLACK,
            position: [7, 1]
        },
        {
            piece: ItemTypes.ROOK,
            color: Colors.WHITE,
            position: [0, 7]
        },
        {
            piece: ItemTypes.KNIGHT,
            color: Colors.WHITE,
            position: [1, 7]
        },
        {
            piece: ItemTypes.BISHOP,
            color: Colors.WHITE,
            position: [2, 7]
        },
        {
            piece: ItemTypes.QUEEN,
            color: Colors.WHITE,
            position: [3, 7]
        },
        {
            piece: ItemTypes.KING,
            color: Colors.WHITE,
            position: [4, 7]
        },
        {
            piece: ItemTypes.BISHOP,
            color: Colors.WHITE,
            position: [5, 7]
        },
        {
            piece: ItemTypes.KNIGHT,
            color: Colors.WHITE,
            position: [6, 7]
        },
        {
            piece: ItemTypes.ROOK,
            color: Colors.WHITE,
            position: [7, 7]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.WHITE,
            position: [0, 6]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.WHITE,
            position: [1, 6]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.WHITE,
            position: [2, 6]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.WHITE,
            position: [3, 6]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.WHITE,
            position: [4, 6]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.WHITE,
            position: [5, 6]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.WHITE,
            position: [6, 6]
        },
        {
            piece: ItemTypes.PAWN,
            color: Colors.WHITE,
            position: [7, 6]
        },
    ];
}