import React from 'react';
import { connect } from 'react-redux';

import * as comments from '../../actions/comments';

const DeleteButton = props => {
  console.log(props, '**** AGIN *******');
  const del = () => {
    const payload = comments.deleteComment(props.slug,
       props.commentId, props.history);
    props.onClick(payload, props.commentId);
  };

  if (props.show) {
    return (
      <span className="mod-options">
        <i className="ion-trash-a" onClick={del}></i>
      </span>
    );
  }
  return null;
};

const mapDispatchToProps = dispatch => ({
  onClick: (payload, commentId) =>
    dispatch({ type: 'DELETE_COMMENT', payload, commentId })
});

export default connect(null, mapDispatchToProps)(DeleteButton);
