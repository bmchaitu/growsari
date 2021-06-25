import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

import AppScreen from './AppScreen';


const ListItem = ({ item }) => {
    return (
        <TouchableWithoutFeedback onPress={() => console.log("Hello")}>
            <View style={styles.listitem}>
                <View style={styles.imageContainer}>
                    <Image source={require("../assets/list.jpg")} style={styles.image} />
                </View>
                <View style={styles.detail}>
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={styles.subheading} >{item.subTitle}</Text>
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
        margin: 5
    },
    subheading: {
        fontSize: 16,
        fontWeight: '500'
    },
    text: {
        fontSize: 18,
        fontWeight: '900'
    },

});

export default ListItem;