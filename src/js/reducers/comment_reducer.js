import {
  ADD_COMMENT,
  DELETE_COMMENT
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    // ...
    case ADD_COMMENT:
      return {
        ...state,
        commentErrors: action.error ? action.payload.errors : null,
        comments: action.error ?
          null :
          (state.comments || []).concat([action.payload.comment])
      };
    case DELETE_COMMENT:
      const commentId = action.commentId;
      return {
        ...state,
        commments: state.comments.filter(comment => comment.id !== commentId)
      };
  }

  return state;
};
