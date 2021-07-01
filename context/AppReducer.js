import AsyncStorage from "@react-native-async-storage/async-storage";

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
            const prevProducts = [...state.cart];
            const filtered = prevProducts.filter((p) => p.id !== action.payload.product.id);
            AsyncStorage.setItem('Cart',JSON.stringify(filtered.concat(action.payload.product)));
            return{
             ...state,
            cart : filtered.concat(action.payload.product)
        };

        case "REMOVE_FROM_CART" : 
            const prevProductsList = [...state.cart];
            const filtereds = prevProductsList.filter((p) => p.id!== action.payload.product.id);
            AsyncStorage.setItem('Cart', JSON.stringify(filtereds));
            return{
                ...state,
                cart:filtereds
            };
        
            case "LOAD_CART" : return{
                ...state,
                cart : [...action.payload.items]
            }

        default: return {
            ...state,
            
        }
    }
};

export default AppReducer;