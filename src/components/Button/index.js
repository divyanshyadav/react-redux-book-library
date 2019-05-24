import './button.css';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, ...rest }) => (
    <button className="button__container" type="button" {...rest}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Button;
