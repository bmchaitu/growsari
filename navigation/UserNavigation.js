import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { View, Text, StyleSheet } from 'react-native';

import Arrival from '../screens/Arrival';
import List from '../components/List';
import User from '../components/User';
import Cart from '../screens/Cart';
import Order from '../components/Order';
import TabBarButton from './TabBarButton';
import CheckOut from '../screens/CheckOut';
import Listings from '../components/Listings';

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
            <Tab.Screen name="Orders" component={Order} options={{
                tabBarButton: () => (
                    <View style={{width:0, height:0}}></View>
                )
            }} />
            <Tab.Screen name="checkout" component={CheckOut} options={{
                tabBarButton: () => (
                    <View style={{width:0, height:0}}></View>
                )
            }}/>
            <Tab.Screen name="arrivals" component={Arrival} options={{
                tabBarButton: () => (
                    <View style={{width:0, height:0}}></View>
                )
            }}/>
            <Tab.Screen name="listings" component={Listings} options={{
                tabBarButton: () => (
                    <View style={{width:0, height:0}}></View>
                )
            }}/>

            
        </Tab.Navigator>

    )
};


export default UserNavigation;