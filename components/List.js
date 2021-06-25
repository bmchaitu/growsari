import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';

import AppScreen from './AppScreen';
import ListItem from './ListItem';

const List = ({ navigation }) => {
    const list = [
        { id: "1", title: 'Item1', subTitle: 'sub Title1' },
        { id: "2", title: 'Item2', subTitle: 'sub Title2' },
        { id: "3", title: 'Item3', subTitle: 'sub Title3' },
        { id: "4", title: 'Item4', subTitle: 'sub Title4' },
        { id: "5", title: 'Item5', subTitle: 'sub Title5' },
        { id: "6", title: 'Item6', subTitle: 'sub Title6' },
        { id: "7", title: 'Item7', subTitle: 'sub Title7' }

    ];
    return (
        <AppScreen>
            <View style={styles.container}>
                <Image resizeMode="contain" source={require("../assets/image.jpeg")} style={styles.image} />
                <FlatList data={list} renderItem={({ item }) => <ListItem item={item} />} />
            </View>
        </AppScreen>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 500,
        padding: 10,

    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
    }
});

export default List;