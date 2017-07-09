import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth_reducer';
import articleReducer from './articles_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  article: articleReducer
})

export default rootReducer;
