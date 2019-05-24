import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textfield extends Component {
    onChangeHandler = e => {
        const { name, model } = this.props;
        model[name] = e.target.value;
        this.forceUpdate();
    };

    render() {
        const { label, name, model, onChange, style, ...rest } = this.props;
        return (
            <div style={style}>
                {label && <div>{label}</div>}
                <input
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
