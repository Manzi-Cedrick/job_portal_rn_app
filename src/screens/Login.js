import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Logo from '../components/Logo'
import SafeAreaViewLayout from '../layouts/SafeAreaView'
import tw from 'twrnc'
import CustomInput from '../layouts/CustomInput'
import { err } from 'react-native-svg/lib/typescript/xml'
const Login = () => {
  const [formdata,setformdata] = useState({
    email:'',
    password:''
  });
  const [errors,setErrors] = useState({
    email:'',
    password:''
  })
  const handleSignIn = () => {
    try{

    }catch(error){
      console.log(error)
    }
  }
  const validate = () =>{
    let isValid = true
    if(!formdata.email || !formdata.email.match(`/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;`) || formdata.email === ''){
      setErrors({...errors,email:"Please Enter the correct email"})
      isValid = false
    }
    
    if(!formdata.password || formdata.password === ''){
      setErrors({...errors,password:"Please Enter the correct password"})
      isValid = false
    }
    if(isValid){
      handleSignIn()
    }
  }
  const handleOnChange = (text,form) =>{
    setformdata(prevState => ({...prevState,[form]: text}))
  }
  const handleOnError = (error,err)=>{
    setErrors(prevState => ({...prevState,[err]:error}))
  }
  return (
    <SafeAreaViewLayout>
      <View>
        <Logo/>
      </View>
      <View style={tw`py-6`}>
        <Text style={tw`text-black text-3xl font-semibold`}>Welcome Back!</Text>
        <Text style={tw`py-2`}>
        Fill your details or continue with social media
        </Text>
      </View>
      <CustomInput
        onChangeText={(text) => handleOnChange(text,'email')}
        error={errors.email}
        icon="drafts"
        label={"Email"}
        onFocus={()=> handleOnError(null,'email')}
        placeholder="Enter your email address"
      />
      <CustomInput
        onChangeText={(text) => handleOnChange(text,'password')}
        error={errors.password}
        icon="https"
        label={"Password"}
        onFocus={()=> handleOnError(null,'password')}
        placeholder="Enter your password"   
        password={true} />
    </SafeAreaViewLayout>
  )
}

export default Login