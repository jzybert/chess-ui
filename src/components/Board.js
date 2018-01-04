import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';
import Piece from './Piece';
import {Colors} from '../consts/colors';

class Board extends Component {
    renderSquare(index) {
        if (this.props.piecePositions) {
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
                     style={{width: '50px', height: '50px'}}>
                    <BoardSquare x={x} y={y}>
                        {this.renderPiece(x, y, pieceType, isBlack)}
                    </BoardSquare>
                </div>
            );
        }
    }

    renderPiece(x, y, pieceType, isBlack) {
        if (pieceType !== 0) {
            return (
                <Piece x={x} y={y}
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
                width: '400px',
                height: '400px',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {squares}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        piecePositions: state.positions
    }
};

export default connect(mapStateToProps, null)(DragDropContext(HTML5Backend)(Board));