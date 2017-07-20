import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SettingsForm from './SettingsForm';

class Settings extends Component {
  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>

              <SettingsForm />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

import { withRouter } from 'react-router-dom';
export default withRouter(connect()(Settings));
