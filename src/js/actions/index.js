import axios from 'axios';
import {
  HOME_PAGE_LOADED
} from './types';

const API_ROOT = 'https://conduit.productionready.io/api';

export function getAllArticles() {
  return (dispatch) => {
    axios.get(`${API_ROOT}/articles?limit=10`)
    .then(payload => {
      dispatch({ type: HOME_PAGE_LOADED, payload });
    })
  }
}
