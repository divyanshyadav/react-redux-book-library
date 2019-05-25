import './bookList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import BookModel from '../../models/Book';

const BookList = ({ books, onBookDeleteClick, onBookEditClick }) => (
    <div className="book-list__container">
        {books.map(book => (
            <div className="book-list__book" key={book.id}>
                <div>
                    <h2>
                        <u>{book.name}</u>
                    </h2>
                    <h3>{`Author: ${book.author}`}</h3>
                    <p className="book-list__book__description">{book.description}</p>
                    <h5>{`Count: ${book.count}`}</h5>
                </div>
                <div>
                    <Button onClick={() => onBookEditClick(book.id)}>Edit</Button>
                    <Button onClick={() => onBookDeleteClick(book.id)}>Delete</Button>
                </div>
            </div>
        ))}
    </div>
);

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape(BookModel)).isRequired,
    onBookDeleteClick: PropTypes.func.isRequired,
    onBookEditClick: PropTypes.func.isRequired,
};

export default BookList;
