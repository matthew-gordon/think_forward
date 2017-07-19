import axios from 'axios';
import {
  ADD_COMMENT
} from './types';

const API_ROOT = 'http://localhost:3000';

export function postNewComment(articleSLUG, comment, history) {
  axios.post(`${API_ROOT}/articles/${articleSLUG}/comments`)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}

export function getCommentsForArticle(articeSLUG, history) {
  axios.get(`${API_ROOT}/articles/${articleSLUG}/comments`)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}

export function deleteComment(articleSLUG, commentID, history) {
  axios.delete(`${API_ROOT}/articles/${articleSLUG}/comments/${commentID}`)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}
