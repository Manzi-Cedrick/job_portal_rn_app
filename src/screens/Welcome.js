import { View, Text } from 'react-native'
import React from 'react'
import Logo from '../components/Logo'
import tw from 'twrnc'
import WelcomeSvg from '../components/WelcomeSvg'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Footer from '../components/Footer'
import SafeAreaViewLayout from '../layouts/SafeAreaView'

const Welcome = ({navigation}) => {
  return (
    <SafeAreaViewLayout>
      <View>
        <Logo/>
      </View>
      <WelcomeSvg/>
      <View style={tw`py-4`}>
        <Text style={tw`text-black text-3xl px-8 font-semibold text-center`}>Find a Perfect Job Match</Text>
        <Text style={tw`py-2 text-center`}>Finding your dream job is more easier and faster with JobHub.</Text>
      </View>
      <View style={tw`py-4`}>
        <TouchableHighlight
            onPress={()=> navigation.navigate('Login')}
            activeOpacity={0.6}
        >
        <View style={tw`bg-[#4CA6A8] py-5 rounded-sm flex flex-row justify-center`}>
            <Text style={tw`text-white font-semibold`}>Get Started</Text>
        </View>
        </TouchableHighlight>
      </View>
      <Footer/>
    </SafeAreaViewLayout>
  )
}

export default Welcome