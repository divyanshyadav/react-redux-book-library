import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../actions';
import { getAllBooks, getSearchedBooks } from '../reducers';

import Button from '../components/Button';
import SearchBox from '../components/SearchBox';

class Dashboard extends Component {
    state = {
        books: [],
    };
    searchModel = { search: '' };
    componentDidMount() {
        this.setState({
            books: this.props.allBooks,
        });
    }
    render() {
        const { deleteBook } = this.props;
        const { books } = this.state;
        return (
            <div>
                <Link to="/book">
                    <Button style={{ marginBottom: 0 }}>Add Book</Button>
                </Link>
                <SearchBox
                    placeholder={'Search here(name/author)'}
                    onSearchClick={value => {
                        this.setState({
                            books: getSearchedBooks(this.props.allBooks, value),
                        });
                    }}
                />
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            <pre>{JSON.stringify(book, null, 4)}</pre>
                            <Link to={`/book/${book.id}`}>
                                <Button>Edit</Button>
                            </Link>
                            <Button onClick={() => deleteBook(book.id)}>Delete</Button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

Dashboard.propTypes = {
    allBooks: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    allBooks: getAllBooks(state),
});

export default connect(
    mapStateToProps,
    actions,
)(Dashboard);
