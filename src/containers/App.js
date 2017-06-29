import React from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import AuthRouting from './AuthRouting'

export default connect(
  null,
  dispatch => ({
    loginSuccess: data => dispatch({ type: 'firebaseUser/LOG_IN__SUCCESS', data}),
    logoutSuccess: () => dispatch({ type: 'firebaseUser/LOG_OUT__SUCCESS'})
  })
)(
  class App extends React.Component {


    componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // console.log('Logged in. To obiekt propsów:', this.props);
          this.props.loginSuccess({
            displayName: user.displayName,
            email: user.email
          })
          // User is signed in.
          // user.updateProfile({
          //   displayName: "Random Name"
          // }).then(function() {
          //   // Update successful.
          // }, function(error) {
          //   // An error happened.
          // });

        } else {
          console.log('Not logged in');
          this.props.logoutSuccess()
          // No user is signed in.
        }
      });
    }

    render() {
      return <AuthRouting {...this.props}/>
    }
  }
)
