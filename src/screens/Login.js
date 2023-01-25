import { View, Text } from 'react-native'
import React from 'react'
import Logo from '../components/Logo'
import SafeAreaViewLayout from '../layouts/SafeAreaView'
import tw from 'twrnc'
const Login = () => {
  return (
    <SafeAreaViewLayout>
      <View>
        <Logo/>
      </View>
      <View style={tw`py-6`}>
        <Text style={tw`text-black text-3xl font-semibold`}>Welcome Back!</Text>
        <Text style={tw`py-2`}>
        Fill your details or continue with social media
        </Text>
      </View>
      
    </SafeAreaViewLayout>
  )
}

export default Login