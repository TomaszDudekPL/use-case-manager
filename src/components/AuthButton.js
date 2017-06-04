import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import  { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { signout } from '../state/user/userActions';

import fakeAuth from './_utils/fakeAuth';
import initialState from './_utils/initialState';


const AuthButton = withRouter(({ history } ) =>{

  const { signoutHelper } = this.props;

  return (
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
          signoutHelper();
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
  );
} );

const mapDispatchToProps = (dispatch) => ({
  signoutHelper: () => dispatch(signout())

});

export default connect(null, mapDispatchToProps)(AuthButton);


