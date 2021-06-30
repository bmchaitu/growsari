import React from 'react';
import {View, Text, StyleSheet, Modal, Button } from 'react-native';

const Cart = () => {
    const [isVisible, setVisible] = React.useState(true);
    return(
        <View>
            <Modal visible={isVisible}>
                <Text>Hello World</Text>
                <Button onPress={() => setVisible(false)} title="Hide"/>
            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default Cart;