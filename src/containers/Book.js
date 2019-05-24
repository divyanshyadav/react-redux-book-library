import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBook } from '../reducers';
import actions from '../actions';

import Textfield from '../components/Textfield';
import Button from '../components/Button';
import BookModel from '../models/Book';

class Book extends React.Component {
    handleSubmit = e => {
        const { addBook, history, model, updateBook, isUpdate } = this.props;

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
            <div>
                <Textfield label="Name" name="name" model={model} />
                <Textfield label="Author" name="author" model={model} />
                <Textfield label="Description" name="description" model={model} />
                <Textfield label="Count" name="count" model={model} />
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

export default withRouter(
    connect(
        mapStateToProps,
        actions,
    )(Book),
);
