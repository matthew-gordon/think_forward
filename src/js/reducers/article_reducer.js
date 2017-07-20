import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_PAGE_LOADED:
      return {
        ...state.article,
        data: action.payload
      };
      break;
    case ARTICLE_PAGE_UNLOADED:
      return {};
  }

  return state;
}
