import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const Footer = () => {
  return (
    <View style={tw`flex flex-row justify-between`}>
      <Text style={tw`text-[12px]`}>Private Inc</Text>
      <Text style={tw`text-[12px]`}>copy@2022</Text>
    </View>
  )
}

export default Footer