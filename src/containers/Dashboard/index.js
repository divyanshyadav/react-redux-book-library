import './dashboard.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import actions from '../../actions';
import { getAllBooks, isLoading, getErrorMessage } from '../../reducers';

import BookModel from '../../models/Book';

import BookList from '../../components/BookList';
import Button from '../../components/Button';
import SearchBox from '../../components/SearchBox';
import Loading from '../../components/Loading';

class Dashboard extends Component {
    componentDidMount() {
        const { fetchBooks, searchedText } = this.props;
        fetchBooks(searchedText);
    }

    render() {
        const {
            books, searchedText, deleteBook, history, fetchBooks, loading, error,
        } = this.props;
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
                        fetchBooks(value);
                        history.push(value ? `/?search=${value}` : '/');
                    }}
                />
                <BookList
                    books={books}
                    onBookEditClick={id => history.push(`/book/${id}`)}
                    onBookDeleteClick={id => deleteBook(id)}
                />
                <Loading show={loading} />
                <span>{error}</span>
            </div>
        );
    }
}

const mapStateToProps = (state, { history, location }) => {
    const searchedText = new URLSearchParams(location.search).get('search') || '';
    return {
        books: getAllBooks(state).reverse(),
        searchedText,
        history,
        loading: isLoading(state),
        error: getErrorMessage(state),
    };
};

Dashboard.defaultProps = {
    searchedText: '',
};

Dashboard.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape(BookModel)).isRequired,
    searchedText: PropTypes.string,
    deleteBook: PropTypes.func.isRequired,
    fetchBooks: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
};

export default withRouter(
    connect(
        mapStateToProps,
        actions,
    )(Dashboard),
);
