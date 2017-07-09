import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/Signout">Sign Out</Link>
        </li>
      ]
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/Signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/Signup">Sign up</Link>
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

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
