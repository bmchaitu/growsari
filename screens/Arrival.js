import React, {useState} from 'react';
import {View, Platform, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/core';

import AppScreen from '../components/AppScreen';
import appContext from '../context/appContext';

const Arrival = () => {
  const AppContext = React.useContext(appContext);
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };
  const handleClick = () => {
    AppContext.takeDate(date);
    navigation.navigate("checkout");

  }
  return (
    <AppScreen style={styles.screen}>
      <Text style={styles.text}>
          Select the date on what day the products should be delivered
      </Text>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:10}}>
        <Text style={styles.date}>
          {date.getDate()} - {date.getMonth()} - {date.getFullYear()}
        </Text>
        <Button buttonStyle={styles.button} onPress={() => setShow(true)} title="Select Date" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
      <View style={styles.buttonContainer}>
        <Button title="Confirm and Continue" buttonStyle={styles.continue} onPress={handleClick}/>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  button:{
    height:40, 
    width:100,
    borderRadius:13,
    backgroundColor:'brown'
  },
  buttonContainer:{
    marginTop:30
  },
  continue:{
    borderRadius:10,
    backgroundColor:'#194350',
    width:220,
    height:50
  },
  date:{
    fontSize:18,
    fontWeight:'bold',
    marginRight:10
  },
screen:{
        backgroundColor:"#3EDBF0", 
        flex:1, 
        justifyContent:'center', 
        alignItems:'center',
      },
      text:{
        width:'75%',
        fontSize:18,
        margin:5
    }
});

export default Arrival;