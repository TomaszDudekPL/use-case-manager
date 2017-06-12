import { USERS_REQUEST, USERS_RESOLVE, USERS_REJECT,
  CREATE_USERS_RESOLVE, CREATE_USERS_REJECT,
  UPDATE_USERS_RESOLVE, UPDATE_USERS_REJECT,
  REMOVE_USERS_RESOLVE, REMOVE_USERS_REJECT } from './usersTypes'
import backand from '@backand/vanilla-sdk'

// add custom actions here!

// generated actions
export const getUsers = (options = {}) => {
  return dispatch => {
    dispatch({
      type: USERS_REQUEST,
    })
    backand.object.getList('users', options)
      .then(response => {
        dispatch({
          type: USERS_RESOLVE,
          payload: {
            data: response.data
          }
        });
      })
      .catch(error => {
        dispatch({
          type: USERS_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const createUsers = (data, options = {}, parameters) => {
  return dispatch => {
    backand.object.create('users', data, options, parameters)
      .then(response => {
        // SUCCESS CALLBACK: Write your code here!
        // Use the following type, and payload structure in case of using dispatch():
        // dispatch({
        //   type: CREATE_USERS_RESOLVE,
        //   payload: {
        //     data: DATA_TO_REDUCER
        //   }
        // });
      })
      .catch(error => {
        dispatch({
          type: CREATE_USERS_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const updateUsers = (id, data, options = {}, parameters) => {
  return dispatch => {
    backand.object.update('users', id, data, options, parameters)
      .then(response => {
        // SUCCESS CALLBACK: Write your code here!
        // Use the following type, and payload structure in case of using dispatch():
        // dispatch({
        //   type: UPDATE_USERS_RESOLVE,
        //   payload: {
        //     data: DATA_TO_REDUCER
        //   }
        // });
      })
      .catch(error => {
        dispatch({
          type: UPDATE_USERS_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const removeUsers = (id, parameters) => {
  return dispatch => {
    backand.object.remove('users', id, parameters)
      .then(response => {
        // SUCCESS CALLBACK: Write your code here!
        // Use the following type, and payload structure in case of using dispatch():
        dispatch({
          type: REMOVE_USERS_RESOLVE,
          payload: {
            data: DATA_TO_REDUCER
          }
        });
      })
      .catch(error => {
        dispatch({
          type: REMOVE_USERS_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}
