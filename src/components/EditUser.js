import React from 'react';
import { Form, FormGroup, ControlLabel, InputGroup, FormControl, Glyphicon, Button } from 'react-bootstrap';

export default function EditUser() {

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
              <InputGroup.Addon><Glyphicon glyph="user" /></InputGroup.Addon>
              <FormControl
                id='firstName'
                placeholder="First Name"
                type="text"
              />
              <FormControl.Feedback />
            </InputGroup>
            <InputGroup className="pdn10">
              <InputGroup.Addon><Glyphicon glyph="pencil" /></InputGroup.Addon>
              <FormControl
                id='lastName'
                placeholder="Last Name"
                type="text"
              />
              <FormControl.Feedback />
            </InputGroup>
            <InputGroup className="pdn10">
              <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl
                id='email'
                placeholder="E-mail"
                type="email"
              />
              <FormControl.Feedback />
            </InputGroup>
          </FormGroup>
          <InputGroup className="pdn10">
            <InputGroup.Addon><Glyphicon glyph="star" /></InputGroup.Addon>
            <FormControl
              id='password'
              placeholder="Password"
              type="password"
            />
          </InputGroup>
          <div className="div__ctrl__register">
            <div className="pdn10-right">
              <Button
                bsStyle="danger"
                id="btn__edit"
                type="button"
              >Change my data</Button>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );

}
