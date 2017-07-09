import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

export class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }
  
  render() {
    return(
      <div className="row">
        <div className="container">
          <h1>Sorry to see you go!</h1>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Signout);
