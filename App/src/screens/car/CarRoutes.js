import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cars from './Cars';
import RegisterCar from './RegisterCar';
import UpdateCar from './UpdateCar';

const Stack = createNativeStackNavigator();

const CarRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="MainCars" component={Cars} />
                <Stack.Screen name="RegisterCar" component={RegisterCar} />
                <Stack.Screen name="Update" component={UpdateCar} />
            </Stack.Navigator>
    )
}

export default CarRoutes;