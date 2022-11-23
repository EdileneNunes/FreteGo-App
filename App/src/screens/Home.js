import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/authContext'
import CustomButton from '../components/CustomButton';
import MapView from 'react-native-maps';


const Home = ({ navigation }) => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
        <MapView
          style={styles.maps}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={styles.main}>
        <Text style={styles.text}>Olá, {state.name}</Text>
        </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-around',
    backgroundColor: '#272933'

  },
  text: {
    fontSize: 30,
    margin: 40
  },
  maps: {
    height: '60%',
    width:'100%'
  },
  main: {
    height: '40%',
    backgroundColor: '#272933',
    width:'100%',
    flex: 1
  }
})

export default Home;
