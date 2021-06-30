import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Text, Modal } from 'react-native';
import { gql, useQuery } from "@apollo/react-hooks";
import {Button} from 'react-native-elements';
import LottieView from 'lottie-react-native';

import appContext from '../context/appContext';
import AppScreen from './AppScreen';
import ListItem from './ListItem';
import ProductDetails from '../components/ProductDetails';

const List = ({ navigation }) => {
    var list;
    const [modalVisibility, setVisibility] = React.useState(false);
    const [product, setProduct] = React.useState({display_name:"", price:""});
    const AppContext = React.useContext(appContext);
    const GET_PRODUCTS = gql`
       query{
        get_products_delta(last_updated: ""){
            last_updated
            products {
            id
            brand_name
            display_name
            price
            brand_image
            max_qty
            }
          }
       } `
       const {data, loading, error} = useQuery(GET_PRODUCTS);
       if(loading && !data)
        return <LottieView source={require("../assets/groceries-basket.json")} autoPlay loop />
    
    const handleToggle = (value) => {
        setVisibility(value);
    }
    return (
        <AppScreen>
            <View style={styles.container}>
                <Image resizeMode="contain" source={require("../assets/image.jpeg")} style={styles.image} />
                <FlatList   data={data.get_products_delta.products} 
                            renderItem = {
                                ({ item }) => {
                                    return( <ListItem item={item} 
                                            onPress={() => {
                                            setProduct(item);
                                            setVisibility(true)}
                                        } /> )    
                                }} />
                <ProductDetails modalVisibility={modalVisibility} handleToggle={handleToggle} product={product} />
            </View>
        </AppScreen>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 500,
        padding: 10,

    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
    },
    
});

export default List;