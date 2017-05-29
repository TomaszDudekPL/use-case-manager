import React from 'react'
import {Form, FormGroup, ControlLabel, InputGroup, FormControl, Glyphicon, Button} from 'react-bootstrap'







export default class EditUser extends React.Component {

    render() {
        return ( <section id="section__edit">
            <div className="div__panel">
                <Form>
                    <FormGroup >
                        <ControlLabel className="pdn10">Edit my data</ControlLabel>
                        <div id="warning" className="warning pdn10-left"></div>
                        <InputGroup className="pdn10">
                            <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                            <FormControl type="text" placeholder="First Name" id='firstName' />
                            <FormControl.Feedback />
                        </InputGroup>
                        <InputGroup className="pdn10">
                            <InputGroup.Addon><Glyphicon glyph="pencil"/></InputGroup.Addon>
                            <FormControl type="text" placeholder="Last Name" id='lastName' />
                            <FormControl.Feedback />
                        </InputGroup>
                        <InputGroup className="pdn10">
                            <InputGroup.Addon>@</InputGroup.Addon>
                            <FormControl type="email" placeholder="E-mail" id='email' />
                            <FormControl.Feedback />
                        </InputGroup>
                    </FormGroup>
                    <InputGroup className="pdn10">
                        <InputGroup.Addon><Glyphicon glyph="star"/></InputGroup.Addon>
                        <FormControl type="password" placeholder="Password" id='password' />
                    </InputGroup>
                    <div className="div__ctrl__register">
                        <div className="pdn10-right"><Button bsStyle="danger" id="btn__edit" type="button">Change my data</Button></div>
                    </div>
                </Form>
            </div>
        </section>)
    }
}