import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import SafeAreaViewLayout from '../layouts/SafeAreaView';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toggle from '../components/Toggle';
const Settings = ({navigation}) => {
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
          <Text style={tw`font-semibold text-black text-[18px]`}>Settings</Text>
        </View>
      </View>
      <View style={tw`my-10`}>
        <View style={tw`flex py-5 flex-row justify-between`}>
          <View style={tw``}>
            <Text style={tw`text-black text-[16px] font-semibold`}>
              New Post
            </Text>
            <Text style={tw`text-[10px]`}>If any new post update </Text>
          </View>
          <View>
            <Toggle />
          </View>
        </View>
        <View style={tw`flex py-5 flex-row justify-between`}>
          <View style={tw``}>
            <Text style={tw`text-black text-[16px] font-semibold`}>
              Got Hired
            </Text>
            <Text style={tw`text-[10px]`}>If you get hired any company</Text>
          </View>
          <View>
            <Toggle />
          </View>
        </View>
        <View style={tw`flex py-5 flex-row justify-between`}>
          <View style={tw``}>
            <Text style={tw`text-black text-[16px] font-semibold`}>
              Get Rejected
            </Text>
            <Text style={tw`text-[10px]`}>If you rejected by any company</Text>
          </View>
          <View>
            <Toggle />
          </View>
        </View>
        <View style={tw`flex py-5 flex-row justify-between`}>
          <View style={tw``}>
            <Text style={tw`text-black text-[16px] font-semibold`}>
              Massage
            </Text>
            <Text style={tw`text-[10px]`}>Got any new massage</Text>
          </View>
          <View>
            <Toggle />
          </View>
        </View>
        <View style={tw`flex py-5 flex-row justify-between`}>
          <View style={tw``}>
            <Text style={tw`text-black text-[16px] font-semibold`}>Call</Text>
            <Text style={tw`text-[10px]`}>Have a call</Text>
          </View>
          <View>
            <Toggle />
          </View>
        </View>
        <View style={tw`flex py-5 flex-row justify-between`}>
          <View style={tw``}>
            <Text style={tw`text-black text-[16px] font-semibold`}>
              Dark Mode
            </Text>
            <Text style={tw`text-[10px]`}>Enable dark theme</Text>
          </View>
          <View>
            <Toggle />
          </View>
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
              style={tw`ml-2 text-[20px]`}
            />
          </TouchableHighlight>
          <Text style={tw`text-center text-[12px]`}>Profile</Text>
        </View>
        <View style={tw`flex flex-col justify-center p-4 text-center`}>
          <TouchableHighlight
            onPress={() => navigation.navigate('Profile')}
            activeOpacity={0.6}
            underlayColor="#fff5">
            <Icon
              name="settings"
              style={tw`ml-2 text-teal-500 text-[20px]`}
            />
          </TouchableHighlight>
          <Text style={tw`text-center text-teal-500 text-[12px]`}>Settings</Text>
        </View>
      </View>
    </SafeAreaViewLayout>
  );
};

export default Settings;
