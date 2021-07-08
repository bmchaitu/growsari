import React from 'react';
import { View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {Button} from 'react-native-elements';

import AppScreen from './AppScreen';
import appContext from '../context/appContext';


const Listings = ({navigation}) => {
    const AppContext = React.useContext(appContext);
    return(
        <AppScreen style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                Listing Products
                </Text>
            </View>
            {/* {
                AppContext.orders.products.map((e) => {
                    return(
                            <View key={e.id} style={styles.producstContainer}>
                                <Text>{e.display_name}</Text>
                            </View>
                        )
                })
            } */}
            <FlatList data={AppContext.orders.products} renderItem={({item: product}) => {
                return(
                    <View key={product.id} style={styles.producstContainer}>
                               <Image source={require('../assets/family.jpg')} resizeMode="cover" style={styles.image} />
                               <View style={{flex:1, paddingHorizontal:10, marginVertical:5}}>
                                   <Text style={styles.ptext}>Product Name: {product.display_name}</Text>
                                   <Text style={styles.ptext}>Product Price: Rs {product.price}/-</Text>
                                   <Text style={styles.ptext}>Quantities in Cart: {product.count}</Text>
                               </View>
                    </View>
                )
            }} />
            <Button buttonStyle={styles.button} title="Make Payment" onPress={() => navigation.navigate("checkout")}/>
        </AppScreen>
    )
};

const styles = StyleSheet.create({
    button:{
        alignSelf:'center',
        backgroundColor:"#EF4F4F",
        borderRadius:20,
        marginBottom:25,
        width:"70%",
    },
    header:{
        alignItems:'center',
        backgroundColor:"#FFDADA",
        height:40,
        justifyContent:'center',
        width:"100%",
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold'
    },
    image:{
        alignSelf:'flex-start',
        borderRadius:20,
        height:150,
        width:'100%',
    },
    producstContainer:{
        backgroundColor:"#FFF5AB",
        borderRadius:20,
        height:250,
        margin:10,
        marginHorizontal:15

    },
    ptext:{
        fontSize:15,
        flexWrap:'wrap'
    },
    screen:{
        backgroundColor:"#3EDBF0",
        flex:1,
    }
})
export default Listings;