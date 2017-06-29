/* eslint-disable react/prop-types */
import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import  {connect} from 'react-redux';
import {Button, Modal} from 'react-bootstrap';
import firebase from 'firebase'


class AuthButton extends React.Component {

  state = {
    showSignOutModal: false
  };

  close = () => {
    this.setState({showSignOutModal: false});
  };

  open = () => {
   this.setState({showSignOutModal: true});
  };

  handleSignOutClick = () => {
    const {history} = this.props;
    firebase.auth().signOut();
    history.push('/public');
  };


  render() {
    const {isAuthenticated, data} = this.props;

    return (

      isAuthenticated ? (
        <div>
          <p className="auth-paragraph">
            You are logged in as <span className="info">{data.displayName || data.email}</span>
            <Link to="/settings">Account Settings</Link>
            <Link to="/protected" className="red margin10-left">Use Case Manager</Link>
            <Button
              bsSize="xsmall"
              bsStyle="danger"
              className="auth-btn"
              onClick={this.open}
            >Sign out
            </Button>
          </p>

          <div>
            <Modal show={this.state.showSignOutModal} onHide={this.close} className="top-300">
              <Modal.Body>
                <div className="flex flex-center"><h3>Are you sure to sign you out?</h3></div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close} bsStyle="success" bsSize="small" >No, I want to stay</Button>
                <Button onClick={this.handleSignOutClick} bsStyle="danger" bsSize="small" >Yes, sign me out.</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
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


