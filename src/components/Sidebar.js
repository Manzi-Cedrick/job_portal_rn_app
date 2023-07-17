import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';
const Sidebar = ({onClose}) => {
  return (
    <View
      style={tw`absolute bg-white border-r-2 z-10 border-slate-50 py-10 px-6 h-[100%] bottom-0 left-0 top-0 w-64`}>
      <View>
        <TouchableHighlight
          onPress={onClose}
          underlayColor={'#00000008'}
          style={tw`h-8 w-8 absolute right-0 rounded-sm flex flex-col justify-center `}>
          <Icon
            name="close"
            style={tw`text-teal-500 text-center font-semibold text-[12px]`}
          />
        </TouchableHighlight>
      </View>
      <View style={tw`flex flex-col justify-center py-10`}>
        <View style={tw`h-16 w-16 mx-20 rounded-full`}>
          <Image
            style={tw`h-full w-full rounded-full object-cover`}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4v_JyQFGWp2ySRiHUryse7-Q1lRS7B-GpmcassCs&s',
            }}
          />
          <View
            style={tw`absolute right-0 bottom-0 h-6 w-6 rounded-full justify-center flex flex-col bg-teal-500`}>
            <Icon style={tw`text-white text-center text-[10px]`} name="edit" />
          </View>
        </View>
        <View style={tw`py-6`}>
          <Text style={tw`text-black text-[20px] text-center font-bold`}>
            Adom Shafi
          </Text>
          <Text style={tw`text-center`}>hellobesnik@gmail.com</Text>
        </View>
      </View>
      <View>
        <View
          style={tw`flex flex-row py-4 px-4 my-1 justify-start`}>
          <View
            style={tw`bg-[#FF5441] rounded-full h-6 w-6 flex flex-col justify-center`}>
            <Icon name="account-circle" style={tw`text-white text-center`} />
          </View>
          <Text style={tw`ml-8 font-semibold`}>Edit Profile</Text>
        </View>
        <View
          style={tw`flex flex-row py-4 px-4 my-1 justify-start`}>
          <View
            style={tw`bg-[#FF9087] rounded-full h-6 w-6 flex flex-col justify-center`}>
            <Icon name="access-time" style={tw`text-white text-center`} />
          </View>
          <Text style={tw`ml-8 font-semibold`}>Applications (8)</Text>
        </View>
        <View
          style={tw`flex flex-row py-4 px-4 my-1 justify-start`}>
          <View
            style={tw`bg-[#2CB9B5] rounded-full h-6 w-6 flex flex-col justify-center`}>
            <Icon name="settings" style={tw`text-white text-center`} />
          </View>
          <Text style={tw`ml-8 font-semibold`}>Notifications Settings</Text>
        </View>
        <View
          style={tw`flex flex-row py-4 px-4 my-1 justify-start`}>
          <View
            style={tw`bg-[#FE33BF] rounded-full h-6 w-6 flex flex-col justify-center`}>
            <Icon name="share" style={tw`text-white text-center`} />
          </View>
          <Text style={tw`ml-8 font-semibold`}>Share App</Text>
        </View>
      </View>
      <View style={tw`flex flex-row absolute bottom-0 w-full left-6 py-4 px-4 my-1 justify-start`}>
        <View
          style={tw`bg-[#FF454C] rounded-full h-6 w-6 flex flex-col justify-center`}>
          <Icon name="logout" style={tw`text-white text-center`} />
        </View>
        <Text style={tw`ml-8 font-semibold`}>Logout</Text>
      </View>
    </View>
  );
};

export default Sidebar;
