import './loading.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LOADING_MESSAGE = 'Loading';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.dots = 0;
    }

    state = {
        loadingMessage: LOADING_MESSAGE,
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.dots += 1;
            this.setState({
                loadingMessage: LOADING_MESSAGE + '.'.repeat(this.dots % 4),
            });
        }, 200);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { show } = this.props;
        const { loadingMessage } = this.state;
        if (!show) {
            return null;
        }

        return (
            <div className="loading__container">
                <h1 className="loading__container__message">{loadingMessage}</h1>
            </div>
        );
    }
}

Loading.defaultProps = {
    show: false,
};

Loading.propTypes = {
    show: PropTypes.bool,
};

export default Loading;
