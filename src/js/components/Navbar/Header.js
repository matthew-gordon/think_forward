import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  renderLinks() {
    return [
      <li className="nav-item" key={1}>
        <Link className="nav-link" to="/Signin">Sign In</Link>
      </li>,
      <li className="nav-item" key={2}>
        <Link className="nav-link" to="/Signup">Sign up</Link>
      </li>
    ]
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

export default Header;
