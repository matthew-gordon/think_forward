import React from 'react';

import Comment from './Comment';

const CommentList = props => {
  console.log(props.comments, '**** MO READY ****');
  if (!props.comments) {
    return (
      <div>Loading...</div>
    );
  }

  if (props.comments.length === 0) {
    return (
      <div>
        No comments on article... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.comments.map(comment => {
          return (
            <Comment
              comment={comment}
              currentUser={props.currentUser}
              slug={props.slug}
              key={comment.id} />
          )
        })
      }
    </div>
  );
};

export default CommentList;





// {
//   props.comments.map(comment => {
//     return (
//       <Comment
//       comment={comment}
//       currentUser={props.currentUser}
//       slug={props.slug}
//       key={comment.id} />
//     );
//   })
// }
