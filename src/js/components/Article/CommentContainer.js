import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CommentList from './CommentList';
import CommentInput from './CommentInput';

import * as comments from '../../actions/comments';

class CommentContainer extends Component {
  componentWillMount() {
    this.props.getCommentsForArticle(this.props.slug);
  }

  render() {
    console.log(this.props.comments, '***** HERE IS YOUR COMMENTS ****');
    if (this.props.currentUser) {
      return (
        <div className="col-xs-12 col-md-8 offset-md-2">
          <div>
            <CommentInput slug={this.props.slug} currentUser={this.props.currentUser} />
          </div>

          <CommentList
            comments={this.props.comments}
            slug={this.props.slug}
            currentUser={this.props.currentUser} />
        </div>
      );
    } else {
      return (
        <div className="col-xs-12 col-md-8 offset-md-2">
          <p>
            <Link to="login">Sign in</Link>
            &nbsp;or&nbsp;
            <Link to="register">sign up</Link>
            &nbsp;to add comments on this article.
          </p>

          <CommentList
            comments={this.props.comments}
            slug={this.props.slug}
            currentUser={this.props.currentUser} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.data
  }
}

export default connect(mapStateToProps, comments)(CommentContainer);

// <ListErrors errors={props.errors}></ListErrors>
