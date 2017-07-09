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
      className="form-control"
      {...input} type={type}
      placeholder={placeholder} />

    { touched && error && <span className="text-danger">{error}</span> }
  </fieldset>
);

class SigninForm extends Component {
  submit(values) {
    this.props.signinUser(values, () => {
      this.props.history.push('/');
    });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    console.log(this.props);
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

          {this.renderAlert()}
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

function validate(values) {
  let errors = {}

  if (!values.username) {
    errors.username = 'Please enter a username';
  }

  if (!values.password) {
    errors.password = 'Please enter a password';
  }

  return errors
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.error };
}

SigninForm = reduxForm({
  form: 'signin',
  validate
})(SigninForm)

import { withRouter } from 'react-router-dom';
export default withRouter(connect(mapStateToProps, actions)(SigninForm));
