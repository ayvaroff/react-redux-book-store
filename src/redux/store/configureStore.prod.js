import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../saga';
import rootReducer from '../reducers';

const enhancer = applyMiddleware(sagaMiddleware);
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
}