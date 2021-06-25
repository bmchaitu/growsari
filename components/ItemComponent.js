import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons';

const ItemComponent = ({ iconName, iconLabel, left, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.item}>
                <MaterialIcons name={iconName} size={35} color="black" />
                <Text style={{ flex: 1, fontSize: 18, marginLeft: 5 }}>{iconLabel}</Text>
                {left && <MaterialCommunityIcons name="chevron-right" size={25} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        alignItems: 'center',
    }
})

export default ItemComponent;