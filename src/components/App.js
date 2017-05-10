import React from 'react'
import {FormGroup, FormControl, InputGroup, Glyphicon, ControlLabel, Checkbox, Button} from 'react-bootstrap'
import '../assets/stylesheets/base.scss'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }



    render() {
        return <section className="section__log">
            <div className="div__log">
                <form>
                    <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                        <ControlLabel className="pdn10">Login</ControlLabel>
                        <InputGroup className="pdn10">
                            <InputGroup.Addon>@</InputGroup.Addon>
                            <FormControl type="text" placeholder="Username" value={this.state.value} onChange={this.handleChange}/>
                            <FormControl.Feedback />
                        </InputGroup>
                        <InputGroup className="pdn10">
                            <InputGroup.Addon><Glyphicon glyph="star"/></InputGroup.Addon>
                            <FormControl type="password" placeholder="Password"/>
                        </InputGroup>
                        <div className="div__ctrl">
                            <div className="pdn10-left"><Checkbox readOnly>Keep me logged in</Checkbox></div>
                            <div className="pdn10-right"><Button bsStyle="info" id="btn__login" type="button">Submit</Button></div>
                        </div>
                    </FormGroup>
                </form>
            </div>
        </section>

    }

}

export default App
