import React from 'react';
import { connect } from 'react-redux';

import * as comments from '../../actions/comments';

const DeleteButton = props => {
  const del = () => {
    const payload = comments.deleteComment(props.slug,
       props.commentId, props.history);
    props.onClick(payload, props.commentId);
  }

  if (props.show) {
    return (
      <span className="mod-options">
        <i className="ion-trash-a" onClick={del}></i>
      </span>
    );
  return null;
};

import { withRouter } from 'react-router-dom';
export default withRouter(connect(null, comments)(DeleteButton));
