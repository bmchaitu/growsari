import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { RadioButton } from 'react-native-paper';
import {Button} from 'react-native-elements';
import LottieView from 'lottie-react-native';

import AppScreen from '../components/AppScreen';
import appContext from '../context/appContext';

const CheckOut = () => {
    const [loading, setLoading] = React.useState(false);
    const [checked, setChecked] = React.useState("first");
    const navigation = useNavigation();
    const AppContext = React.useContext(appContext);
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
        if(AppContext.orders.products.length === 1)
        AppContext.removeFromCart(AppContext.orders.products[0])
        else
        AppContext.emptyCart();
        AppContext.removeOrders();
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
            <Text style={styles.text}>To be Delivered On: {AppContext.orders.deliveryDate}</Text>
            <Text style={styles.text}>Payable Amount: {total}</Text>
            <View style={{ borderRadius:20, borderWidth:2, marginTop:30}}>
                <Text style={[styles.text, {textAlign:'center', marginTop:10}]}>
                    Select Payment Type
                </Text>
                <View style={{flexDirection:'row', padding:10}}>
                    <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                    />
                    <Text style={{fontSize:16, alignSelf:'center'}}>
                        Make Payment with Debit Card
                    </Text>
                </View>
                <View style={{flexDirection:'row',padding:10}}>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                    />
                    <Text style={{fontSize:16, alignSelf:'center'}}>
                        Make Payment with UPI
                    </Text>
                </View>
                <View style={{flexDirection:'row',padding:10}}>
                    <RadioButton
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('third')}
                    />
                    <Text style={{fontSize:16, alignSelf:'center'}}>
                        Make Payment through Online Banking
                    </Text>
                </View>
            </View>
            </View>
            <Button title="Proceed" buttonStyle={styles.button} onPress={handleOrder}/>
        </AppScreen>
    )
};

const styles = StyleSheet.create({
    button:{
        marginTop:20
    },
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
        borderRadius:5,
        marginTop:20,
        padding:10
    }
});

export default CheckOut;