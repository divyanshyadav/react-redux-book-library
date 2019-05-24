import './button.css';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, ...rest }) => (
    <button className={`button__container ${className}`} type="button" {...rest}>
        {children}
    </button>
);

Button.defaultProps = {
    className: '',
    children: null,
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Button;
