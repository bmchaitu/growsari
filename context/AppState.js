import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


import AppContext from "./appContext";
import AppReducer from './AppReducer';

export default (props) => {
    const initialState = {
        user: '',
        list: [],
        token: null,
        cart:[]
    }

    const [state, dispatch] = React.useReducer(AppReducer, initialState);

    const Authenticate = (userdata) => {
        if (userdata)
            AsyncStorage.setItem('UserData', JSON.stringify({ name: userdata.verify_otp.name, access_token: userdata.verify_otp.access_token }));
            AsyncStorage.setItem('Token',userdata.verify_otp.access_token);
        dispatch({
            type: "SIGN_IN",
            payload: { name: userdata.verify_otp.name, access_token: userdata.verify_otp.access_token }
        });
    };

    const logOut = () => {
        AsyncStorage.removeItem('UserData');
        AsyncStorage.removeItem('Cart');
        dispatch({
            type: 'LOG_OUT',
        })
    };

    const addToCart = (product) => {
        dispatch({
            type:"ADD_TO_CART",
            payload:{product}
        })
    };

    const removeFromCart = (product) =>{
        dispatch({
            type:"REMOVE_FROM_CART",
            payload: {
                product
            }
        })
    }

    const loadCart = (items) => {
        dispatch({
            type:"LOAD_CART",
            payload:{items}
        })
    };
    const { user, token, list, cart } = state;

    return (
        <AppContext.Provider value={{
            user,
            token,
            list,
            cart,
            Authenticate,
            logOut,
            addToCart,
            removeFromCart,
            loadCart
        }}>
            {props.children}
        </AppContext.Provider>
    );
}
