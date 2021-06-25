const AppReducer = (state, action) => {
    switch (action.type) {
        case "SIGN_IN": return {
            ...state,
            user: action.payload.name,
            token: action.payload.access_token
        };
        case "LOG_OUT": return {
            ...state,
            token: null,
            user: ''
        }
        default: return {
            ...state
        }
    }
};

export default AppReducer;