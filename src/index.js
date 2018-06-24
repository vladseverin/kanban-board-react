import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'typeface-roboto';
import configureStore  from './store/index';

import { editListTitle, removeCard } from './actions/board';

const store = configureStore();

window.store = store;
window.removeCard = removeCard;
window.editListTitle = editListTitle;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
