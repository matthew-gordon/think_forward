import axios from 'axios';
import {
  HOME_PAGE_LOADED,
  ARTICLE_DELETED
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

export function deleteArticle(articleSLUG, history) {
  const slug = articleSLUG;
  console.log(slug);
  return (dispatch) => {
    // Submit article for deletion to the server
    axios.delete(`${API_ROOT}/articles/${slug}`)
      .then(payload => {
        // If request is good...
        // - Update state to delete article
        dispatch({ type: ARTICLE_DELETED, payload });
        // - Redirect to the home page
        history.push('/');
      })
      .catch((err) => {
        // If request is bad...
        //- Show an error to the user
        // TODO: Error handling
        console.log(err);
      });
  }
}
