const initialState = {
  showModal: false
};


const modalReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'OPEN_MODAL':
      return {...state, showModal: true};
    default:
      return state;
  }

};
export default modalReducer;
