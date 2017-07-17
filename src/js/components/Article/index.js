import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

import * as articles from '../../actions/articles';

class Article extends Component {
  componentWillMount() {
    console.log(this.props, '***** MAD PROPS ****');
    this.props.getArticle(this.props.match.params.slug);
    // TODO: axios get for all comments for article
  }

  componentWillUnmount() {
    this.props.clearArticle();
  }

  render() {
    if (!this.props.article) {
      return null;
    }

    // const markup = { _html: marked(this.props.article.body) };
    // const canModify = this.props.currentUser &&
      // this.props.currentUser.username === this.props.article.author.username;
    return (
      <div className="article-page">

        <div className="banner">
          <div className="container">

          <h1>{this.props.article.title}</h1>

          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-xs-12">

              <div>{this.props.article.body}</div>

              <ul className="tag-list">
                {
                  this.props.article.tagList.map(tag => {
                    return (
                      <li
                      className="tag-default tag-pill tag-outline"
                      key={tag}>
                        {tag}
                      </li>
                    );
                  })
                }
              </ul>

            </div>
          </div>

          <hr />

          <div className="article-actions">
          </div>

        </div>
        <div className="row">
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  article: state.article.data,
  currentUser: state.auth.currentUser
})

export default connect(mapStateToProps, articles)(Article);

// <CommentContainer
// comments={this.props.comments || []}
// errors={this.props.commentErrors}
// slug={this.props.params.id}
// currentUser={this.props.currentUser} />

// <ArticleMeta
// article={this.props.article}
// canModify={canModify} />
