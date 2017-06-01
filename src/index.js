import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar} from 'react-bootstrap'

import {AuthButton, PrivateRoute, Public, Login} from './components/App'
import Protected from './components/counter'
import {BrowserRouter as NewRouter, Route, Link, NavLink} from 'react-router-dom'
import './assets/stylesheets/base.scss';
import {Provider} from "react-redux";
import store from './store'
import Admin from './components/admin'
import Registration from './components/Registration'
import EditUser from './components/EditUser'

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
                        <NavLink to="/public" className="navlink">Aplication</NavLink>
                        <NavLink to="/admin" className="navlink">Admin Panel</NavLink>
                    <Nav pullRight><AuthButton /></Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route path="/public" component={Public}/>
            <Route path="/login" component={Login}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/settings" component={EditUser}/>
            <Route path="/registration" component={Registration}/>
            <PrivateRoute path="/protected" component={Protected}/>
        </div>
    </NewRouter>
);


ReactDOM.render(
    <Provider store={store}>
    <AuthExample />
    </Provider>,
    document.getElementById('root')
);
