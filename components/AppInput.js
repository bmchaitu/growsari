import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const AppInput = ({ handleChange, number }) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>
                    +91
                </Text>
            </View>
            <TextInput
                placeholder="Mobile Number"
                keyboardType="numeric"
                style={styles.input}
                value={number}
                onChangeText={handleChange}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 250,
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        borderColor: "#EF4F4F"
    },
    text: {
        fontSize: 13,
        marginRight: 8
    },
    textContainer: {
        backgroundColor: '#f0f0f0',
        borderRadius: 1,
    }
});

export default AppInput;