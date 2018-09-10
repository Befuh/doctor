import thunk from 'redux-thunk';
import patients from '../reducers/patients';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(
  combineReducers({ patients }),
  composeEnhancers(applyMiddleware(thunk))
);
