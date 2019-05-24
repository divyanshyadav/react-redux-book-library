const book = (state = {}, action) => {
    switch (action.type) {
    case 'ADD_BOOK':
    case 'UPDATE_BOOK':
        return {
            id: action.id,
            ...action.details,
        };
    default:
        return state;
    }
};

export default book;
