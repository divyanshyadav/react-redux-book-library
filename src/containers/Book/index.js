import './book.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../../actions';
import { getBook } from '../../reducers';

import Textfield from '../../components/Textfield';
import Button from '../../components/Button';
import BookModel from '../../models/Book';
import validators from '../../utils/validators';

class Book extends React.Component {
    inputRefs = {};

    handleSubmit = () => {
        const {
            model, addBook, updateBook, isUpdate, history,
        } = this.props;

        if (!this.validate()) {
            return;
        }

        if (isUpdate) {
            updateBook(model);
        } else {
            addBook(model);
        }

        history.push('/');
    };

    validate = () => {
        const inputs = Object.values(this.inputRefs);
        for (let i = 0; i < inputs.length; i += 1) {
            const input = inputs[i];
            if (!input.validate()) {
                input.focus();
                return false;
            }
        }
        return true;
    };

    render() {
        const { model, isUpdate } = this.props;
        const submitButtonText = isUpdate ? 'Update' : 'Add';

        return (
            <div className="book-screen__container">
                <h1>Book Details</h1>
                <Textfield
                    ref={(ref) => {
                        if (ref) {
                            this.inputRefs[ref.props.name] = ref;
                        }
                    }}
                    name="name"
                    model={model}
                    label="Name"
                    placeholder="The Alchemist"
                    validators={[validators.required, validators.max50Char]}
                />
                <Textfield
                    ref={(ref) => {
                        if (ref) {
                            this.inputRefs[ref.props.name] = ref;
                        }
                    }}
                    name="author"
                    model={model}
                    label="Author"
                    placeholder="Paulo Coelho"
                    validators={[validators.required, validators.max50Char]}
                />
                <Textfield
                    ref={(ref) => {
                        if (ref) {
                            this.inputRefs[ref.props.name] = ref;
                        }
                    }}
                    name="description"
                    model={model}
                    label="Description"
                    type="textarea"
                    placeholder="The Alchemist by Paulo Coelho continues to change the lives of its readers forever. With more than two million copies sold around the world, The Alchemist has established itself as a modern classic, universally admired"
                    validators={[validators.max500Char]}
                />
                <Textfield
                    ref={(ref) => {
                        if (ref) {
                            this.inputRefs[ref.props.name] = ref;
                        }
                    }}
                    name="count"
                    model={model}
                    type="number"
                    label="Count"
                />
                <Button onClick={this.handleSubmit}>{submitButtonText}</Button>
            </div>
        );
    }
}

const mapStateToProps = (state, { history, match: { params } }) => {
    const book = getBook(state, params.id);
    return {
        isUpdate: book !== undefined,
        model: book || new BookModel(),
        history,
    };
};

Book.propTypes = {
    isUpdate: PropTypes.bool.isRequired,
    model: PropTypes.shape(BookModel).isRequired,
    updateBook: PropTypes.func.isRequired,
    addBook: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default withRouter(
    connect(
        mapStateToProps,
        actions,
    )(Book),
);
