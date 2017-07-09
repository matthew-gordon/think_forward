import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Banner from './Banner';
import MainView from './MainView';

const Promise = global.Promise;

class Home extends Component {
  componentWillMount() {
    this.props.getAllArticles();
  }

  render() {
    return (
      <div className="home-page">
        <Banner appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <MainView />

            <div className="col-md-3">
              <div className="sidebar">

                <p>Popular Tags</p>

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  appName: state.common.appName
})

export default connect(mapStateToProps, actions)(Home)
