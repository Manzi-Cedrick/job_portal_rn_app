import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainRoute from './src/routes/MainRoute'

const App = () => {
  return (
    <NavigationContainer>
      <MainRoute/>
    </NavigationContainer>
  )
}

export default App