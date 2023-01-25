import { View, Text , Image} from 'react-native'
import React from 'react'
import welcomeImage from '../assets/welcome.png'
import tw from 'twrnc'
const WelcomeSvg = () => {
  return (
    <View style={tw`py-2 `}>
      <Image source={welcomeImage} style={tw``} width={380} height={400} />
    </View>
  )
}

export default WelcomeSvg