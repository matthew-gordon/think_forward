import { combineReducers } from 'redux';

import articleReducer from './articles';

const rootReducer = combineReducers({
  article: articleReducer
})

export default rootReducer;
