import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import AppText from './AppText';

const AppButton = ({ children, onPress, style }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.button, style]}>
                <AppText>{children}</AppText>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#EF4F4F',
        borderRadius: 20,
        height: 45,
        justifyContent: 'center',
        margin: 10,
        width: 250,

    }
})

export default AppButton;