import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SigninForm from './SigninForm';

class Signin extends Component {
  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to ="/Signup">
                  Need an account?
                </Link>
              </p>

              <SigninForm />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

import { withRouter } from 'react-router-dom';
export default withRouter(connect()(Signin))
