import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Context, Provider } from './src/context/authContext';

// import RegisterCar from './src/screens/car/RegisterCar'

// import Routes from './src/screens/Routes';
import Login from './src/screens/Login';
import RegisterUser from './src/screens/RegisterUser';
import ValidateToken from './src/screens/ValidateToken';
import UpdateCar from './src/screens/car/UpdateCar';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  const { state } = useContext(Context);
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.Loading ? (
          <Stack.Screen name="ValidateToken" component={ValidateToken} />
        ) : (
          state.isLogged ? (
            <>
              <Stack.Screen name="ValidateToken" component={ValidateToken} />
<<<<<<< HEAD
<<<<<<< HEAD
              <Stack.Screen name="Routes" component={Routes} />
=======
              
>>>>>>> 4ff4c605da55a5b2ee722fd7c263fdbeafab771f
=======
              
>>>>>>> 7b7a88be35362ffa95a69a40d8ff767fa217cb1a

            </>
          ) : (
            <>
              {/* <Stack.Screen name="RegisterCar" component={RegisterCar} /> */}
              <Stack.Screen name="UpdateCar" component={UpdateCar} />
<<<<<<< HEAD
              <Stack.Screen name="Home" component={Home} /> */}
<<<<<<< HEAD
=======
              <Stack.Screen name="Routes" component={Routes} />
>>>>>>> 4ff4c605da55a5b2ee722fd7c263fdbeafab771f
=======
              <Stack.Screen name="Home" component={Home} />
              {/* <Stack.Screen name="Routes" component={Routes} /> */}
>>>>>>> 7b7a88be35362ffa95a69a40d8ff767fa217cb1a
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="RegisterUser" component={RegisterUser} />

            </>
          )
        )
        }


      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#272933',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
    <Provider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
};