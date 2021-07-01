import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthNavigation from "./AuthNavigation";
import appContext from '../context/appContext';
import UserNavigation from "./UserNavigation";

const AppNavigation = (props) => {
    const AppContext = React.useContext(appContext);

    const retriveUser = async () => {
        const res = await AsyncStorage.getItem('UserData');
        if (res) {
            const data = JSON.parse(res);
            AppContext.Authenticate({ verify_otp: data });
            const prevCart = await AsyncStorage.getItem('Cart');
            AppContext.loadCart(JSON.parse(prevCart));
        }
    };

    React.useEffect(() => {
        retriveUser();
    }, [props]);

    return (
        <NavigationContainer>
            {!AppContext.token && <AuthNavigation />}
            {AppContext.token && <UserNavigation />}
        </NavigationContainer>
    )
};

export default AppNavigation;