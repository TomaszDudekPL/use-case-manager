/* eslint-disable react/prop-types */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import  { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import firebase from 'firebase'


class AuthButton extends React.Component{

  handleSignOutClick = () => {
    const {history} = this.props;
    firebase.auth().signOut();
    history.push('/public');
  };


  render() {
    const { isAuthenticated, data }= this.props;
    return (
     isAuthenticated ? (
       <p className="auth-paragraph">
         You are logged in as <span className="info">{data.displayName || data.email}</span>
         <Link to="/settings">Account Settings</Link>
         <Link to="/protected" className="red margin10-left">Use Case Manager</Link>
         <Button
           bsSize="xsmall"
           bsStyle="danger"
           className="auth-btn"
           onClick={this.handleSignOutClick}
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
    isAuthenticated: state.firebaseUser.data !== null,
    data: state.firebaseUser.data
  };
};


export default withRouter(connect(mapStateToProps, null)(AuthButton));


