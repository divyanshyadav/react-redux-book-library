import './textfield.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textfield extends Component {
    state = {
        errorMessage: '',
    };

    onChangeHandler = (e) => {
        const { name, model, onChange } = this.props;
        model[name] = e.target.value;

        if (onChange) {
            onChange(e.target.value);
        }
        this.validate();
        this.forceUpdate();
    };

    validate = () => {
        const { validators, model, name } = this.props;
        for (let i = 0; i < validators.length; i += 1) {
            const out = validators[i](model[name]);
            if (!out.pass) {
                this.setState({ errorMessage: out.errorMessage });
                return false;
            }
        }
        this.setState({ errorMessage: '' });
        return true;
    };

    focus = () => {
        this.textInput.focus();
    };

    render() {
        const {
            model, type, label, name, onChange, ...rest
        } = this.props;
        const { errorMessage } = this.state;

        const commonProps = {
            ref: (ref) => {
                this.textInput = ref;
            },
            className: 'textfield__text-input',
            value: model[name],
            onChange: this.onChangeHandler,
        };

        let textarea = null;
        if (type === 'textarea') {
            textarea = <textarea {...commonProps} rows={8} {...rest} />;
        }

        return (
            <>
                {label && (
                    <div className="textfield__label">
                        {label}
                        {' '}
                        <span className="textfield__error-message">{errorMessage}</span>
                    </div>
                )}
                {textarea || <input type={type} {...commonProps} {...rest} />}
            </>
        );
    }
}

Textfield.defaultProps = {
    type: 'text',
    label: '',
    onChange: null,
    validators: [],
};

Textfield.propTypes = {
    type: PropTypes.string,
    model: PropTypes.instanceOf(Object).isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func,
    validators: PropTypes.arrayOf(PropTypes.func),
};

export default Textfield;
