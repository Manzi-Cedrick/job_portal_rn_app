import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Dashboard from '../screens/Dashboard';
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
      <Stack.Screen name='Signup' component={Signup} options={{
        headerShown: false
      }}/>
      <Stack.Screen name='Dashboard' component={Dashboard} options={{
        headerShown: false
      }}/>
    </Stack.Navigator>
  )
}

export default MainRoute