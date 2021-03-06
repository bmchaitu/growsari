import React from 'react';
import {View, Text, StyleSheet, Image, FlatList } from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';

import AppScreen from '../components/AppScreen';
import appContext from '../context/appContext';

const Cart = () => {
    const navigation = useNavigation();
    const [isVisible, setVisible] = React.useState(true);
    const AppContext = React.useContext(appContext);
    const handleDelete = (item) => {
        AppContext.removeFromCart(item);
    }
    const handleBuyNow = (item) => {
        AppContext.takeOrder(item);
        navigation.navigate("arrivals");
    }
    const buyAll = () => {
        AppContext.takeOrders(AppContext.cart);
        navigation.navigate("arrivals")
    }
    const cartItem = ({item}) => {
        return(<View style={styles.item}>
            <Image 
            resizeMode="cover" source={require('../assets/cart.jpg')} style={styles.image} />
            <View style={styles.itemDetails}>
                <Text style={{flexWrap:"wrap", fontSize:15}}>
                    {item.display_name}
                </Text> 
                <Text style={{flexWrap:"wrap"}}>
                    Price: {item.price}
                </Text>
                <Text>
                    Items Count: {item.count}
                </Text>
                <Text style={{flexWrap:"wrap"}}>
                    Gross Price: {(item.count * item.price).toFixed(2)}
                </Text>
                <Button onPress={() => handleDelete(item)} buttonStyle={styles.button} title="Delete"/>
                <Button onPress={() => handleBuyNow(item)} buttonStyle={[styles.button, {backgroundColor:'#CD113B'}]} title="Order Now"/>
            </View>
            </View>)
    }

    return(
        <AppScreen>
            {
                AppContext.cart.length === 0 ? 
                    <AppScreen style={styles.noItems}>
                        <Text style={{fontSize:25}}>
                            No Items in cart
                        </Text>
                    </AppScreen> : 
                    <View style={{marginBottom:100}}>
                        <FlatList data={AppContext.cart} renderItem={cartItem} />
                        <Button title="Order All Items" buttonStyle={{marginTop:10}} onPress={buyAll}/>
                    </View>
            }
        </AppScreen>
    )
};

const styles = StyleSheet.create({
button:{
    height:40,
    width:120,
    marginTop:10
},
    image : {
    borderRadius:20,
    height:200,
    width:220,
    marginTop:10
},
item:{
    flexDirection:'row',
    backgroundColor:"#CCF2F4",
    marginHorizontal:10,
    marginTop:5,
    borderRadius:10
},
itemDetails:{
    margin:10,
    width:'100%',
    flex:1,
},
noItems:{
    alignItems:'center',
    justifyContent:'center'
}
});

export default Cart;