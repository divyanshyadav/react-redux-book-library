import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';

const configureStore = () => {
    const middlewares = [];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(logger);
    }

    return createStore(reducer, applyMiddleware(...middlewares));
};

export default configureStore;
