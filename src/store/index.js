import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore() {
  if (process.env.NODE_ENV === 'production') {
    return createStore(rootReducer);
  } else {
    return createStore(
      rootReducer,
      applyMiddleware(logger)
    )
  }
};
