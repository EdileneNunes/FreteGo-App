import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/authContext'
import CustomButton from '../components/CustomButton';
import MapView from 'react-native-maps';


const Home = ({ navigation }) => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
<<<<<<< HEAD
<<<<<<< HEAD
      <Text style={styles.text}>Olá, {state.name}</Text>
      {/* <CustomButton text="Restaurants" onPress={() => navigation.navigate("Restaurants")} />
      <CustomButton text="Reviews" onPress={() => navigation.navigate("Reviews")} />
      <CustomButton text="Users" onPress={() => navigation.navigate("Users")} /> */}
=======
=======
>>>>>>> 7b7a88be35362ffa95a69a40d8ff767fa217cb1a
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

<<<<<<< HEAD
>>>>>>> 4ff4c605da55a5b2ee722fd7c263fdbeafab771f
=======
>>>>>>> 7b7a88be35362ffa95a69a40d8ff767fa217cb1a
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
<<<<<<< HEAD
<<<<<<< HEAD
    justifyContent:'space-around'
    
=======
    justifyContent: 'space-around',
    backgroundColor: '#272933'

>>>>>>> 4ff4c605da55a5b2ee722fd7c263fdbeafab771f
=======
    justifyContent: 'space-around',
    backgroundColor: '#272933'

>>>>>>> 7b7a88be35362ffa95a69a40d8ff767fa217cb1a
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
