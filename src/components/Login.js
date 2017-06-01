/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../state/user/userActions';
import {
  FormGroup,
  FormControl,
  InputGroup,
  Glyphicon,
  ControlLabel,
  Checkbox,
  Button,
  Form
} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import fakeAuth from './_utils/fakeAuth';



export default class Login extends React.Component {


  state = {
    username: '',
    password: '',
    redirectToReferrer: false

  };


  handleLogin = () => {

    this.props.signinHelper(this.state.username, this.state.password);
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let warning = document.getElementById('warning');
    if (!(username === this.state.username && password === this.state.password)) {
      warning.innerHTML = 'Username or Password incorrect';
    }
    else {
      warning.innerHTML = '';
      fakeAuth.authenticate(() => {
        this.setState({ redirectToReferrer: true });
      });
    }

  };

  getValidationState() {
    const usernameLength = this.state.username.length;
    const username = this.state.username;
    let oRegExp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9-]+.(?:[a-z]{2}|com|org|net|biz|info)$');
    let result = oRegExp.test(username);
    if (usernameLength >= 9 && result) {return 'success';}
    else if (usernameLength >= 3 || typeof username === 'number') {return 'warning';}

  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      );
    }

    return (
      <section id="section__log">
        <div className="div__panel">
          <Form>
            <FormGroup validationState={this.getValidationState()}>
              <ControlLabel className="pdn10">Login</ControlLabel>
              <div id="warning" className="warning pdn10-left"></div>
              <InputGroup className="pdn10">
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl
                  id='username'
                  onChange={e => this.setState({ username: e.target.value })}
                  placeholder="Username"
                  type="text"
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
            <div className="div__ctrl__login">
              <div className="pdn10-left"><Checkbox readOnly>Keep me logged in</Checkbox></div>
              <div className="pdn10-right">
                <Button
                  bsStyle="info"
                  id="btn__login"
                  onClick={this.handleLogin}
                  type="button"
                >Submit</Button></div>
            </div>
          </Form>
          <div className="registration"><Link to="/registration">Sign me up</Link></div>
        </div>
        <div id="temp"> Please use login: <b>tdkontakt@gmail.com</b> and password: <b>tom1234</b> temporarily
        </div>
      </section>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  signinHelper: (username, password) => dispatch(signin(username, password))
});

Login = connect(null, mapDispatchToProps)(Login);
