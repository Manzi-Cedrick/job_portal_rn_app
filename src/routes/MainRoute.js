import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
const MainRoute = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }}/>
    </Stack.Navigator>
  )
}

export default MainRoute