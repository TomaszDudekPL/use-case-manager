const initialState = {
  data: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'firebaseUser/LOG_IN__SUCCESS':
      return {
        ...state,
        data: action.data
      };
    case 'firebaseUser/LOG_OUT__SUCCESS':
      return initialState;
    default:
      return state
  }
}
