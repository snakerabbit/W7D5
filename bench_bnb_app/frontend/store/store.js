// import {thunk, logger } from 'redux';
// import applyMiddleware from 'redux';
import createStore from 'redux';
import grootReducer from '../reducers/groot_reducer';

const configureStore = (preLoadedState = {}) => (
    createStore(
      grootReducer
      // preLoadedState,
      // applyMiddleware(thunk, logger)
    )
);

export default configureStore;
