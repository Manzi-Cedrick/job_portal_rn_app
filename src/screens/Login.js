import {View, Text, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import Logo from '../components/Logo';
import SafeAreaViewLayout from '../layouts/SafeAreaView';
import tw from 'twrnc';
import CustomInput from '../layouts/CustomInput';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GoogleSvg from '../assets/GoogleSvg';
import FacebookSvg from '../assets/FacebookSvg';
const Login = ({navigation}) => {
  const [formdata, setformdata] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const handleSignIn = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  const validate = () => {
    let isValid = true;
    if (
      !formdata.email ||
      !formdata.email.match(`/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;`) ||
      formdata.email === ''
    ) {
      setErrors({...errors, email: 'Please Enter the correct email'});
      isValid = false;
    }

    if (!formdata.password || formdata.password === '') {
      setErrors({...errors, password: 'Please Enter the correct password'});
      isValid = false;
    }
    if (isValid) {
      handleSignIn();
    }
  };
  const handleOnChange = (text, form) => {
    setformdata(prevState => ({...prevState, [form]: text}));
  };
  const handleOnError = (error, err) => {
    setErrors(prevState => ({...prevState, [err]: error}));
  };
  return (
    <SafeAreaViewLayout>
      <View>
        <Logo />
      </View>
      <View style={tw`py-6`}>
        <Text style={tw`text-black text-3xl font-semibold`}>Welcome Back!</Text>
        <Text style={tw`py-2`}>
          Fill your details or continue with social media
        </Text>
      </View>
      <View style={tw`relative`}>
        <CustomInput
          onChangeText={text => handleOnChange(text, 'email')}
          error={errors.email}
          icon="drafts"
          label={'Email'}
          onFocus={() => handleOnError(null, 'email')}
          placeholder="Enter your email address"
        />
        <CustomInput
          onChangeText={text => handleOnChange(text, 'password')}
          error={errors.password}
          icon="https"
          label={'Password'}
          onFocus={() => handleOnError(null, 'password')}
          placeholder="Enter your password"
          password={true}
        />
        <View>
          <Text
            style={tw`text-blue-500 text-[10px] -m-6 absolute bottom-4 right-6`}>
            Forgot password?
          </Text>
        </View>
      </View>
      <View style={tw`py-14`}>
        <View style={tw``}>
          <TouchableHighlight
            onPress={() => navigation.navigate('Dashboard')}
            activeOpacity={0.6}
            style={tw`bg-[#4CA6A8] py-5 rounded-sm text-white flex flex-row justify-center `}>
            <Text style={tw`text-white font-semibold`}>LOGIN</Text>
          </TouchableHighlight>
        </View>
        <View style={tw`flex flex-col justify-center text-center py-8`}>
          <Text style={tw`text-center`}> - Or Continue with - </Text>
          <View style={tw`flex flex-row py-6 justify-center`}>
            <TouchableHighlight
              onPress={() => Alert.alert('Login Successful')}
              activeOpacity={0.6}
              style={tw`bg-[#E9F4FF] p-4 mx-4 rounded-lg text-white flex flex-col text-center justify-center `}>
              <GoogleSvg />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => Alert.alert('Login Successful')}
              activeOpacity={0.6}
              style={tw`bg-[#4460A0] p-4 px-6 ml-2 rounded-lg text-white flex flex-col justify-center `}>
              <FacebookSvg />
            </TouchableHighlight>
          </View>
          <View style={tw`py-4 flex flex-row justify-center`}>
            <Text>New user ?</Text>
            <TouchableHighlight style={tw`text-blue-500 font-semibold ml-2`} onPress={()=> navigation.navigate('Signup')}>
                <Text style={tw`text-blue-500`}>Get Started</Text>
            </TouchableHighlight>          
          </View>
        </View>
      </View>
    </SafeAreaViewLayout>
  );
};

export default Login;
