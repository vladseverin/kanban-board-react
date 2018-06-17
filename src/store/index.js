import { createStore } from 'redux';
import rootReducer from '../reducers';
import { login } from '../actions/auth';

export const store = createStore(rootReducer);

store.subscribe(() =>
  console.log(store.getState())
)

window.store = store;
window.login = login;

