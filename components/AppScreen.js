import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';

const AppScreen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    screen: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
});

export default AppScreen;