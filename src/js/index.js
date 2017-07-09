import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import logger from 'redux-logger'
import { promiseMiddleware } from './middleware';

import reducers from './reducers';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(
  logger,
  promiseMiddleware
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
