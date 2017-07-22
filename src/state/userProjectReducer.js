const initialState = {
    data: null
};

export default (state = initialState, action = {}) => {
    switch (action.type) {

        case 'USERPROJECT':
            return {
                ...state,
                data: action.data
            };
        // case 'USERNAME':
        //     return{
        //         ...state,
        //         data: action.data
        //     };

        default:
            return state
    }
}
