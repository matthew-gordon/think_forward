import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';

class Header extends Component {
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.fetchUser();
    }
  }

  renderLinks() {
    if (this.props.user) {
      return [
        <li className="nav-item" key={1}>
          <Link to="" className="nav-link">
            Home
          </Link>
        </li>,

        <li className="nav-item" key={2}>
          <Link to="editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>,

        <li className="nav-item" key={3}>
          <Link to="settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>,

        <li className="nav-item" key={4}>
          <Link
            to={`@${this.props.user.username}`}
            className="nav-link">
            <img src={this.props.user.image} className="user-pic" />
            {this.props.user.username}
          </Link>
        </li>,

        <li className="nav-item" key={5}>
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      ]
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link className="navbar-brand" to="/">
            {this.props.appName.toLowerCase()}
          </Link>
          <ul className="nav navbar-nav pull-xs-right">
            {this.renderLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps, actions)(Header);
