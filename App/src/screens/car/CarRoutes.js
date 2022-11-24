<<<<<<< HEAD
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cars from './Cars';
import RegisterCar from './RegisterCar';

const Stack = createNativeStackNavigator();

const CarRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="MainCars" component={Cars} />
                <Stack.Screen name="RegisterCar" component={RegisterCar} />
            </Stack.Navigator>
    )
}

=======
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cars from './Cars';
import RegisterCar from './RegisterCar';

const Stack = createNativeStackNavigator();

const CarRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="MainCars" component={Cars} />
                <Stack.Screen name="RegisterCar" component={RegisterCar} />
            </Stack.Navigator>
    )
}

>>>>>>> 4ff4c605da55a5b2ee722fd7c263fdbeafab771f
export default CarRoutes;