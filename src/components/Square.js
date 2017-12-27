import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Square extends Component {
    render() {
        const { black } = this.props;
        const fill = black ? 'rgb(109, 88, 64)' : 'rgb(216, 180, 140)';

        return (
            <div style={{
                backgroundColor: fill,
                width: '100%',
                height: '50px'
            }}>
                {this.props.children}
            </div>
        );
    }
}

Square.propTypes = {
    black: PropTypes.bool
};