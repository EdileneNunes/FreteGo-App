import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Text>123</Text>
      <StatusBar style="auto" />
    </View>
  );
=======
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.Loading ? (
          <Stack.Screen name="ValidateToken" component={ValidateToken}/>
        ) : (
          state.isLogged ? (
            <>
              <Stack.Screen name="ValidateToken" component={ValidateToken}/>
              <Stack.Screen name="Routes" component={Routes} />
              <Stack.Screen name="RegisterCar" component={RegisterCar}/>
            </>
          ) : (
            <>
                 
           <Stack.Screen name="Login" component={Login} />  
             <Stack.Screen name="RegisterUser" component={RegisterUser} />
              
            </>
          )
        )
        }


      </Stack.Navigator>
    </NavigationContainer>
  )
>>>>>>> 839a1204857a6bfc08400e1247377079570ac308
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
