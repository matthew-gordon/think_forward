import {
  LOAD,
  SIGN_OUT
} from '../actions/types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return { ...state, data: action.data }
    case SIGN_OUT:
      return { ...state, data: null }
  }

  return state;
}

export default reducer
