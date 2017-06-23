/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component,isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    )}
  />
);

const mapStateToProps = (state) => {

  return { isAuthenticated: state.firebaseUser.data !== null};

};


export default withRouter(connect(mapStateToProps)(PrivateRoute));


