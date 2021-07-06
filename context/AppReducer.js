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
            case "PUT_ORDER" : 
                const neworder = [];
                neworder.push(action.payload.item);
            return {
                ...state,
                orders : {products : [...neworder]}
            }

            case "PUT_ORDERS" : 
            AsyncStorage.removeItem('Cart');
            return{
                ...state,
                orders : {products:[...action.payload.items]},
                cart: []
            }
            case "LOAD_ORDERS" : return {
                ...state,
                prevOrders : [...action.payload.a]
            }
            case "PUT_DATE" : 
            const date = new Date();
                return{
                    ...state,
                    orders : {
                        ...state.orders, 
                        deliveryDate : action.payload.date, 
                        orderedDate : `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
                    }
                }
        default: return {
            ...state
        }
    }
};

export default AppReducer;