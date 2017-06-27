import React from 'react';
import {Form, FormGroup, ControlLabel, InputGroup, FormControl, Glyphicon, Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import firebase from 'firebase'

class EditUser extends React.Component {

  state = {
    fullName: this.props.fullName,
    email: this.props.email,
    password: ''
  };

  handleRemoveUsers = () => {
    let user = firebase.auth().currentUser;
    if (user !== null) {
      user.delete().then(() => {
        const {history} = this.props;
        history.push('/public');
        firebase.auth().signOut();
      }, (error) => {
        console.log('Nie udało się usunąć Usera!', error)
      })
    }

  };


  handleEditData = () => {
    let user = firebase.auth().currentUser;

    if (user !== null && this.state.password.length > 6) {
      user.updateProfile({
        displayName: this.state.fullName
      }).then(() => {
          const {history} = this.props;
          history.push('/protected');
        }, (error) => {
          console.log('FullName nie zmieniony! Bład:', error)
        }
      );
      user.updateEmail(this.state.email).then(() => {
          const {history} = this.props;
          history.push('/protected');
          console.log('Email zmieniony!', history);
        }, (error) => {
          console.log('Email, nie zmieniony, błąd!', error)
        }
      );

      user.updatePassword(this.state.password).then(() => {
        console.log('Hasło zmienione!');
          const {history} = this.props;
          history.push('/protected');
        }, (error) => {
          console.log('Hasło nie zmienione! Błąd:', error);
        }
      )

    } else {
      let warning = document.getElementById('pass-required');
      warning.innerHTML = 'Password is required! (Min. 6 characters long)';
    }
  };


  render() {
    console.log(this.state.password);
    return (
      <section id="section__edit">
        <div className="div__panel">
          <Form>
            <FormGroup >
              <ControlLabel className="pdn10">Edit my data</ControlLabel>
              <div
                className="warning pdn10-left"
                id="warning"
              />
              <ControlLabel className="margin10-left mylabel">Enter Your New Full Name</ControlLabel>
              <InputGroup className="pdn10 reset-pdn-top">
                <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                <FormControl
                  id='firstName'
                  onChange={e => this.setState({fullName: e.target.value})}
                  placeholder="New Full Name"
                  type="text"
                  value={this.state.fullName}
                />
                <FormControl.Feedback />
              </InputGroup>
              <ControlLabel className="margin10-left mylabel">Enter Your New E-mail</ControlLabel>
              <InputGroup className="pdn10 reset-pdn-top">
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl
                  id='email'
                  placeholder="New E-mail"
                  type="email"
                  value={this.state.email}
                  onChange={e => this.setState({email: e.target.value})}
                />
                <FormControl.Feedback />
              </InputGroup>
              <ControlLabel className="margin10-left mylabel" id="pass-required">Enter Your Current or New Password
                (required! Min. 6 char. long)</ControlLabel>
              <InputGroup className="pdn10 reset-pdn-top">
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl
                  id='password'
                  placeholder="Password"
                  type="password"
                  onChange={e => this.setState({password: e.target.value})}
                />
                <FormControl.Feedback />
              </InputGroup>
            </FormGroup>
            <div className="div__ctrl__register">
              <Button
                bsStyle="danger"
                className="margin10-left"
                id="btn__edit"
                onClick={this.handleRemoveUsers}
                type="button"
                >Remove User</Button>
              <Button
                bsStyle="warning"
                className="margin10-right"
                id="btn__edit"
                onClick={this.handleEditData}
                type="button"
              >Change my data</Button>

            </div>
          </Form>
        </div>
      </section>
    )

  }

}
const mapStateToProps = (state) => {
  if (state.firebaseUser.data) {
    return {
      fullName: state.firebaseUser.data.displayName,
      email: state.firebaseUser.data.email
    };
  }
};


export default withRouter(connect(mapStateToProps, null)(EditUser));


