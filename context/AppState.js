import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppContext from "./appContext";
import AppReducer from './AppReducer';

export default (props) => {
    const initialState = {
        user: '',
        list: [],
        token: null
    }

    const [state, dispatch] = React.useReducer(AppReducer, initialState);

    const Authenticate = (userdata) => {
        if (userdata)
            AsyncStorage.setItem('UserData', JSON.stringify({ name: userdata.verify_otp.name, access_token: userdata.verify_otp.access_token }));
        dispatch({
            type: "SIGN_IN",
            payload: { name: userdata.verify_otp.name, access_token: userdata.verify_otp.access_token }
        });
    };

    const logOut = () => {
        AsyncStorage.removeItem('UserData');
        dispatch({
            type: 'LOG_OUT',
        })
    };

    const loadList = () => {

    };

    const { user, token, list } = state;

    return (
        <AppContext.Provider value={{
            user,
            token,
            list,
            Authenticate,
            logOut
        }}>
            {props.children}
        </AppContext.Provider>
    );
}
