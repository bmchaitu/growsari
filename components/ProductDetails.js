import React from 'react';
import {View, Text, StyleSheet, Modal, Image, TouchableWithoutFeedback} from 'react-native';
import { Button } from 'react-native-elements';
import {MaterialCommunityIcons} from 'react-native-vector-icons'

import appContext from '../context/appContext';

const ProductDetails = ({modalVisibility, handleToggle, product}) => {
    const AppContext = React.useContext(appContext);
    const [count,setCount] = React.useState(1);
    const handleClose = () => {
        setCount(1);
        handleToggle(false);
    };

    const handleAddToCart = (obj) => {
        AppContext.addToCart(obj);
        handleToggle(false);
    }
    return(
        <View>
            <Modal transparent visible={modalVisibility} animationType="slide" >
                    <View style={styles.modal}>
                        <View style={{backgroundColor:"#3EDBF0", borderRadius:30}}>
                        <View style={{backgroundColor:"#3EDBF0", borderRadius:20,padding:10}}>
                        <Image source={require('../assets/grocery-bag.png')} style={styles.image} />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.pname}>{product.display_name}</Text>    
                            <Text style={{fontSize:16}}>Rs. {product.price} per quantity</Text>
                            <View style={styles.buttonContainer}>
                                <Text style={{fontSize:16}}>Quantity: </Text>
                                <View style={styles.button}>
                                    <TouchableWithoutFeedback onPress={() => setCount((c) => c+1)}>
                                        <MaterialCommunityIcons name={"plus"} size={20}/>
                                    </TouchableWithoutFeedback>
                                </View>
                                <Text style={{fontSize:18, marginHorizontal:8}}>{count}</Text>
                                <TouchableWithoutFeedback onPress={() => setCount((c) => c-1)}>
                                <View style={styles.button}>
                                    <MaterialCommunityIcons name={"minus"} size={20}/>
                                </View>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={{flexDirection:'row', marginTop:20, margin:10}}>
                            <Button onPress={handleClose} buttonStyle={styles.buttons} title="Close"/>
                            <Button buttonStyle={{width:200,height:40,margin:10,backgroundColor:'#BF1363'}} 
                                    title="Add To Cart" 
                                    onPress={() => handleAddToCart({...product, count})}
                                    />
                            </View>
                        </View>
                        </View>
                    </View>    
                </Modal>
        </View>
    )
};
const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        width:30,
        height:30,
        backgroundColor:'gray',
        borderRadius:5,
        marginHorizontal:2,
        justifyContent:'center'
    },
    buttons:{
        backgroundColor:'blue',
        width:100,
        height:40,
        margin:10
    },
    buttonContainer:{
        alignItems:'center',
        flexDirection:'row',
        marginTop:30
    },
    details:{
        margin:10,
        marginTop:20,
        backgroundColor:"#3EDBF0"
    },
    image:{
        borderRadius:20,
        height:180,
        width:"100%",
        borderColor:'black', 
        borderTopWidth:10
    },
    modal:{
        paddingBottom:0,
        flex:1,
        justifyContent:'flex-end',
        borderRadius:20,
        marginBottom:0,
    },
    pname:{
        fontSize:25,
        fontWeight:'800'
    },
    productdetails:{
        backgroundColor:'red',
        padding:15,
    }
})

export default ProductDetails;