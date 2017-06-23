import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  counterReducer from './state/counterReducer';

import firebaseUser from './state/firebaseUser'
import firebase from 'firebase'



const firebaseConfig = {
  apiKey: "AIzaSyBjKNFEKmOHUBLLLQTzXkF2PBj4QHgVpNM",
  authDomain: "use-case-manager.firebaseapp.com",
  databaseURL: "https://use-case-manager.firebaseio.com",
  projectId: "use-case-manager",
  storageBucket: "use-case-manager.appspot.com",
  messagingSenderId: "407999254779"
};
firebase.initializeApp(firebaseConfig);



const reducers = combineReducers({
  counterReducer: counterReducer,
  // user,
  firebaseUser

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);


export default store;
