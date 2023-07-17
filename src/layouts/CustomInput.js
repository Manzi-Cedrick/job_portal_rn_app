import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';
const CustomInput = ({ label, icon, error, password, onFocus = () => { }, ...props }) => {
  const [input, setinput] = useState('');
  const [showPass, setshowPass] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <View>
      <Text style={tw`text-[12px] text-black font-normal`}>{label}</Text>
      <View style={tw` flex flex-row justify-start pt-3`}>
        <View
          style={tw`bg-slate-100 w-12 flex flex-col px-4 justify-center text-center `}>
          <Icon
            style={tw`text-[#4CA6A8]`}
            name={icon} />
        </View>
        <TextInput
          style={tw`px-4  ${isFocused ? 'border-[#4CA6A8] bg-slate-50' : 'border-gray-200'} border-b-2 ${!password ? 'w-[88%]' : 'w-[75%]'}`}
          autoCorrect={false}
          onFocus={() => {
            onFocus()
            setIsFocused(true)
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          {...props}
        />
        {password && (
          <View
            style={tw`bg-slate-100 w-12 flex flex-col px-4 justify-center text-center `}>
            <Icon
              style={tw`text-[#4CA6A8]`}
              onPress={() => setshowPass(!showPass)}
              name={showPass ? 'https' : 'remove-red-eye'}
            />
          </View>
        )}
      </View>
      <Text style={tw`text-red-500 text-[12px]`}>{error}</Text>
    </View>
  );
};

export default CustomInput;
