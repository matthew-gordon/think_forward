import axios from 'axios';
import {
  HOME_PAGE_LOADED
} from './types';

const API_ROOT = 'http://localhost:3000';

export function getAllArticles() {
  return (dispatch) => {
    axios.get(`${API_ROOT}/articles`)
    .then(payload => {
      dispatch({ type: HOME_PAGE_LOADED, payload: payload });
    })
  }
}
