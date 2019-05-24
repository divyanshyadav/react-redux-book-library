import { v4 } from 'node-uuid';

const addBook = details => ({
    type: 'ADD_BOOK',
    id: v4(),
    details,
});

const updateBook = (id, details) => ({
    type: 'UPDATE_BOOK',
    id,
    details,
});

const deleteBook = id => ({
    type: 'DELETE_BOOK',
    id,
});

export default {
    addBook,
    updateBook,
    deleteBook,
};
