import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import { useState } from 'react';
import tw from 'twrnc';

const Toggle = () => {
  const [enabled, setEnabled] = useState(false);
  const handlePress = () => {
    setEnabled(!enabled);
  };
  return (
    <View style={tw`${enabled ? 'bg-teal-500': 'bg-[#E9E9E9]'}   py-0.5 px-0.5 rounded-full h-6 w-12`}>
      <TouchableHighlight
        onPress={handlePress}
        activeOpacity={0.6}
        underlayColor="#fff5">
        <View style={tw`h-full w-12  flex flex-col justify-center `}>
          <Text style={tw`${enabled ? 'bg-white ml-5' :' bg-white '}  text-[8px] text-center flex flex-col justify-center h-full w-[50%] rounded-full`}>
            {/* {enabled ? 'ON' : 'OFF'} */}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Toggle;
