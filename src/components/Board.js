import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import BoardSquare from './BoardSquare';
import Piece from './Piece';
import {Colors} from '../consts/colors';

class Board extends Component {
    renderSquare(index) {
        const x = index % 8;
        const y = Math.floor(index / 8);

        let pieceType = 0;
        let isBlack = true;
        for (let i = 0; i < this.props.piecePositions.length; i++) {
            const [pieceX, pieceY] = this.props.piecePositions[i].position;
            if (pieceX === x && pieceY === y) {
                pieceType = this.props.piecePositions[i].piece;
                isBlack = this.props.piecePositions[i].color === Colors.BLACK;
                break;
            }
        }

        return (
            <div key={index}
                 style={{ width: '12.5%', height: '12.5%' }}>
                <BoardSquare x={x} y={y}>
                    {this.renderPiece(pieceType, isBlack)}
                </BoardSquare>
            </div>
        );
    }

    renderPiece(pieceType, isBlack) {
        if (pieceType !== 0) {
            return (
                <Piece
                    isBlack={isBlack}
                    pieceType={pieceType}
                />
            );
        }
    }

    render() {
        const squares = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }

        return (
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {squares}
            </div>
        );
    }
}

Board.propTypes = {
    piecePositions: PropTypes.arrayOf(PropTypes.object).isRequired

};

export default DragDropContext(HTML5Backend)(Board);