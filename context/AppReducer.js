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
        case "LOAD_LIST" : return {
            ...state,
            list : action.payload.list
        };
        case "ADD_TO_CART" : 
            const prevProducts = state.cart;
            const filtered = prevProducts.filter((p) => p.id !== action.payload.product.id);
            return{
             ...state,
            cart : filtered.concat(action.payload.product)
        };
        default: return {
            ...state
        }
    }
};

export default AppReducer;