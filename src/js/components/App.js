import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import './app.component.scss';

import Header from './Navbar/Header';
import Home from './Home/';
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
          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Signout" component={Signout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appName: state.article.appName
  }
}

export default withRouter(connect(mapStateToProps)(App));
