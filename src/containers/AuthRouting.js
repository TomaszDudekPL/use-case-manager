import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as NewRouter, Route, NavLink } from 'react-router-dom';
import AuthButton from './AuthButton';
import PrivateRoute from './PrivateRoute';
import Public from './Public';
import Login from './Login';
import Protected from './Protected';
import Admin from './Admin';
import Registration from './Registration';
import EditUser from './EditUser';
import ProtectedUseCaseView from './ProtectedUseCaseView'

const AuthRouting = () => (
  <NewRouter>
    <div>
      <Navbar
        collapseOnSelect
        fixedTop
        inverse
      >
        <Navbar.Header>
          <Navbar.Brand>
            {/*<a href="#">Use Case Manager</a>*/}
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
      <PrivateRoute
          component={ProtectedUseCaseView}
          path="/usecase"
      />
    </div>
  </NewRouter>
);


export default AuthRouting;


