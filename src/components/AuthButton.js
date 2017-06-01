
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import fakeAuth from './_utils/fakeAuth';
import initialState from './_utils/initialState';

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p className="auth-paragraph">
      You are logged in as <span className="info">{initialState.username}</span>
      <Link to="/settings">Account Settings</Link>
      <Button
        bsSize="xsmall"
        bsStyle="danger"
        className="auth-btn"
        onClick={() => {
          fakeAuth.signout(() => history.push('/public'));
        }}
      >Sign out
      </Button>
    </p>
  ) : (
    <div className="auth">
      <div className="auth-info">
        <Link
          className="clr-white"
          to="/protected"
        >
          Log me in
        </Link>
      </div>
      <div className="auth-info">
        <span className="info">
          You are not logged in.
        </span>
      </div>
    </div>
  )
));

export default AuthButton;
