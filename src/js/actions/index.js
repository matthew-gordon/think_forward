import axios from 'axios';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3000';

export function signupUser(values, callback) {
  return (dispatch) => {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/auth/register`, values)
      .then(response => {
        // If request is good...
        //- Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        //- Save the JWT token to local storage
        localStorage.setItem('token', response.data.token);
        //- Redirect to the route '/dashboard'
        callback();
      })
      .catch(() => {
        // If request is bad...
        //- Show an error to the user
        dispatch(authError('Bad Signup Info'));
      }
    );
  }
}

export function signinUser(values, callback) {
  return (dispatch) => {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/auth/login`, values)
      .then(response => {
        // If request is good...
        //- Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        //- Save the JWT token to local storage
        localStorage.setItem('token', response.data.token);
        //- Redirect to the route '/dashboard'
        callback();
      })
      .catch(() => {
        // If request is bad...
        //- Show an error to the user
        dispatch(authError('Bad Login Info'));
      }
    );
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  
  return { type: UNAUTH_USER }
}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
