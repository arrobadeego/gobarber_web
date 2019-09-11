import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createStore } from 'redux';

export default (reducers, middlewares) => {
    return createStore(reducers, middlewares);
};
