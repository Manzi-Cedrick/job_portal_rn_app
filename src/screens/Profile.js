import React from 'react';
import SafeAreaViewLayout from '../layouts/SafeAreaView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import tw from 'twrnc';
import {TouchableHighlight} from 'react-native';
import CustomInput from '../layouts/CustomInput';
import {useState} from 'react';
const Profile = ({navigation}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <SafeAreaViewLayout>
      <View
        style={tw`flex flex-row absolute top-0 right-0 left-0 justify-center px-10 py-2 h-14 bg-white border-b-2 border-slate-100 shadow-md`}>
        <TouchableHighlight
          onPress={() => navigation.navigate('Dashboard')}
          activeOpacity={0.6}
          underlayColor="#fff5"
          style={tw`flex justify-center absolute left-10 top-2 py-2 flex-row `}>
          <Icon name="keyboard-arrow-left" style={tw`ml-2 text-[20px]`} />
        </TouchableHighlight>
        <View style={tw`py-1`}>
          <Text style={tw`font-semibold text-black text-[18px]`}>Profile</Text>
        </View>
      </View>
      <View style={tw`my-14 h-[80%] flex flex-col relative justify-center`}>
        <View
          style={tw`flex flex-col justify-center  py-5`}>
          <View style={tw`h-24 w-24 mx-34 rounded-full`}>
            <Image
              style={tw`h-full w-full rounded-full object-cover`}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4v_JyQFGWp2ySRiHUryse7-Q1lRS7B-GpmcassCs&s',
              }}
            />
            <View
              style={tw`absolute right-0 bottom-0 h-6 w-6 rounded-full justify-center flex flex-col bg-teal-500`}>
              <Icon
                style={tw`text-white text-center text-[10px]`}
                name="edit"
              />
            </View>
          </View>
          <View style={tw`py-6`}>
            <Text style={tw`text-black text-[20px] text-center font-bold`}>
              Adom Shafi
            </Text>
            <Text style={tw`text-[14px] text-center`}>Edit profile</Text>
          </View>
        </View>
        <View style={tw`flex flex-col`}>
          <View>
            <Text style={tw`font-semibold`}>Name</Text>
            <View style={tw`flex w-92 py-4 flex-row justify-start `}>
              <View
                style={tw`bg-slate-100 w-12 flex flex-col px-4 justify-center text-center `}>
                <Icon style={tw`text-[#4CA6A8]`} name="account-circle" />
              </View>
              <TextInput
                style={tw`px-4 w-80 ${
                  isFocused ? 'border-[#4CA6A8] bg-slate-50' : 'border-gray-200'
                } border-b-2 `}
                autoCorrect={false}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => setIsFocused(false)}
                value="Manzi Cedrick Kims"
              />
            </View>
          </View>
          <View>
            <Text style={tw`font-semibold`}>Email</Text>
            <View style={tw`flex w-92 py-4 flex-row justify-start `}>
              <View
                style={tw`bg-slate-100 w-12 flex flex-col px-4 justify-center text-center `}>
                <Icon style={tw`text-[#4CA6A8]`} name="email" />
              </View>
              <TextInput
                style={tw`px-4 w-80 ${
                  isFocused ? 'border-[#4CA6A8] bg-slate-50' : 'border-gray-200'
                } border-b-2 `}
                autoCorrect={false}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => setIsFocused(false)}
                value="cedrickmanzii0@gmail.com"
              />
            </View>
          </View>
          <View>
            <Text style={tw`font-semibold`}>Password</Text>
            <View style={tw`flex w-92 py-4 flex-row justify-start `}>
              <View
                style={tw`bg-slate-100 w-12 flex flex-col px-4 justify-center text-center `}>
                <Icon style={tw`text-[#4CA6A8]`} name="lock" />
              </View>
              <TextInput
                style={tw`px-4 w-80 ${
                  isFocused ? 'border-[#4CA6A8] bg-slate-50' : 'border-gray-200'
                } border-b-2 `}
                autoCorrect={false}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => setIsFocused(false)}
                value=".........................."
              />
            </View>
          </View>
        </View>
        <View style={tw`py-4`}>
            <TouchableHighlight style={tw`bg-teal-500 py-4 w-full rounded-sm`}><Text style={tw`text-white font-semibold text-center`}>Save Now</Text></TouchableHighlight>
        </View>
      </View>
      <View
        style={tw`absolute h-16 bg-white bottom-0 justify-between px-10 flex flex-row left-0 right-0 border-2 border-slate-200 `}>
        <View style={tw`flex flex-col justify-center p-4 text-center`}>
          <TouchableHighlight
            onPress={() => navigation.navigate('Dashboard')}
            activeOpacity={0.6}
            underlayColor="#fff5">
            <Icon name="home" style={tw`ml-2 text-[20px]`} />
          </TouchableHighlight>
          <Text style={tw`text-center text-[12px]`}>Home</Text>
        </View>
        <View style={tw`flex flex-col justify-center p-4 text-center`}>
          <TouchableHighlight
            onPress={() => navigation.navigate('Message')}
            activeOpacity={0.6}
            underlayColor="#fff5">
            <Icon name="message" style={tw`ml-2 text-[20px]`} />
          </TouchableHighlight>
          <Text style={tw`text-center text-[12px]`}>Message</Text>
        </View>
        <View style={tw`flex flex-col justify-center p-4 text-center`}>
          <TouchableHighlight
            onPress={() => navigation.navigate('Profile')}
            activeOpacity={0.6}
            underlayColor="#fff5">
            <Icon
              name="account-circle"
              style={tw`ml-2 text-teal-500 text-[20px]`}
            />
          </TouchableHighlight>
          <Text style={tw`text-center text-teal-500 text-[12px]`}>Profile</Text>
        </View>
        <View style={tw`flex flex-col justify-center p-4 text-center`}>
          <Icon name="settings" style={tw`ml-2 text-[20px]`} />
          <Text style={tw`text-center text-[12px]`}>Settings</Text>
        </View>
      </View>
    </SafeAreaViewLayout>
  );
};

export default Profile;
