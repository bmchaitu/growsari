import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons'

const SmallButton = ({name}) => {
    return(
        <View style={styles.button}>
            <MaterialCommunityIcons name={name} />
        </View>
    )
};

export default SmallButton;