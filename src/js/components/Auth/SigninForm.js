import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <fieldset className="form-group">
    <input
      className="form-control form-control-lg"
      {...input} type={type}
      placeholder={placeholder} />
    { touched && error && <span className="text-danger">{error}</span> }
  </fieldset>
);

class SigninForm extends Component {
  submit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submit.bind(this))}>
        <fieldset>
          <Field
            name="username"
            component={renderField}
            type="text"
            placeholder="Username" />
          <Field
            name="password"
            component={renderField}
            type="password"
            placeholder="Password" />

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

SigninForm = reduxForm({
  form: 'signin'
})(SigninForm)

import { withRouter } from 'react-router-dom';
export default withRouter(connect()(SigninForm));
