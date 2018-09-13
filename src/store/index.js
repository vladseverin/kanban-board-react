import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import { loadState, saveState } from '../utils/localStorage';

// const persistState = loadState();

// const subscribeOnStore = (store) => {
//   store.subscribe(() => saveState(store.getState()));
// };

export default function configureStore() {
  if (process.env.NODE_ENV === 'production') {
    const store = createStore(rootReducer);
    // subscribeOnStore(store);
    return store;
  }

  const store = createStore(rootReducer, applyMiddleware(logger));
  // subscribeOnStore(store);

  window.store = store;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
