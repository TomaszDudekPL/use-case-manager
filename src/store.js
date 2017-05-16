import {createStore, combineReducers, compose} from 'redux'
import  counterReducer from './State/counterReducer'



const reducers = combineReducers({
   counterReducer: counterReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers());

export default store