import { StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'

import { Context } from '../context/authContext'

import Home from './Home'
import Cars from './car/Cars'

const Tab = createBottomTabNavigator();

const Routes = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)
    return (
        <Tab.Navigator  screenOptions={{
            headerRight: () => (
                <Entypo
                    name='log-out'
                    size={20}
                    style={{ margin: 10 }}
                    onPress={() => dispatch({ type: 'logOut' })}
                    color="#000"
                
                />
            )            
        }} >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Entypo name='home' size={30} />
                    ),
                }}
            />
        

            {state.isAdmin ? (
                <Tab.Screen
                    name="Cars"
                    component={Cars}
                    options={{
                        tabBarIcon: () => (
                            <Entypo name='car' size={30} />
                        )
                    }}
                />
            ) : (
                <></>
            )
            }

        </Tab.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#272933'
        
      }
})