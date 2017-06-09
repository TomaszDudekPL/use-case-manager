/* eslint-disable react/prop-types */
import React from 'react';
import { Form, FormGroup, ControlLabel, InputGroup, FormControl, Glyphicon, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { signup } from '../state/user/userActions';



class Registration extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''

  };

  handleSignUp =() => {
    this.props.signupHelper(this.state.firstName, this.state.lastName,this.state.email, this.state.password, this.state.confirmPassword);
  };


  render() {
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
                onChange={e => this.setState({ firstName: e.target.value })}
                placeholder="First Name"
                type="text"
                value={this.state.value}
              />
              <FormControl.Feedback />
            </InputGroup>
            <InputGroup className="pdn10">
              <InputGroup.Addon><Glyphicon glyph="pencil" /></InputGroup.Addon>
              <FormControl
                id='lastName'
                onChange={e => this.setState({ lastName: e.target.value })}
                placeholder="Last Name"
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
          <InputGroup className="pdn10">
            <InputGroup.Addon><Glyphicon glyph="star" /></InputGroup.Addon>
            <FormControl
              id='confirm_password'
              onChange={e => this.setState({ confirmPassword: e.target.value })}
              placeholder="Confirm password"
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

  return {
    isAuthenticated: state.user.loaded,
    data: state.user.data
  }
};

const mapDispatchToProps = (dispatch) => ({
  signupHelper: (firstName, lastName, email, password, confirmPassword) => dispatch(signup(firstName, lastName, email, password, confirmPassword))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Registration));

