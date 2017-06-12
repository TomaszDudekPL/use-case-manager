import { USERS_REQUEST, USERS_RESOLVE, USERS_REJECT,
  CREATE_USERS_RESOLVE, CREATE_USERS_REJECT,
  UPDATE_USERS_RESOLVE, UPDATE_USERS_REJECT,
  REMOVE_USERS_RESOLVE, REMOVE_USERS_REJECT } from './usersTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case USERS_REQUEST:
      return {loading: true};
    case USERS_RESOLVE:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.data,
        loaded: true
      });
    case USERS_REJECT:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error,
        loaded: false
      });
    case CREATE_USERS_RESOLVE:
      // Write your code here!
      // Use action.payload to access data
      // EXAMPLE:
      // return Object.assign({}, state, {
      //   data: [action.payload.data, ...state.data]
      // });
  	case CREATE_USERS_REJECT:
      return Object.assign({}, state, {
        error: action.payload.error
      });
  	case UPDATE_USERS_RESOLVE:
      // Write your code here!
      // Use action.payload to access data
      // EXAMPLE:
      // return Object.assign({}, state, {
      //   data: [action.payload.data, ...state.data]
      // });
  	case UPDATE_USERS_REJECT:
      return Object.assign({}, state, {
        error: action.payload.error
      });
  	case REMOVE_USERS_RESOLVE:
      // Write your code here!
      // Use action.payload to access data
      // EXAMPLE:
	    // let newData = state.data.filter(item => item.id != action.payload.data.id);
      // return Object.assign({}, state, {
      //   data: newData
      // });
  	case REMOVE_USERS_REJECT:
        return Object.assign({}, state, {
          error: action.payload.error
        });
    default:
      return state;
  }
}
