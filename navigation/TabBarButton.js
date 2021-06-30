import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const TabBarButton = ({onPress}) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
        <MaterialCommunityIcons name="cart" size={25}/>
    </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        backgroundColor:"#EF4F4F",
        borderColor:'white',
        borderRadius : 40,
        borderWidth:10,
        bottom:20,
        height:80,
        justifyContent:'center',
        width:80
    }
});

export default TabBarButton;