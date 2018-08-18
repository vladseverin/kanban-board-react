import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import { loadState, saveState } from '../utils/localStorage';

const persistState = loadState();

export default function configureStore() {
  if (process.env.NODE_ENV === 'production') {
    return createStore(rootReducer, persistState);
  }

  const store = createStore(rootReducer, persistState, applyMiddleware(logger));
  window.store = store;
  store.subscribe(() => saveState(store.getState()));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
