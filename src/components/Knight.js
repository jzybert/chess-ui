import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import PropTypes from 'prop-types';
import {ItemTypes} from './ItemTypes';

const knightSource = {
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

class Knight extends Component {
    render() {
        const {connectDragSource, isDragging, isBlack} = this.props;
        let knight = isBlack ? <span>♞</span> : <span>♘</span>;
        return connectDragSource(
            <div style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move'
            }}>
                {knight}
            </div>
        );
    }
}

Knight.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    isBlack: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);