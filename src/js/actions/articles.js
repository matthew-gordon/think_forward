import axios from 'axios';
import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED
} from './types';

const API_ROOT = 'http://localhost:3000';

export function getArticle(articleSLUG) {
  const slug = articleSLUG
  console.log(slug);
  return (dispatch) => {
    axios.get(`${API_ROOT}/articles/${slug}`)
    .then(payload => {
      dispatch({ type: ARTICLE_PAGE_LOADED, payload: payload.data });
    })
  }
}

export function clearArticle() {
  return { type: ARTICLE_PAGE_UNLOADED }
}
