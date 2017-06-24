/* eslint-disable react/prop-types */
import React from 'react';
import { Form, FormGroup, ControlLabel, InputGroup, FormControl, Glyphicon, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import firebase from 'firebase'


class Registration extends React.Component {

  state = {
    fullName: '',
    email: '',
    password: ''
  };

  handleSignUp =() => {

    const { email, password, fullName } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      user => {
        user.updateProfile({
          displayName: fullName
        }).then(function() {
          // Update successful.
        }, function(error) {
          // An error happened.
        });
      }
    ).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
    });


  };


  render() {
    console.log(firebase.auth().currentUser);
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { isAuthenticated, data } = this.props;
    if (isAuthenticated && data) {
      return (
        <Redirect to={from} />
      );
    }
    return ( <section id="section__register">
      <div className="div__panel">
        <Form>
          <FormGroup >
            <ControlLabel className="pdn10">Register me</ControlLabel>
            <div
              className="warning pdn10-left"
              id="warning"
            >
            </div>
            <InputGroup className="pdn10">
              <InputGroup.Addon><Glyphicon glyph="user" /></InputGroup.Addon>
              <FormControl
                id='firstName'
                onChange={e => this.setState({ fullName: e.target.value })}
                placeholder="Your Full Name"
                type="text"
                value={this.state.value}
              />
              <FormControl.Feedback />
            </InputGroup>
            <InputGroup className="pdn10">
              <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl
                id='email'
                onChange={e => this.setState({ email: e.target.value })}
                placeholder="E-mail"
                type="email"
                value={this.state.value}
              />
              <FormControl.Feedback />
            </InputGroup>
          </FormGroup>
          <InputGroup className="pdn10">
            <InputGroup.Addon><Glyphicon glyph="star" /></InputGroup.Addon>
            <FormControl
              id='password'
              onChange={e => this.setState({ password: e.target.value })}
              placeholder="Password"
              type="password"
              value={this.state.value}
            />
          </InputGroup>
          <div className="div__ctrl__register">
            <div className="pdn10-right">
              <Button
                bsStyle="warning"
                id="btn__register"
                onClick={this.handleSignUp}
                type="button"
              >Register me</Button>
            </div>
          </div>
        </Form>
      </div>
    </section>);
  }
}

const mapStateToProps = (state) => {
console.log(state);
  return {
    isAuthenticated: state.firebaseUser.data !== null,
    data: state.firebaseUser.data
  }
};


export default withRouter(connect(mapStateToProps, null)(Registration));

