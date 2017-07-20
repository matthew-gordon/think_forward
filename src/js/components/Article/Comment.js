import React from 'react';
import { Link } from 'react-router-dom';

import DeleteButton from './DeleteButton';

const Comment = props => {
  console.log(props.comment, '******* DEEP PROPS *****');
  const comment = props.comment;
  const show = props.currentUser &&
    props.currentUser.username === comment.author.username;
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>

      <div className="card-footer">
        <Link
          to={`/@${comment.author.username}`}
          className="comment-author">
          <img src={comment.author.image} className="comment-author-img" />
        </Link>
        &nbsp;
        <Link
          to={`/@${comment.author.username}`}
          className="comment-author">
          {comment.author.username}
        </Link>
        <span className="date-posted">
          {new Date(comment.created_at).toDateString()}
        </span>
        <DeleteButton show={show} slug={props.slug} commentId={comment.id}/>
      </div>
    </div>
  );
}

export default Comment;


// <div className="card">
// <div className="card-block">
// <p className="card-text">{comment.body}</p>
// </div>
// <div className="card-footer">
// <Link
// to={`@${comment.author.username}`}
// className="comment-author" >
// <img src={comment.author.image} className="comment-author-img" />
// </Link>
// &nbsp;
// <Link
// to={`@${commment.author.username}`}
// className="comment-author">
// {comment.author.username}
// </Link>
// <span className="date-posted">
// {new Date(comment.created_at).toDateString()}
// </span>
// <DeleteButton show={show} slug={props.slug} commentId={comment.id} />
// </div>
// </div>
