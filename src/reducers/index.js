/* eslint-disable no-case-declarations */

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

export default books;

export const getAllBooks = state => Object.values(state);
export const getBook = (state, id) => state[id];
