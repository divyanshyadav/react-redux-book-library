import './loading.css';
import React from 'react';
import PropTypes from 'prop-types';

const spinner = require('./spinner.gif');

const Loading = ({ show }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="loading__container">
            <img style={{ width: '100px' }} src={spinner} alt="spinner" />
        </div>
    );
};

Loading.defaultProps = {
    show: false,
};

Loading.propTypes = {
    show: PropTypes.bool,
};

export default Loading;
