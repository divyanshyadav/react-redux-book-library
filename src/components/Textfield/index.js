import './textfield.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textfield extends Component {
    onChangeHandler = e => {
        const { name, model } = this.props;
        model[name] = e.target.value;
        this.forceUpdate();
    };

    render() {
        const { label, name, model, onChange, ...rest } = this.props;
        return (
            <div>
                {label && <div>{label}</div>}
                <input
                    className="textfield__text-input"
                    value={model[name]}
                    onChange={e => {
                        if (onChange) {
                            onChange(e.target.value);
                        }
                        this.onChangeHandler(e);
                    }}
                    type="text"
                    {...rest}
                />
            </div>
        );
    }
}

Textfield.propTypes = {
    model: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
};

export default Textfield;
