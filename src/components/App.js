import React from 'react'
import {FormGroup, FormControl, InputGroup, Glyphicon, ControlLabel, Checkbox, Button} from 'react-bootstrap'
import '../assets/stylesheets/base.scss'


class App extends React.Component {

    _check() {
        let content = null;
        let username = document.getElementById('username');
        let password = document.getElementById('password');
        if(username.value && password.value){
            content = "content pełne!"
        } else{
            content = 'content puste';
        }
        console.log(content);
        return content;
    }

    render() {
        return <section className="section__log">
            <div className="div__log">
                <form>
                    <FormGroup>
                        <ControlLabel className="pdn10">Login</ControlLabel>
                        <span>{this._check}</span>
                        <InputGroup className="pdn10">
                            <InputGroup.Addon>@</InputGroup.Addon>
                            <FormControl type="text" placeholder="Username" id="username"/>
                        </InputGroup>
                        <InputGroup className="pdn10">
                            <InputGroup.Addon><Glyphicon glyph="star"/></InputGroup.Addon>
                            <FormControl type="password" placeholder="Password" id="password"/>
                        </InputGroup>
                        <div className="div__ctrl">
                            <div className="pdn10-left"><Checkbox readOnly>Keep me logged in</Checkbox></div>
                            <div className="pdn10-right"><Button onClick={()=> this._check() } bsStyle="info" id="btn__login" type="button">Submit</Button></div>
                        </div>
                    </FormGroup>
                </form>
            </div>
        </section>

    }

}

export default App
