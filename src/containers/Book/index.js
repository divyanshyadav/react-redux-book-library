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

class Book extends React.Component {
    handleSubmit = () => {
        const {
            model, addBook, updateBook, isUpdate, history,
        } = this.props;

        if (isUpdate) {
            updateBook(model);
        } else {
            addBook(model);
        }

        history.push('/');
    };

    render() {
        const { model, isUpdate } = this.props;
        const submitButtonText = isUpdate ? 'Update' : 'Add';

        return (
            <div className="book-screen__container">
                <h1>Book Details</h1>
                <Textfield label="Name" name="name" model={model} placeholder="The Alchemist" />
                <Textfield label="Author" name="author" model={model} placeholder="Paulo Coelho" />
                <Textfield
                    label="Description"
                    name="description"
                    model={model}
                    placeholder="The Alchemist by Paulo Coelho continues to change the lives of its readers forever. With more than two million copies sold around the world, The Alchemist has established itself as a modern classic, universally admired"
                />
                <Textfield label="Count" name="count" model={model} type="number" />
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
