import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const ArticleActions = props => {
  const article = props.article;
  const del = () => {
    props.deleteArticle(article.slug, props.history);
  }
  if (props.canModify) {
    return (
      <span>
        <Link
          to={`/editor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit"></i> Edit Article
        </Link>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={del}>
          <i className="ion-trash-a"></i> Delete Article
        </button>

      </span>
    );
  }

  return (
    <span>
    </span>
  );
};

import { withRouter } from 'react-router-dom';
export default withRouter(connect(null, actions)(ArticleActions));
