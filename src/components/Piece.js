import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import PropTypes from 'prop-types';
import {ItemTypes} from '../consts/ItemTypes';
import {getIcon} from '../util/util';

const pieceSource = {
    beginDrag(props) {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Piece extends Component {
    render() {
        const {connectDragSource, isDragging, isBlack, pieceType} = this.props;
        let icon = getIcon(pieceType, isBlack);
        let piece = <span>{icon}</span>;
        return connectDragSource(
            <div style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move'
            }}>
                {piece}
            </div>
        );
    }
}

Piece.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    isBlack: PropTypes.bool.isRequired,
    pieceType: PropTypes.string.isRequired
};

export default DragSource(ItemTypes.PIECE, pieceSource, collect)(Piece);