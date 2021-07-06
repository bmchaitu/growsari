import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

import appContext from '../context/appContext';

import AppScreen from './AppScreen';
const Order = () => {
        const AppContext = React.useContext(appContext)
        
    React.useEffect(() => {
        AppContext.loadOrders();
    },[]);
    return(
     <AppScreen style={styles.screen}>
        <View style={styles.header}>
            <Text style={styles.headerText}>
                Orders List
            </Text>
        </View>
        <FlatList data={AppContext.prevOrders} renderItem={({item}) => {
            return(
                <View style={styles.listItem}>
                <View>
                    <Image source={require('../assets/Package.png')} style={styles.image} />
                </View>
                <View style={{flexDirection:'column', marginLeft:10, flex:1}}>
                <Text style={[styles.text, {fontSize:15}]}>Order Id#: {item.orderId}</Text>
                <Text style={styles.text}>{item.display_name}</Text>
                <Text style={styles.text}>Count: {item.count}</Text>
                <Text style={styles.text}>Gross: {(item.count*item.price).toFixed(2)}</Text>
                <Text style={styles.text}>Ordered On: {item.orderedOn}</Text>
                <Text style={styles.text}>Delivery On: {item.DeliveredOn}</Text>
                </View>
            </View>
            )
        }} />
     </AppScreen>
    )
};

const styles = StyleSheet.create({
    header:{
        alignItems:'center',        
        backgroundColor:"#F3C583",
        height:40,
        justifyContent:'center',
        width:'100%',

    },
    headerText : {
        fontSize:25,
        fontWeight:'bold'
    },
    listItem:{
        backgroundColor:"#fff",
        borderRadius:5,
        marginHorizontal:18,
        marginVertical:10,
        padding:5,
        width:"90%",
        flexDirection:'row',
    },
    image:{
        height:90,
        width:90,
        borderRadius:45
    },
    screen:{
        backgroundColor:"#3EDBF0",
        flex:1
    },
    text:{
        flexWrap:'wrap'
    }
});

export default Order;