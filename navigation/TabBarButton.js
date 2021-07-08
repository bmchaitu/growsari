import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const TabBarButton = ({onPress}) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
        <MaterialCommunityIcons name="cart" size={30}/>
    </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        backgroundColor:"#EF4F4F",
        borderColor:'black',
        borderRadius : 30,
        borderWidth:5,
        bottom:15,
        height:60,
        justifyContent:'center',
        width:60
    }
});

export default TabBarButton;