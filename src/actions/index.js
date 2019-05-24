const addBook = details => ({
    type: 'ADD_BOOK',
    details,
});

const updateBook = details => ({
    type: 'UPDATE_BOOK',
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
