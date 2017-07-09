import {
  HOME_PAGE_LOADED
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case HOME_PAGE_LOADED:
      return { ...state, articles: action.payload.data.articles }
  }

  return state;
}
