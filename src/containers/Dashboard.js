import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../actions';
import { getAllBooks } from '../reducers';

import Button from '../components/Button';

const Dashboard = ({ books, ...rest }) => (
    <div>
        <Link to="/book">
            <Button>Add Book</Button>
        </Link>
        <ul>
            {books.map(book => (
                <li key={book.id}>
                    <pre>{JSON.stringify(book, null, 4)}</pre>
                    <Link to={`/book/${book.id}`}>
                        <Button>Edit</Button>
                    </Link>
                    <Button onClick={() => rest.deleteBook(book.id)}>Delete</Button>
                </li>
            ))}
        </ul>
    </div>
);

Dashboard.propTypes = {
    books: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    books: getAllBooks(state),
});

export default connect(
    mapStateToProps,
    actions,
)(Dashboard);
