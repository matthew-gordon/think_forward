import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth_reducer';
import commonReducer from './common_reducer';
import homeReducer from './home_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
  home: homeReducer,
  form: formReducer,
});

export default rootReducer;
