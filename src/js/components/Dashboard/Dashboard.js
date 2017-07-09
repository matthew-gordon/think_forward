import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  renderUser() {
    if (this.props.user && this.props.user.username) {
      return (
        <div className="container">
          <h3>hello {this.props.user.username} </h3>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h3>Loading...</h3>
        </div>
      );
    }
  }

  render() {
    return (
      <h1>
        {this.renderUser()}
      </h1>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth.currentUser };
}

export default connect(mapStateToProps, actions)(Dashboard);
