import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';
import * as localStorage from './utils/localStorage';

const configureStore = () => {
    const persistentState = localStorage.get('book_library');
    const middlewares = [];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(logger);
    }

    const store = createStore(reducer, persistentState, applyMiddleware(...middlewares));

    store.subscribe(() => {
        localStorage.set('book_library', store.getState());
    });

    return store;
};

export default configureStore;
