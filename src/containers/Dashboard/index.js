import './dashboard.css';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import actions from '../../actions';
import { getSearchedBooks } from '../../reducers';

import BookList from '../../components/BookList';
import Button from '../../components/Button';
import SearchBox from '../../components/SearchBox';

const Dashboard = (props) => {
    const {
        deleteBook, history, books, searchedText,
    } = props;
    return (
        <div className="dashboard__container">
            <h1>Book Library</h1>
            <Link to="/book">
                <Button className="dashboard__add-button">Add Book</Button>
            </Link>
            <SearchBox
                className="dashboard__search"
                placeholder="Search here(name/author)"
                value={searchedText}
                onSearchClick={(value) => {
                    history.push(value ? `/?search=${value}` : '/');
                }}
            />
            <BookList
                books={books}
                onBookEditClick={id => history.push(`/book/${id}`)}
                onBookDeleteClick={id => deleteBook(id)}
            />
        </div>
    );
};

const mapStateToProps = (state, { history, location }) => {
    const searchedText = new URLSearchParams(location.search).get('search') || '';
    return {
        location,
        books: getSearchedBooks(state, searchedText),
        history,
        searchedText,
    };
};

Dashboard.propTypes = {
    books: PropTypes.array.isRequired,
};

export default withRouter(
    connect(
        mapStateToProps,
        actions,
    )(Dashboard),
);
