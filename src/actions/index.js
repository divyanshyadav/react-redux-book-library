import bookApi from '../api/model/bookClient';

const fetchBooks = searchText => (dispatch) => {
    dispatch({
        type: 'FETCH_BOOK_REQUEST',
    });

    bookApi.search(searchText).then(
        (response) => {
            dispatch({
                type: 'FETCH_BOOK_SUCCESS',
                response,
            });
        },
        (error) => {
            dispatch({
                type: 'FETCH_BOOK_FAILURE',
                error,
            });
        },
    );
};

const fetchBook = id => dispatch => bookApi.getById(id).then((response) => {
    dispatch({
        type: 'FETCH_BOOK_BY_ID_SUCCESS',
        response,
    });
});

const addBook = details => dispatch => bookApi.create(details).then((response) => {
    dispatch({
        type: 'ADD_BOOK',
        response,
    });
});

const updateBook = details => dispatch => bookApi.updateById(details.id, details).then((response) => {
    dispatch({
        type: 'UPDATE_TODO',
        response,
    });
});

const deleteBook = id => dispatch => bookApi.deleteById(id).then((response) => {
    dispatch({
        type: 'DELETE_BOOK',
        response,
    });
});

export default {
    fetchBook,
    fetchBooks,
    addBook,
    updateBook,
    deleteBook,
};
