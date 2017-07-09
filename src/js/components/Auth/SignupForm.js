import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignupForm extends Component {
  submit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submit.bind(this))}>
        <fieldset>

          <fieldset className="form-group">
            <Field
              name="username"
              component="input"
              className="form-control from-control-lg"
              type="text"
              placeholder="Username" />
          </fieldset>

          <fieldset className="form-group">
            <Field
              name="password"
              component="input"
              className="form-control from-control-lg"
              type="password"
              placeholder="Password" />
          </fieldset>

          <fieldset className="form-group">
            <Field
              name="password_confirmation"
              component="input"
              className="form-control from-control-lg"
              type="password"
              placeholder="Confrim Password" />
          </fieldset>

          <button
            className="btn btn-lg btn-primary pull-xs-right"
            action="submit">
            Sign In
          </button>

        </fieldset>
      </form>
    );
  }
}

SignupForm = reduxForm({
  form: 'signup'
})(SignupForm)

import { withRouter } from 'react-router-dom';
export default withRouter(connect()(SignupForm));
