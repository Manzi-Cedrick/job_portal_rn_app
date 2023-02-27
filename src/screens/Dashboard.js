import {View, Alert} from 'react-native';
import React from 'react';
import SafeAreaViewLayout from '../layouts/SafeAreaView';
import {Icon} from 'react-native-vector-icons/Icon';
import MenuElipsis from '../assets/MenuElipsis';
import tw from 'twrnc';
import {Avatar} from 'react-native-elements';
import CustomInput from '../layouts/CustomInput';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { Text } from 'react-native';
import FilterSvg from '../assets/FilterSvg';
const Dashboard = () => {
  const [searchItem,setSearchItem ] = useState('');
  return (
    <SafeAreaViewLayout>
      <View style={tw`flex flex-row justify-between`}>
        <View style={tw`bg-teal-500 px-4 py-4 w-12 flex justify-center  rounded-lg`}>
          <MenuElipsis />
        </View>
        <Avatar style={tw`bg-slate-500 h-12 w-12 rounded-full`} rounded title="MD" />
      </View>
      <View style={tw`py-6 flex flex-row w-full`}>
        <TextInput value={searchItem} onChangeText={(text)=>setSearchItem(text)} style={tw`bg-white w-[85%] shadow-md rounded-sm px-4 hover:border-teal-500 border-l-2 border-teal-500`} placeholder="Search item" />
        <TouchableHighlight
            onPress={() => Alert.alert(searchItem)}
            activeOpacity={0.6}
            style={tw`bg-teal-500 w-[15%] px-4 flex justify-center rounded-r-lg `}>
            <FilterSvg/>
          </TouchableHighlight>
      </View>
    </SafeAreaViewLayout>
  );
};

export default Dashboard;
