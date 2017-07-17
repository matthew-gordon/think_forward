import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth_reducer';
import articleReducer from './article_reducer';
import commonReducer from './common_reducer';
import homeReducer from './home_reducer';
import account from './account.js'

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
  home: homeReducer,
  form: formReducer,
  account: account,
  article: articleReducer
});

export default rootReducer;
