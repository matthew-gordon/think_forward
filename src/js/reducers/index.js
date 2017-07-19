import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth_reducer';
import accountReducer from './account_reducer.js'
import articleReducer from './article_reducer';
import commonReducer from './common_reducer';
import homeReducer from './home_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  common: commonReducer,
  form: formReducer,
  home: homeReducer,
  article: articleReducer
});

export default rootReducer;
