import axios from 'axios';
import {
  ADD_COMMENT
} from './types';

const API_ROOT = 'http://localhost:3000';

export function postNewComment(articleSLUG, comment, history) {
  return (dispatch) => {
    console.log(articleSLUG, comment, history);
    axios.post(`${API_ROOT}/articles/${articleSLUG}/comments`, comment)
    .then(response => {
      console.log(response, '******** THIS IS THE response ********');
    })
    .catch(err => {
      console.log(err);
    });
  }
}

export function getCommentsForArticle(articleSLUG, history) {
  return (dispatch) => {
    axios.get(`${API_ROOT}/articles/${articleSLUG}/comments`)
    .then(response => {
      console.log(response);
      dispatch({type: ADD_COMMENT, payload: response.data.comments});
    })
    .catch(err => {
      console.log(err);
    });
  }
}

export function deleteComment(articleSLUG, commentID, history) {
  return (dispatch) => {
    axios.delete(`${API_ROOT}/articles/${articleSLUG}/comments/${commentID}`)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
