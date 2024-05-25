import React from 'react'
import PropTypes from 'prop-types';
import './divider.css'
const Divider = ({ width, height, color, direction, thickness }) => {

    const style = {
        width: direction === 'horizontal' ? width : thickness,
        height: direction === 'vertical' ? height : thickness,
        backgroundColor: color,
    };

    return (
        <div className={`component-divider ${direction}`} style={style}></div>
    )
}

Divider.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    thickness: PropTypes.string,
};

Divider.defaultProps = {
    width: '100%',
    height: '1px',
    color: '#000',
    direction: 'horizontal',
    thickness: '1px',
};

export default Divider