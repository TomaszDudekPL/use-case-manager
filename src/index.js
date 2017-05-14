import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar, NavItem} from 'react-bootstrap'
import {AuthButton, PrivateRoute, Public, Protected, Login} from './components/App'
import {BrowserRouter as NewRouter, Route, Link} from 'react-router-dom'
import './assets/stylesheets/base.scss';

const AuthExample = () => (
    <NewRouter>
        <div>
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Use Case Manager</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem><Link to="/public" className="clr-white">Aplication</Link></NavItem>
                    </Nav>
                    <Nav pullRight><AuthButton />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route path="/public" component={Public}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/protected" component={Protected}/>
        </div>
    </NewRouter>
);


ReactDOM.render(
    <AuthExample />,
    document.getElementById('root')
);
