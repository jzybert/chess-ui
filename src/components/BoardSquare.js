import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DropTarget} from 'react-dnd';
import PropTypes from 'prop-types';
import Square from './Square';
import {ItemTypes} from '../consts/ItemTypes';
import {movePiece, removePiece} from '../actions/movements';
import fetch from 'isomorphic-fetch'

const squareTarget = {
    canDrop(props) {
        return true;
    },

    drop(props, monitor) {
        let piece = monitor.getItem();
        let data = new FormData();
        data.append('test', 5);
        fetch('http://127.0.0.1:5000/can_move', {
            method: 'POST',
            body: data
        }).then(response => {
            return response.json();
        }).then(myJson => {
            props.removePiece(props.x, props.y);
            props.movePiece([piece.x, piece.y], [props.x, props.y]);
        });
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

class BoardSquare extends Component {
    render() {
        const {x, y, connectDropTarget} = this.props;
        const black = (x + y) % 2 === 1;

        return connectDropTarget(
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}>
                <Square black={black}>
                    {this.props.children}
                </Square>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        movePiece(from, to) {
            dispatch(movePiece(from, to))
        },
        removePiece(x, y) {
            dispatch(removePiece(x, y))
        }
    }
};

BoardSquare.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    connectDropTarget: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)
(DropTarget(ItemTypes.PIECE, squareTarget, collect)(BoardSquare));
