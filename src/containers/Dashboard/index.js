import './dashboard.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../actions';
import { getAllBooks, getSearchedBooks } from '../../reducers';

import BookList from '../../components/BookList';
import Button from '../../components/Button';
import SearchBox from '../../components/SearchBox';

class Dashboard extends Component {
    state = {
        books: [],
        searchedText: '',
    };

    componentDidMount() {
        this.setState({
            books: this.props.allBooks,
        });
    }

    componentDidUpdate(props) {
        if (this.props.allBooks !== props.allBooks) {
            this.setState({
                books: getSearchedBooks(this.props.allBooks, this.state.searchedText),
            });
        }
    }

    render() {
        const { deleteBook, history } = this.props;
        const { books } = this.state;
        return (
            <div className="dashboard__container">
                <h1>Book Library</h1>
                <Link to="/book">
                    <Button className="dashboard__add-button">Add Book</Button>
                </Link>
                <SearchBox
                    className="dashboard__search"
                    placeholder={'Search here(name/author)'}
                    onSearchClick={value => {
                        this.setState({
                            searchedText: value,
                            books: getSearchedBooks(this.props.allBooks, value),
                        });
                    }}
                />
                <BookList
                    books={books}
                    onBookEditClick={id => history.push(`/book/${id}`)}
                    onBookDeleteClick={id => deleteBook(id)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, { history }) => ({
    allBooks: getAllBooks(state),
    history,
});

export default withRouter(
    connect(
        mapStateToProps,
        actions,
    )(Dashboard),
);

Dashboard.propTypes = {
    allBooks: PropTypes.array.isRequired,
};
