import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import AppButton from '../components/AppButton';

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/Background-1.png')} style={styles.background}>
            <AppButton style={{ backgroundColor: '#EF4F4F', }} onPress={() => console.log("clikce")}>
                Register
            </AppButton>
            <AppButton
                onPress={() => navigation.navigate("LogIn")}
                style={{ backgroundColor: "#3EDBF0" }}
            >
                SignIn
            </AppButton>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 35
    },
})

export default WelcomeScreen;