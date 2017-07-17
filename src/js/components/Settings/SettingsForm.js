import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { load as loadAccount } from '../../reducers/account'

import * as auth from '../../actions/auth';

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
      placeholder={placeholder}/>

    { touched && error && <span className="text-danger">{error}</span> }
  </fieldset>
);

const renderTextarea= ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <fieldset className="form-group">
    <textarea
      className="form-control"
      {...input}
      rows="8"
      placeholder={placeholder} />

    { touched && error && <span className="text-danger">{error}</span> }
  </fieldset>
);

class SettingsForm extends Component {
  componentWillMount() {
    this.props.load(this.props.initialValues);
  }

  render() {
    const { handleSubmit, load, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <div>
            <Field
              name="username"
              component={renderField}
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component={renderField}
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <label>Image</label>
          <div>
            <Field
              name="image"
              component={renderField}
              type="text"
              placeholder="Avatar Image"
            />
          </div>
        </div>
        <div>
          <label>Bio</label>
          <div>
            <Field name="bio" component={renderTextarea} />
          </div>
        </div>
        <div>
          <button
          className="btn btn-lg btn-primary"
          type="submit"
          disabled={pristine || submitting}>
            Submit
          </button>{' '}
          <button
          className="btn btn-lg btn-primary"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}>
            Undo Changes
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    initialValues: state.auth.currentUser
  }
};

SettingsForm = reduxForm({
  form: 'settings' // a unique identifier for this form
})(SettingsForm);

import { withRouter } from 'react-router-dom';
export default withRouter(connect(mapStateToProps, auth)(SettingsForm));
