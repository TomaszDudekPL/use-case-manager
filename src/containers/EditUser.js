import React from 'react';
import {Form, FormGroup, ControlLabel, InputGroup, FormControl, Glyphicon, Button} from 'react-bootstrap';



class EditUser extends React.Component {

  state = {
    userId: this.props.userId,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email
  };

  handleRemoveUsers = () => {

  };

  handleEditData = () => {

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
              <InputGroup className="pdn10">
                <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                <FormControl
                  id='firstName'
                  onChange={e => this.setState({ firstName: e.target.value })}
                  placeholder="First Name"
                  type="text"
                  value={this.state.firstName}
                />
                <FormControl.Feedback />
              </InputGroup>
              <InputGroup className="pdn10">
                <InputGroup.Addon><Glyphicon glyph="pencil"/></InputGroup.Addon>
                <FormControl
                  id='lastName'
                  onChange={e => this.setState({ lastName: e.target.value })}
                  placeholder="Last Name"
                  type="text"
                  value={this.state.lastName}
                />
                <FormControl.Feedback />
              </InputGroup>
              <InputGroup className="pdn10">
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl
                  id='email'
                  placeholder="E-mail"
                  type="email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <FormControl.Feedback />
              </InputGroup>
            </FormGroup>
            <InputGroup className="pdn10">
              <InputGroup.Addon><Glyphicon glyph="star"/></InputGroup.Addon>
              <FormControl
                id='password'
                placeholder="Password"
                type="password"
              />
            </InputGroup>
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


export default EditUser;


