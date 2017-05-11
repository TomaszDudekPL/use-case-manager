import React from 'react'
import {FormGroup, FormControl, InputGroup, Glyphicon, ControlLabel, Checkbox, Button} from 'react-bootstrap'
import '../assets/stylesheets/base.scss'

const initialState = {
    username: 'tdkontakt@gmail.com',
    password: 'tom1234'
};
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    getValidationState() {
        const usernameLength = this.state.username.length;
        const username = this.state.username;
        let oRegExp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9-]+.(?:[a-z]{2}|com|org|net|biz|info)$');
        let result = oRegExp.test(username);
        if (usernameLength >= 9 && result) return 'success';
        else if (usernameLength >= 3 || typeof username === 'number') return 'warning';
        else if (!username || usernameLength < 3) return 'error';
    }

    globalValidation() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        let warning = document.getElementById('warning');
        if (!(username === initialState.username && password === initialState.password)) {
            warning.innerHTML = 'Username or Password incorrect'
        } else {
            warning.innerHTML = ''
        }
    }

    render() {
        return <section className="section__log">
            <div className="div__log">
                <form>
                    <FormGroup validationState={this.getValidationState()}>
                        <ControlLabel className="pdn10">Login</ControlLabel>
                        <div id="warning" className="pdn10-left"></div>
                        <InputGroup className="pdn10">
                            <InputGroup.Addon>@</InputGroup.Addon>
                            <FormControl type="text" placeholder="Username" id='username' value={this.state.value}
                                         onChange={ e => this.setState({username: e.target.value})}/>
                            <FormControl.Feedback />
                        </InputGroup>
                        <InputGroup className="pdn10">
                            <InputGroup.Addon><Glyphicon glyph="star"/></InputGroup.Addon>
                            <FormControl type="password" placeholder="Password" id='password' value={this.state.value}
                                         onChange={ e => this.setState({password: e.target.value})}/>
                        </InputGroup>
                        <div className="div__ctrl">
                            <div className="pdn10-left"><Checkbox readOnly>Keep me logged in</Checkbox></div>
                            <div className="pdn10-right"><Button bsStyle="info" id="btn__login"
                                                                 type="button"
                                                                 onClick={this.globalValidation}>Submit</Button></div>
                        </div>
                    </FormGroup>
                </form>
            </div>
        </section>

    }

}

export default App
