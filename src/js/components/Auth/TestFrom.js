import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { load as loadAccount } from '../../reducers/account'

import * as auth from '../../actions/auth';

const data = {
  // used to populate "account" reducer when component mounts
  username: 'Matt',
  email: 'email@email.com',
  image: 'http://placholder.it/300',
  bio: 'hello jeff. loolol'
}

class SettingsForm extends Component {
  componentWillMount() {
    console.log(this.props, '**** PROPS *****');
    this.props.load(data);
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
              component="input"
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
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label>Image</label>
          <div>
            <Field
              name="image"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label>Bio</label>
          <div>
            <Field name="bio" component="textarea" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Undo Changes
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    initialValues: state.account.data,
    user: state.auth.currentUser
  }
};

SettingsForm = reduxForm({
  form: 'initializeFromState' // a unique identifier for this form
})(SettingsForm);

import { withRouter } from 'react-router-dom';
export default withRouter(connect(mapStateToProps, auth)(SettingsForm));
