import {View, Alert, ScrollView} from 'react-native';
import React from 'react';
import SafeAreaViewLayout from '../layouts/SafeAreaView';
import MenuElipsis from '../assets/MenuElipsis';
import tw from 'twrnc';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import {TextInput} from 'react-native';
import {TouchableHighlight} from 'react-native';
import {Text} from 'react-native';
import FilterSvg from '../assets/FilterSvg';
import GoogleSvg from '../assets/GoogleSvg';
import LikeSvg from '../assets/LikeSvg';
import FacebookSvg from '../assets/FacebookSvg';
import HomeSvg from '../assets/HomeSvg';
import Sidebar from '../components/Sidebar';
const Dashboard = ({navigation}) => {
  const [searchItem, setSearchItem] = useState('');
  const [showActive,setShowActive] = useState(false)
  return (
    <SafeAreaViewLayout>
      {showActive && 
      <Sidebar onClose={()=>setShowActive(false)}/>
      }
      <View style={tw`flex flex-row justify-between`}>
        <TouchableHighlight
        underlayColor={'#00000012'}
        onPress={()=>setShowActive((prev)=>!prev)}
        >
          <View
            style={tw`bg-teal-500 px-4 py-4 w-12 flex justify-center  rounded-lg`}>
            <MenuElipsis />
          </View>
        </TouchableHighlight>
        <Avatar
          style={tw`bg-slate-500 h-12 w-12 rounded-full`}
          rounded
          title="MD"
        />
      </View>
      <View style={tw`py-6 flex flex-row w-full`}>
        <TextInput
          value={searchItem}
          onChangeText={text => setSearchItem(text)}
          style={tw`bg-white w-[85%] shadow-md rounded-sm px-4 hover:border-teal-500 border-l-2 border-teal-500`}
          placeholder="Search item"
        />
        <TouchableHighlight
          onPress={() => Alert.alert(searchItem)}
          activeOpacity={0.6}
          style={tw`bg-teal-500 w-[15%] px-4 flex justify-center rounded-r-lg `}>
          <FilterSvg />
        </TouchableHighlight>
      </View>
      <View>
        <View style={tw`flex justify-between flex-row`}>
          <Text style={tw`text-black font-semibold`}>Popular Jobs</Text>
          <Text style={tw`text-blue-500 text-[12px]`}>Show All</Text>
        </View>
        <ScrollView
          horizontal={true}
          style={tw`py-6`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={tw`bg-white w-64 shadow-md border-2 border-slate-100 p-5 rounded-lg`}>
            <View style={tw`flex flex-row justify-between`}>
              <View>
                <View
                  style={tw`pt-1.5  flex justify-center flex-row bg-blue-50 rounded-md w-12 h-12`}>
                  <GoogleSvg />
                </View>
                <Text style={tw`text-[12px] `}>Google</Text>
              </View>
              <LikeSvg />
            </View>
            <View style={tw`pt-2`}>
              <Text style={tw`text-black text-[16px] font-medium`}>
                Lead Product Manager
              </Text>
              <Text style={tw`text-teal-500 font-normal text-[12px]`}>
                $ 2500/m
              </Text>
            </View>
          </View>
          <View
            style={tw`bg-white w-64 shadow-md border-2 ml-8 border-slate-100 p-5 rounded-lg`}>
            <View style={tw`flex flex-row justify-between`}>
              <View>
                <View
                  style={tw`pt-1.5  flex justify-center flex-row bg-blue-50 rounded-md w-12 h-12`}>
                  <GoogleSvg />
                </View>
                <Text style={tw`text-[12px] `}>Google</Text>
              </View>
              <LikeSvg />
            </View>
            <View style={tw`pt-2`}>
              <Text style={tw`text-black text-[16px] font-medium`}>
                Lead Product Manager
              </Text>
              <Text style={tw`text-teal-500 font-normal text-[12px]`}>
                $ 2500/m
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View>
        <View style={tw`flex justify-between flex-row`}>
          <Text style={tw`text-black font-semibold`}>Recent Jobs</Text>
          <Text style={tw`text-blue-500 text-[12px]`}>Show All</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={true}
          style={tw`my-6 h-[36%] `}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={tw`bg-white my-2 w-[100%] flex flex-row justify-between shadow-md border-2 border-slate-100 px-4 py-4 rounded-lg`}>
            <View style={tw`flex flex-row`}>
              <View
                style={tw`bg-[#4460A0] p-4 px-6 rounded-lg text-white flex flex-col justify-center `}>
                <FacebookSvg />
              </View>
              <View style={tw`flex ml-4 flex-col justify-center`}>
                <Text style={tw`text-black text-[16px] font-semibold`}>
                  UI/UX Designer
                </Text>
                <Text style={tw`text-slate-600 text-[12px]`}>Full time</Text>
              </View>
            </View>
            <View style={tw`flex flex-col justify-center`}>
              <Text style={tw`text-slate-500 text-[14px] font-semibold`}>
                $ 4500/m
              </Text>
            </View>
          </View>
          <View
            style={tw`bg-white my-2 w-[100%] flex flex-row justify-between shadow-md border-2 border-slate-100 px-4 py-4 rounded-lg`}>
            <View style={tw`flex flex-row`}>
              <View
                style={tw`bg-[#4460A0] p-4 px-6 rounded-lg text-white flex flex-col justify-center `}>
                <FacebookSvg />
              </View>
              <View style={tw`flex ml-4 flex-col justify-center`}>
                <Text style={tw`text-black text-[16px] font-semibold`}>
                  UI/UX Designer
                </Text>
                <Text style={tw`text-slate-600 text-[12px]`}>Full time</Text>
              </View>
            </View>
            <View style={tw`flex flex-col justify-center`}>
              <Text style={tw`text-slate-500 text-[14px] font-semibold`}>
                $ 4500/m
              </Text>
            </View>
          </View>
          <View
            style={tw`bg-white my-2 w-[100%] flex flex-row justify-between shadow-md border-2 border-slate-100 px-4 py-4 rounded-lg`}>
            <View style={tw`flex flex-row`}>
              <View
                style={tw`bg-[#4460A0] p-4 px-6 rounded-lg text-white flex flex-col justify-center `}>
                <FacebookSvg />
              </View>
              <View style={tw`flex ml-4 flex-col justify-center`}>
                <Text style={tw`text-black text-[16px] font-semibold`}>
                  UI/UX Designer
                </Text>
                <Text style={tw`text-slate-600 text-[12px]`}>Full time</Text>
              </View>
            </View>
            <View style={tw`flex flex-col justify-center`}>
              <Text style={tw`text-slate-500 text-[14px] font-semibold`}>
                $ 4500/m
              </Text>
            </View>
          </View>
          <View
            style={tw`bg-white my-2 w-[100%] flex flex-row justify-between shadow-md border-2 border-slate-100 px-4 py-4 rounded-lg`}>
            <View style={tw`flex flex-row`}>
              <View
                style={tw`bg-[#4460A0] p-4 px-6 rounded-lg text-white flex flex-col justify-center `}>
                <FacebookSvg />
              </View>
              <View style={tw`flex ml-4 flex-col justify-center`}>
                <Text style={tw`text-black text-[16px] font-semibold`}>
                  UI/UX Designer
                </Text>
                <Text style={tw`text-slate-600 text-[12px]`}>Full time</Text>
              </View>
            </View>
            <View style={tw`flex flex-col justify-center`}>
              <Text style={tw`text-slate-500 text-[14px] font-semibold`}>
                $ 4500/m
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={tw`absolute h-16 bg-white bottom-0 justify-between px-10 flex flex-row left-0 right-0 border-2 border-slate-200 `}>
        <View style={tw`flex flex-col justify-center p-4 text-center`}>
          <Icon name="home" style={tw`text-teal-500 ml-2 text-[20px]`} />
          <Text style={tw`text-center text-teal-500 text-[12px]`}>Home</Text>
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
            <Icon name="account-circle" style={tw`ml-2 text-[20px]`} />
          </TouchableHighlight>
          <Text style={tw`text-center text-[12px]`}>Profile</Text>
        </View>
        <View style={tw`flex flex-col justify-center p-4 text-center`}>
          <TouchableHighlight
            onPress={() => navigation.navigate('Settings')}
            activeOpacity={0.6}
            underlayColor="#fff5">
            <Icon name="settings" style={tw`ml-2 text-[20px]`} />
          </TouchableHighlight>
          <Text style={tw`text-center text-[12px]`}>Settings</Text>
        </View>
      </View>
    </SafeAreaViewLayout>
  );
};

export default Dashboard;
