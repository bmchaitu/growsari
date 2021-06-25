import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, ActivityIndicator, View, Button, Image, Alert } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useMutation, gql } from "@apollo/react-hooks";
import LottieView from 'lottie-react-native';

import AppInput from '../components/AppInput';
import AppScreen from '../components/AppScreen';

const LogIn = ({ navigation }) => {
    const [loading, setLoading] = React.useState(false);
    const [number, setNumber] = React.useState();

    const GET_OTP = gql`
    mutation GetOtp($mobile_number :  String!){
        generate_otp(mobile_number: $mobile_number){
          code
        }
     }`

    const handleChange = (text) => {
        const num = text.replace(/[^0-9]/, '');
        setNumber(num);
    };

    const [getOTPMutation, { data, error }] = useMutation(GET_OTP, {
        variables: {
            mobile_number: '0' + number
        }
    });

    const handleSubmit = async () => {
        try {
            setLoading(true);
            await getOTPMutation();
            setLoading(false);
            navigation.navigate("OTP", {
                number: number
            })
        }
        catch (err) {
            setLoading(false);
            Alert.alert("Error", err.message);
        }
    }

    if (loading)
        return <LottieView source={require("../assets/groceries-basket.json")} autoPlay loop />

    return (
        <AppScreen style={styles.screen}>
            <Image resizeMode="contain" source={require('../assets/bg.jpeg')} style={styles.image} />
            <AppInput handleChange={handleChange} contact={number} />
            <View style={styles.details}>
                <Icon name="info" size={20} style={{ margin: 5 }} />
                <Text style={{ fontSize: 14 }}>If you have account type the number you used to Signup</Text>
            </View>
            <View style={styles.button}>
                <Button title="SUBMIT" color="#EF4F4F" onPress={handleSubmit} />
            </View>
        </AppScreen>
    )
};

const styles = StyleSheet.create({
    button: {
        width: 250,
        marginTop: 20,
        borderRadius: 5,
        overflow: 'hidden'
    },
    screen: {
        flex: 1,
        backgroundColor: "#3EDBF0",
        alignItems: 'center',
    },
    details: {
        flexDirection: 'row',
        marginTop: 20,
        width: 250,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 20,
        margin: 50
    }
})
export default LogIn;