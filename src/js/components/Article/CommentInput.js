import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as comments from '../../actions/comments';

const renderTextarea= ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <fieldset className="form-group">
    <textarea
      className="form-control"
      {...input}
      rows="3"
      placeholder={placeholder} />

    { touched && error && <span className="text-danger">{error}</span> }
  </fieldset>
);

class CommentInput extends Component {
  submit(values) {
    const body = values;
    comments.postNewComment(this.props.slug,
        body, this.props.history);
  }

  render() {
    const { handleSubmit, load, pristine, reset, submitting } = this.props;

    return (
      <form className="card comment-form" onSubmit={handleSubmit(this.submit.bind(this))}>
        <div className="card-block">
          <Field className="form-control"
            name="comment_input"
            placeholder="Write a comment..."
            component={renderTextarea}>
          </Field>
        </div>
        <div className="card-footer">
          <img
            src={this.props.currentUser.image}
            className="comment-author-img" />
          <button
            className="btn btn-sm btn-primary"
            type="submit">
            Post Comment
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
}

CommentInput = reduxForm({
  form: 'commeninput'
})(CommentInput);

import { withRouter } from 'react-router-dom';
export default withRouter(connect(mapStateToProps, comments)(CommentInput));
