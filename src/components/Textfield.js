import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textfield extends Component {
    onChangeHandler = e => {
        const { name, model } = this.props;
        model[name] = e.target.value;
        this.forceUpdate();
    };

    render() {
        const { label, name, model, ...rest } = this.props;
        return (
            <div>
                <div>{label}</div>
                <input value={model[name]} onChange={this.onChangeHandler} type="text" {...rest} />
            </div>
        );
    }
}

Textfield.propTypes = {
    model: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Textfield;
