// SET INITIAL VALUE OF THE REDUCER'S STATE
const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        // CHECK TYPE
        case 'SET_CURRENT_USER':
            return {
                // ALWAYS RETURN THE FULL STATE BECAUSE REACT WONT UPDATE THE COMPONENT OTHERWISE. IT NEEDS TO BE A NEW OBJECT FOR THE STATE TO CHANGE
                ...state,
                // REPLACE THE PROPERTY VALUE IN THE STATE WITH THE PAYLOAD
                currentUser: action.payload
            }
        // IF NO TYPE IS SET
        default:
            return state;
    }
};

export default userReducer;