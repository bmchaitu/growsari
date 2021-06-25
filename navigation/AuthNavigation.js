import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';

import LogIn from "../screens/LogIn";
import WelcomeScreen from "../screens/Welcome";
import OTPSCreen from "../screens/OTPSCreen";
import List from '../components/List';

const Stack = createStackNavigator();
const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"Welcome"} component={WelcomeScreen} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="OTP" component={OTPSCreen} />
            <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
    )
};

export default AuthNavigation;