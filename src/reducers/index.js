/* eslint-disable no-case-declarations */
import { combineReducers } from 'redux';

const books = (state = {}, action) => {
    switch (action.type) {
    case 'FETCH_BOOK_SUCCESS':
        return action.response.reduce((acc, next) => {
            acc[next.id] = next;
            return acc;
        }, {});
    case 'FETCH_BOOK_BY_ID_SUCCESS':
    case 'ADD_BOOK':
    case 'UPDATE_BOOK':
        return {
            [action.response.id]: action.response,
            ...state,
        };
    case 'DELETE_BOOK':
        const nextState = { ...state };
        delete nextState[action.response.id];
        return nextState;
    default:
        return state;
    }
};

const loading = (state = false, action) => {
    switch (action.type) {
    case 'FETCH_BOOK_SUCCESS':
        return false;
    case 'FETCH_BOOK_REQUEST':
        return true;
    case 'FETCH_BOOK_FAILURE':
        return false;
    default:
        return state;
    }
};

const error = (state = '', action) => {
    switch (action.type) {
    case 'FETCH_BOOK_SUCCESS':
        return '';
    case 'FETCH_BOOK_REQUEST':
        return '';
    case 'FETCH_BOOK_FAILURE':
        return action.error.message;
    default:
        return state;
    }
};

export default combineReducers({
    books,
    loading,
    error,
});

export const getAllBooks = state => Object.values(state.books);
export const getBook = (state, id) => state.books[id];
export const isLoading = state => state.loading;
export const getErrorMessage = state => state.error;
