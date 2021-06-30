import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

import AppScreen from './AppScreen';


const ListItem = ({ item, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.listitem}>
                <View style={styles.imageContainer}>
                    <Image source={require("../assets/list.jpg")} style={styles.image} />
                </View>
                <View style={styles.detail}>
                    <Text style={styles.text}>{item.display_name}</Text>
                    <View style={styles.subDetails}>
                        <Text style={styles.subheading} >Price {item.price}</Text>
                        <Text style={styles.subheading}>Max Qty: {item.max_qty}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
};

const styles = StyleSheet.create({
    detail: {
        margin: 10,
    },
    imageContainer: {
        height: 70,
        width: 70,
        backgroundColor: '#EF4F4F',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    listitem: {
        height: 90,
        width: 350,
        borderRadius: 20,
        backgroundColor: "#3EDBF0",
        flexDirection: 'row',
        padding: 10,
        margin: 5,
        overflow:'hidden'
    },
    subheading: {
        fontSize: 13,
        fontWeight: '500'
    },
    subDetails:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'70%'
    },
    text: {
        fontSize: 15,
        fontWeight: '900',
        flexWrap:'wrap',
        width:'70%'
    },

});

export default ListItem;