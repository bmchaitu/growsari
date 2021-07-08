import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, RefreshControl} from 'react-native';

import appContext from '../context/appContext';

import AppScreen from './AppScreen';
const Order = () => {
    const AppContext = React.useContext(appContext)
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        AppContext.loadOrders();
        setRefreshing(false);
    }
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
        <FlatList 
        refreshControl={
            <RefreshControl onRefresh={onRefresh} 
                            refreshing={refreshing}
            />
        } 
        data={AppContext.prevOrders} 
        renderItem={({item: order}) => {
            return(
                <View style={{ borderRadius:5,
                    marginHorizontal:18,
                    marginVertical:2.5,
                    padding:5,
                    width:"90%",}}>
                    <View style={styles.listItem}>
                        <View style={{flexDirection:'column', marginLeft:10, flex:1,}}>
                            <Text style={[styles.text, {fontSize:15, fontWeight:'bold'}]}>Order Id#: {order.id}</Text>
                            <Text style={styles.text}>Ordered On: {order.deliveryDate}</Text>
                            <Text style={styles.text}>Delivery On: {order.orderedDate}</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:"#FFF", padding:10}}>
                        <Text style={{textAlign:'center', fontWeight:"bold"}}>Product(s) List</Text>
                    {
                order.products.map((p) => (
                    <View key={p.id} style={{backgroundColor:"#fff",borderWidth:1, borderRadius:5,padding:3, marginTop:5, flexDirection:"row",}}>
                        <View>
                            <Image source={require('../assets/Package.png')} style={{height:50, width:50}}/>
                        </View>
                        <View style={{flex:1}}>
                        <Text style={{flexWrap:"wrap", fontSize:15}}>Product Name: {p.display_name}</Text>
                        <Text style={styles.text}>Product Price: {p.price}</Text>
                        <Text style={styles.text}>Quantity Bought: {p.count}</Text>
                        </View>
                    </View>
                ))
                }
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