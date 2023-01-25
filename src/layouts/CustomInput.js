import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';
const CustomInput = ({label, icon, error,password, onFocus = () => {}, ...props}) => {
  const [input, setinput] = useState('');
  const [showPass,setshowPass] = useState(false);
  const [isFocused,setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <View>
      <Text style={tw`text-sm font-semibold`}>{label}</Text>
      <View style={tw` flex flex-row justify-start pt-3`}>
        <View
          style={tw`bg-green-50 w-12 flex flex-col px-4 justify-center text-center `}>
          <Icon
            style={tw`text-green-500`}
          name={icon}  />
        </View>
        <TextInput
          style={tw`px-4  ${isFocused ? 'border-green-500 bg-slate-50' : 'border-gray-200'} border-b-2 ${!password ? 'w-[88%]':'w-[75%]'}`}
          autoCorrect={false}
          onFocus={()=>{
            onFocus()
            setIsFocused(true)
          }}
          onBlur={()=>setIsFocused(false)}
          secureTextEntry={hidePassword}
          {...props}
        />
        {password && (
               <View
               style={tw`bg-green-50 w-12 flex flex-col px-4 justify-center text-center `}>
          <Icon
            style={tw`text-green-500`}
            onPress={()=> setshowPass(!showPass)}
            name={showPass ? 'https' : 'remove-red-eye'}
          />
          </View>
        )}
      </View>
      <Text style={tw`text-red-500 text-[12px] py-2`}>{error}</Text>
    </View>
  );
};

export default CustomInput;
