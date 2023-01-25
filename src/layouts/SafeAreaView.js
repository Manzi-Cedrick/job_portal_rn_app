import { View, Text , SafeAreaView} from 'react-native'
import React from 'react'
import tw from 'twrnc'
const SafeAreaViewLayout = ({children}) => {
  return (
    <SafeAreaView style={tw`bg-white h-full px-10 py-10`}>
      {children}
    </SafeAreaView>
  )
}

export default SafeAreaViewLayout