const initialState = {
    userData: null
};
const getData = (state = initialState, action) => {
    const newState = action.payload;
    switch (action.type) {
        case "GET_USERS_SUCCESS":
            return { userData: newState };
        default:
            return state;
    }
};

export default getData;
