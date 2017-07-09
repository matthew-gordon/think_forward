import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import './app.component.scss';

import Header from './Header';
import Home from './Home/';
import Signin from './Signin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appName={this.props.appName} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Signin} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appName: state.article.appName
  }
}

export default withRouter(connect(mapStateToProps)(App));
