import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import AppScreen from '../components/AppScreen';
import appContext from '../context/appContext';

const CheckOut = () => {
    const AppContext = React.useContext(appContext);
    return(
        <AppScreen style={styles.screen}>
            <View style={styles.view}>
            <Text style={styles.text}>There are products orderd: {AppContext.orders.products.length}</Text>
            <Text style={styles.text}>To be Delivered On:{new String(AppContext.orders.orderedDate)}</Text>
            <Text style={styles.text}>Ordered on:{new String(AppContext.orders.deliveryDate)}</Text>
            </View>
            <Button title="Go Home"/>
        </AppScreen>
    )
};

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#3EDBF0", 
        flex:1, 
        alignItems:'center',
    },
    text:{
        fontSize:18
    },
    view : {
        marginTop:"20%",
        marginBottom:"20%"
    }
});

export default CheckOut;