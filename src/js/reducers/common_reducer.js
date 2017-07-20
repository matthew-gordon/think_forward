import {
  ARTICLE_DELETED
} from '../actions/types';

const defaultState = {
  appName: 'think forward'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ARTICLE_DELETED:
      return { ...state };
  }
  return state;
};
