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
        data: action.payload
      };
    case DELETE_COMMENT:
      const commentId = action.commentId;
      console.log(commentId);
      console.log(state);
      return {
        ...state,
        data: state.data.filter(comment => comment.id !== commentId)
      };
  }

  return state;
};
