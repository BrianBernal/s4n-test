import { createStore, compose } from 'redux';
import rootReducer from './rootReducer';

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
