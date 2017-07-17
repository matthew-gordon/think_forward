import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import './app.component.scss';

import Article from './Article/';
import Header from './Navbar/Header';
import Home from './Home/';
import Settings from './Settings/Settings';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import Signout from './Auth/Signout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appName={this.props.appName} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/signout" component={Signout} />
          <Route path="/settings" component={Settings} />
          <Route exact path="/articles/:slug" component={Article} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    appName: state.common.appName
  }
}

export default withRouter(connect(mapStateToProps)(App));
