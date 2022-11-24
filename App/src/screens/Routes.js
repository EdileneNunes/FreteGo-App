import { StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'

import { Context } from '../context/authContext'

import UserRoutes from './user/UserRoutes'
import Home from './Home'
import Cars from './car/CarRoutes'
import Message from './Menssage'

const Tab = createBottomTabNavigator();

const Routes = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)
    return (
        <Tab.Navigator screenOptions={{
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

            <Tab.Screen
                name="Message"
                component={Message}
                options={{
                    tabBarIcon: () => (
                        <Entypo name='message' size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={UserRoutes}
                options={{
                    tabBarIcon: () => (
                        <Entypo name='user' size={30} />
                    ),
                }}
            />

            {/*{state.isAdmin ? (
                
            ) : (
                <></>
            )
            }*/}
            <Tab.Screen
                name="Cars"
                component={Cars}
                options={{
                    tabBarIcon: () => (
                        <Entypo name='plus' size={30} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#272933'

    },
})