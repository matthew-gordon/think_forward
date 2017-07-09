import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignupForm from './SignupForm';

class Signup extends Component {
  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="/Signin">
                  Have an account?
                </Link>
              </p>

              <SignupForm onSubmit={this.submit} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

import { withRouter } from 'react-router-dom';
export default withRouter(connect()(Signup))
