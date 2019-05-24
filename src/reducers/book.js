const book = (state = {}, action) => {
    switch (action.type) {
    case 'ADD_BOOK':
        return { ...action.details };
    case 'UPDATE_BOOK':
        if (state.id === action.details.id) {
            return { ...action.details };
        }
        return state;
    default:
        return state;
    }
};

export default book;
