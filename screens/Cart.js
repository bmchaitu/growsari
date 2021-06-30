import React from 'react';
import {View, Text, StyleSheet, Modal, Button } from 'react-native';

import AppScreen from '../components/AppScreen';

const Cart = () => {
    const [isVisible, setVisible] = React.useState(true);
    return(
        <AppScreen>
            <View>
            <Text>Hello World</Text>
        </View>
        </AppScreen>
    )
};

const styles = StyleSheet.create({

});

export default Cart;