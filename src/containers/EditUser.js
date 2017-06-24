import React from 'react';
import {Form, FormGroup, ControlLabel, InputGroup, FormControl, Glyphicon, Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import firebase from 'firebase'

class EditUser extends React.Component {

  state = {
    fullName: this.props.fullName,
    email: this.props.email
  };

  handleRemoveUsers = () => {
    let user = firebase.auth().currentUser;
    if(user !== null){
      user.delete().then(function() {
        const {history} = this.props;
        history.push('/public');
        console.log('ten kod się wykonał');
        firebase.auth().signOut();
      }, function (error){
        console.log('Nie udało się usunąć Usera!', error)
      })
    }

  };


  handleEditData = () => {
    let user = firebase.auth().currentUser;
    if(user !== null){
      user.updateProfile({
        displayName: this.state.fullName
      }).then( function() {
          const {history} = this.props;
          history.push('/protected');
        console.log(history)
      }, function(error){
        console.log('Coś poszło nie tak!', error)
        }
      );
      user.updateEmail(this.state.email).then(function(){
          const {history} = this.props;
          history.push('/protected');
        console.log('Email zmieniony!', history);
      }, function (error){
        console.log('Email, nie zmieniony, błąd!', error)
        }
      )
    }
  };


  render() {
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
              <ControlLabel className="margin10-left label">Enter Your New Full Name</ControlLabel>
              <InputGroup className="pdn10 reset-pdn-top">
                <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                <FormControl
                  id='firstName'
                  onChange={e => this.setState({ fullName: e.target.value })}
                  placeholder="New Full Name"
                  type="text"
                  value={this.state.fullName}
                />
                <FormControl.Feedback />
              </InputGroup>
              <ControlLabel className="margin10-left label">Enter Your New E-mail</ControlLabel>
              <InputGroup className="pdn10 reset-pdn-top">
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl
                  id='email'
                  placeholder="New E-mail"
                  type="email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <FormControl.Feedback />
              </InputGroup>
            </FormGroup>
            <div className="div__ctrl__register">
              <Button
                bsStyle="warning"
                className="margin10-left"
                id="btn__edit"
                onClick={this.handleEditData}
                type="button"
              >Change my data</Button>
              <Button
                bsStyle="danger"
                className="margin10-right"
                id="btn__edit"
                onClick={this.handleRemoveUsers}
                type="button"
              >Remove User</Button>
            </div>
          </Form>
        </div>
      </section>
    )

  }

}
const mapStateToProps = (state)=> {
  if (state.firebaseUser.data) {
  return {
    fullName: state.firebaseUser.data.displayName,
    email: state.firebaseUser.data.email
  };
}
};


export default withRouter(connect(mapStateToProps, null)(EditUser));


