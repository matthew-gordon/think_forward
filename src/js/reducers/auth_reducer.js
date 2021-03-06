import {
  AUTH_USER,
  UNAUTH_USER,
  FETCH_USER,
  AUTH_ERROR
} from '../actions/types';

export default (state = {} , action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, currentUser: null, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_USER:
      return { ...state, currentUser: action.payload }
  }

  return state;
}
