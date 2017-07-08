import React, { Component } from 'react';
import { connect } from 'react-redux';

import './app.component.scss';

import Header from './Header';
import Home from './Home/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appName={this.props.appName} />
        <Home />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appName: state.article.appName
  }
}

export default connect(mapStateToProps)(App);
