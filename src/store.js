import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  counterReducer from './state/counterReducer';
import user from './state/user/userReducer';
import backand from '@backand/vanilla-sdk';

let config = {
  appName: 'test1212',
  anonymousToken: 'c03c9928-4c67-4cfe-b44f-282c8a45ab47',
  signUpToken: 'a5cf6a2f-e8e5-4b48-b216-a074e3786f61'
};
backand.init(config);


const reducers = combineReducers({
  counterReducer: counterReducer,
  user

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);


export default store;
