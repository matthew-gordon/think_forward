import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { promiseMiddleware } from './middleware';

import reducers from './reducers';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(
  logger,
  reduxThunk,
  promiseMiddleware
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
