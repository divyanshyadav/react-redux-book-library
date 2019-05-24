import book from './book';

const books = (state = [], action) => {
    switch (action.type) {
    case 'ADD_BOOK':
        return [...state, book(undefined, action)];
    case 'UPDATE_BOOK':
        return state.map(b => book(b, action));
    case 'DELETE_BOOK':
        return state.filter(b => b.id !== action.id);
    default:
        return state;
    }
};

export default books;

export const getAllBooks = state => state;
export const getBook = (state, id) => state.find(b => b.id === id);
