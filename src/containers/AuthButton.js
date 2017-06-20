/* eslint-disable react/prop-types */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import  { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { signout } from '../state/user/userActions';



class AuthButton extends React.Component{


  render() {
    const { history, signoutHelper, isAuthenticated, data }= this.props;
    return (
     isAuthenticated ? (
       <p className="auth-paragraph">
         You are logged in as <span className="info">{data.fullName || data.username}</span>
         <Link to="/settings">Account Settings</Link>
         <Button
           bsSize="xsmall"
           bsStyle="danger"
           className="auth-btn"
           onClick={() => {
             signoutHelper(() => history.push('/public'));
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
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.loaded,
    data: state.user.data
  };
};

const mapDispatchToProps = (dispatch) => ({
  signoutHelper: () => dispatch(signout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthButton));


