import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'typeface-roboto';
import configureStore  from './store/index';

import { addComment, removeComment } from './actions/board';

const store = configureStore();

window.store = store;
window.addComment = addComment;
window.removeComment = removeComment;

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>, 
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}

registerServiceWorker();
