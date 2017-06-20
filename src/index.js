import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as NewRouter, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import './assets/stylesheets/base.scss';

import AuthButton from './containers/AuthButton';
import PrivateRoute from './containers/PrivateRoute';
import Public from './containers/Public';
import Login from './containers/Login';
import Protected from './containers/Protected';
import Admin from './containers/Admin';
import Registration from './containers/Registration';
import EditUser from './containers/EditUser';

const AuthExample = () => (
  <NewRouter>
    <div>
      <Navbar
        collapseOnSelect
        fixedTop
        inverse
      >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Use Case Manager</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <NavLink
            className="navlink"
            to="/public"
          >
            Aplication
          </NavLink>
          <NavLink
            className="navlink"
            to="/admin"
          >
            Admin Panel
          </NavLink>
          <Nav pullRight>
            <AuthButton />
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route
        component={Public}
        path="/public"
      />

      <Route
        component={Login}
        path="/login"
      />

      <Route
        component={Admin}
        path="/admin"
      />

      <Route
        component={EditUser}
        path="/settings"
      />

      <Route
        component={Registration}
        path="/registration"
      />

      <PrivateRoute
        component={Protected}
        path="/protected"
      />
    </div>
  </NewRouter>
);


ReactDOM.render(
  <Provider store={store}>
    <AuthExample />
  </Provider>,
  document.getElementById('root')
);
