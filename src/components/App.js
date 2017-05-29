import React from 'react'
import {
    FormGroup,
    FormControl,
    InputGroup,
    Glyphicon,
    ControlLabel,
    Checkbox,
    Button,
    Form
} from 'react-bootstrap'
import {Route, Link, Redirect, withRouter} from 'react-router-dom'


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 300) // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 300)
    }
};

export const AuthButton = withRouter(({history}) => (
    fakeAuth.isAuthenticated ? (
        <p className="auth-paragraph">
            You are logged in as <span className="info">{initialState.username}</span>
            <Link to="/settings">Account Settings</Link>
            <Button bsStyle="danger" bsSize="xsmall" className="auth-btn" onClick={() => {
                fakeAuth.signout(() => history.push('/public'))
            }}>Sign out
            </Button>
        </p>
    ) : (
        <div className="auth">
            <div className="auth-info"><Link to="/protected" className="clr-white">Log me in</Link></div>
            <div className="auth-info"><span className="info">You are not logged in.</span></div>
        </div>
    )
));

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        fakeAuth.isAuthenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
        )
    )}/>
);

export const Public = () => <section id="public"><h1>Aplikacja w budowie</h1></section>;


const initialState = {
    username: 'tdkontakt@gmail.com',
    password: 'tom1234'
};

export class Login extends React.Component {


        state = {
            username: '',
            password: '',
            redirectToReferrer: false

        };


    login = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        let warning = document.getElementById('warning');
        if (!(username === initialState.username && password === initialState.password)) {
            warning.innerHTML = 'Username or Password incorrect'
        }
        else {
            warning.innerHTML = '';
            fakeAuth.authenticate(() => {
                this.setState({redirectToReferrer: true})
            })
        }

    };

    getValidationState() {
        const usernameLength = this.state.username.length;
        const username = this.state.username;
        let oRegExp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9-]+.(?:[a-z]{2}|com|org|net|biz|info)$');
        let result = oRegExp.test(username);
        if (usernameLength >= 9 && result) return 'success';
        else if (usernameLength >= 3 || typeof username === 'number') return 'warning';

    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        const {redirectToReferrer} = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from}/>
            )
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
                                <FormControl type="text" placeholder="Username" id='username' value={this.state.value}
                                             onChange={ e => this.setState({username: e.target.value})}/>
                                <FormControl.Feedback />
                            </InputGroup>
                        </FormGroup>
                        <InputGroup className="pdn10">
                            <InputGroup.Addon><Glyphicon glyph="star"/></InputGroup.Addon>
                            <FormControl type="password" placeholder="Password" id='password' value={this.state.value}
                                         onChange={ e => this.setState({password: e.target.value})}/>
                        </InputGroup>
                        <div className="div__ctrl__login">
                            <div className="pdn10-left"><Checkbox readOnly>Keep me logged in</Checkbox></div>
                            <div className="pdn10-right"><Button bsStyle="info" id="btn__login" type="button"
                                                                 onClick={this.login}>Submit</Button></div>

                        </div>
                    </Form>
                    <div className="registration"><Link to="/registration">Sign me up</Link></div>
                </div>
                <div id="temp"> Please use login: <b>tdkontakt@gmail.com</b> and password: <b>tom1234</b> temporarily</div>
            </section>
        )
    }
}

