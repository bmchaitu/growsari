import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import LottieView from 'lottie-react-native';

import AppScreen from '../components/AppScreen';
import appContext from '../context/appContext';

const CheckOut = () => {
    const [loading, setLoading] = React.useState(false);
    const navigation = useNavigation();
    const AppContext = React.useContext(appContext);
    React.useEffect(() => {
        if(AppContext.orders.products.length === 0)
        navigation.navigate('Home');
      }, [])
    let total = 0;
    AppContext.orders.products.forEach(element => {
        total += (element.count*element.price)
    });
    const handleOrder = async () => {
        setLoading(true);
        await fetch("https://growsari-cf088-default-rtdb.firebaseio.com/orders.json",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body : JSON.stringify({
                products: [...AppContext.orders.products],
                orderedDate : AppContext.orders.orderedDate,
                deliveryDate : AppContext.orders.deliveryDate
            }),
        });
        await AppContext.loadOrders();
        setLoading(false);
        navigation.navigate("Home");
    }

    if (loading)
        return <LottieView source={require("../assets/groceries-basket.json")} autoPlay loop />

    return(
        <AppScreen style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Payments</Text>
            </View>
            <View style={styles.view}>
            <Text style={styles.text}>Total Products Ordered: {AppContext.orders.products.length}</Text>
            <Text style={styles.text}>Ordered On: {AppContext.orders.orderedDate}</Text>
            <Text style={styles.text}>To be Delivered On:{AppContext.orders.deliveryDate}</Text>
            <Text style={styles.text}>Payable Amount: {total}</Text>
            </View>
            <Button title="Proceed" onPress={handleOrder}/>
        </AppScreen>
    )
};

const styles = StyleSheet.create({
    header:{
        height:40,
        width:"100%",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#FFE2E2"
      },
    headerText:{
        fontSize:20
    },
    screen:{
        backgroundColor:"#3EDBF0", 
        flex:1, 
        alignItems:'center',
    },
    text:{
        fontSize:18
    },
    view : {
        backgroundColor:"#fff",
        width:"90%",
        paddingHorizontal:10,
        marginBottom:"20%",
        borderRadius:5,
        marginTop:20,
        padding:10
    }
});

export default CheckOut;