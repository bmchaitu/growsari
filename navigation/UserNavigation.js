import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { View, Text, StyleSheet } from 'react-native';

import List from '../components/List';
import User from '../components/User';
import Cart from '../screens/Cart';
import TabBarButton from './TabBarButton';

const UserNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: "#EF4F4F",
            inactiveTintColor: "#92967D",
            labelStyle: {
                color: "black"
            }
        }}>
            <Tab.Screen name="Home" component={List} options={{
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={25} color={color} />
            }} />
            <Tab.Screen name="Cart" component={Cart} options={({navigation}) => ({
                tabBarButton : () => <TabBarButton onPress={() => navigation.navigate("Cart")}/>
            })}/>
            <Tab.Screen name="Account" component={User} options={{
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={25} color={color} />
            }} />
            
        </Tab.Navigator>

    )
};


export default UserNavigation;