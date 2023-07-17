import React from 'react';
import SafeAreaViewLayout from '../layouts/SafeAreaView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Text, ScrollView, Image, SafeAreaView} from 'react-native';
import tw from 'twrnc';
import {TouchableHighlight} from 'react-native';
const Message = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={tw`flex flex-row absolute top-0 right-0 left-0 justify-between px-10 py-2 h-14 bg-white border-b-2 border-slate-100 shadow-md`}>
        <TouchableHighlight
          onPress={() => navigation.navigate('Dashboard')}
          activeOpacity={0.6}
          underlayColor="#fff5"
          style={tw`flex justify-center py-2 flex-row `}>
          <Icon name="keyboard-arrow-left" style={tw`ml-2 text-[20px]`} />
        </TouchableHighlight>
        <View style={tw`py-1`}>
          <Text style={tw`font-semibold text-black text-[18px]`}>Message</Text>
        </View>
        <TouchableHighlight
          onPress={() => alert('Search Area activated')}
          activeOpacity={0.6}
          underlayColor="#fff5"
          style={tw`py-2`}>
          <Icon name="search" style={tw`ml-2 text-[20px]`} />
        </TouchableHighlight>
      </View>
      <ScrollView
        style={tw`my-16 `}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={tw`flex bg-white border-2 border-slate-100 py-4 px-4 w-full flex-row justify-between`}>
          <View style={tw`flex flex-row `}>
            <View style={tw`h-10 w-10 rounded-full`}>
              <Image
                style={tw`object-cover h-full rounded-full w-full`}
                source={{
                  uri:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4v_JyQFGWp2ySRiHUryse7-Q1lRS7B-GpmcassCs&s',
                }}
              />
            </View>
            <View style={tw`ml-4`}>
              <Text style={tw`text-black text-[16px] font-semibold`}>
                Rozanne Barrientes
              </Text>
              <Text style={tw`text-[10px]`}>
                A wonderful serenity has taken...
              </Text>
            </View>
          </View>
          <View
            style={tw`h-6 w-6 rounded-full bg-teal-500 flex flex-col justify-center`}>
            <Text style={tw`text-white text-[12px] font-semibold text-center`}>
              1
            </Text>
          </View>
        </View>
        <View
          style={tw`flex bg-white border-2 border-slate-100 py-4 px-4 w-full flex-row justify-between`}>
          <View style={tw`flex flex-row `}>
            <View style={tw`h-10 w-10 rounded-full`}>
              <Image
                style={tw`object-cover h-full rounded-full w-full`}
                source={{
                  uri:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4v_JyQFGWp2ySRiHUryse7-Q1lRS7B-GpmcassCs&s',
                }}
              />
            </View>
            <View style={tw`ml-4`}>
              <Text style={tw`text-black text-[16px] font-semibold`}>
                Rozanne Barrientes
              </Text>
              <Text style={tw`text-[10px]`}>
                A wonderful serenity has taken...
              </Text>
            </View>
          </View>
          <View
            style={tw`h-6 w-6 rounded-full bg-teal-500 flex flex-col justify-center`}>
            <Text style={tw`text-white text-[12px] font-semibold text-center`}>
              1
            </Text>
          </View>
        </View>
        <View
          style={tw`flex bg-white border-2 border-slate-100 py-4 px-4 w-full flex-row justify-between`}>
          <View style={tw`flex flex-row `}>
            <View style={tw`h-10 w-10 rounded-full`}>
              <Image
                style={tw`object-cover h-full rounded-full w-full`}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4v_JyQFGWp2ySRiHUryse7-Q1lRS7B-GpmcassCs&s',
                }}
              />
            </View>
            <View style={tw`ml-4`}>
              <Text style={tw`text-black text-[16px] font-semibold`}>
                Rozanne Barrientes
              </Text>
              <Text style={tw`text-[10px]`}>
                A wonderful serenity has taken...
              </Text>
            </View>
          </View>
          <View
            style={tw`h-6 w-6 rounded-full bg-teal-500 flex flex-col justify-center`}>
            <Text style={tw`text-white text-[12px] font-semibold text-center`}>
              1
            </Text>
          </View>
        </View>
        <View
          style={tw`flex bg-white border-2 border-slate-100 py-4 px-4 w-full flex-row justify-between`}>
          <View style={tw`flex flex-row `}>
            <View style={tw`h-10 w-10 rounded-full`}>
              <Image
                style={tw`object-cover h-full rounded-full w-full`}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4v_JyQFGWp2ySRiHUryse7-Q1lRS7B-GpmcassCs&s',
                }}
              />
            </View>
            <View style={tw`ml-4`}>
              <Text style={tw`text-black text-[16px] font-semibold`}>
                Rozanne Barrientes
              </Text>
              <Text style={tw`text-[10px]`}>
                A wonderful serenity has taken...
              </Text>
            </View>
          </View>
          <View
            style={tw`h-6 w-6 rounded-full bg-teal-500 flex flex-col justify-center`}>
            <Text style={tw`text-white text-[12px] font-semibold text-center`}>
              1
            </Text>
          </View>
        </View>
        <View
          style={tw`flex bg-white border-2 border-slate-100 py-4 px-4 w-full flex-row justify-between`}>
          <View style={tw`flex flex-row `}>
            <View style={tw`h-10 w-10 rounded-full`}>
              <Image
                style={tw`object-cover h-full rounded-full w-full`}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4v_JyQFGWp2ySRiHUryse7-Q1lRS7B-GpmcassCs&s',
                }}
              />
            </View>
            <View style={tw`ml-4`}>
              <Text style={tw`text-black text-[16px] font-semibold`}>
                Rozanne Barrientes
              </Text>
              <Text style={tw`text-[10px]`}>
                A wonderful serenity has taken...
              </Text>
            </View>
          </View>
          <View
            style={tw`h-6 w-6 rounded-full bg-teal-500 flex flex-col justify-center`}>
            <Text style={tw`text-white text-[12px] font-semibold text-center`}>
              1
            </Text>
          </View>
        </View>
        <View
          style={tw`flex bg-white border-2 border-slate-100 py-4 px-4 w-full flex-row justify-between`}>
          <View style={tw`flex flex-row `}>
            <View style={tw`h-10 w-10 rounded-full`}>
              <Image
                style={tw`object-cover h-full rounded-full w-full`}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4v_JyQFGWp2ySRiHUryse7-Q1lRS7B-GpmcassCs&s',
                }}
              />
            </View>
            <View style={tw`ml-4`}>
              <Text style={tw`text-black text-[16px] font-semibold`}>
                Rozanne Barrientes
              </Text>
              <Text style={tw`text-[10px]`}>
                A wonderful serenity has taken...
              </Text>
            </View>
          </View>
          <View
            style={tw`h-6 w-6 rounded-full bg-teal-500 flex flex-col justify-center`}>
            <Text style={tw`text-white text-[12px] font-semibold text-center`}>
              1
            </Text>
          </View>
        </View>
        <View
          style={tw`flex bg-white border-2 border-slate-100 py-4 px-4 w-full flex-row justify-between`}>
          <View style={tw`flex flex-row `}>
            <View style={tw`h-10 w-10 rounded-full`}>
              <Image
                style={tw`object-cover h-full rounded-full w-full`}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4v_JyQFGWp2ySRiHUryse7-Q1lRS7B-GpmcassCs&s',
                }}
              />
            </View>
            <View style={tw`ml-4`}>
              <Text style={tw`text-black text-[16px] font-semibold`}>
                Rozanne Barrientes
              </Text>
              <Text style={tw`text-[10px]`}>
                A wonderful serenity has taken...
              </Text>
            </View>
          </View>
          <View
            style={tw`h-6 w-6 rounded-full bg-teal-500 flex flex-col justify-center`}>
            <Text style={tw`text-white text-[12px] font-semibold text-center`}>
              1
            </Text>
          </View>
        </View>
        <View
          style={tw`flex bg-white border-2 border-slate-100 py-4 px-4 w-full flex-row justify-between`}>
          <View style={tw`flex flex-row `}>
            <View style={tw`h-10 w-10 rounded-full`}>
              <Image
                style={tw`object-cover h-full rounded-full w-full`}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4v_JyQFGWp2ySRiHUryse7-Q1lRS7B-GpmcassCs&s',
                }}
              />
            </View>
            <View style={tw`ml-4`}>
              <Text style={tw`text-black text-[16px] font-semibold`}>
                Rozanne Barrientes
              </Text>
              <Text style={tw`text-[10px]`}>
                A wonderful serenity has taken...
              </Text>
            </View>
          </View>
          <View
            style={tw`h-6 w-6 rounded-full bg-teal-500 flex flex-col justify-center`}>
            <Text style={tw`text-white text-[12px] font-semibold text-center`}>
              1
            </Text>
          </View>
        </View>
        <View
          style={tw`flex bg-white border-2 border-slate-100 py-4 px-4 w-full flex-row justify-between`}>
          <View style={tw`flex flex-row `}>
            <View style={tw`h-10 w-10 rounded-full`}>
              <Image
                style={tw`object-cover h-full rounded-full w-full`}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4v_JyQFGWp2ySRiHUryse7-Q1lRS7B-GpmcassCs&s',
                }}
              />
            </View>
            <View style={tw`ml-4`}>
              <Text style={tw`text-black text-[16px] font-semibold`}>
                Rozanne Barrientes
              </Text>
              <Text style={tw`text-[10px]`}>
                A wonderful serenity has taken...
              </Text>
            </View>
          </View>
          <View
            style={tw`h-6 w-6 rounded-full bg-teal-500 flex flex-col justify-center`}>
            <Text style={tw`text-white text-[12px] font-semibold text-center`}>
              1
            </Text>
          </View>
        </View>
        <View
          style={tw`flex bg-white border-2 border-slate-100 py-4 px-4 w-full flex-row justify-between`}>
          <View style={tw`flex flex-row `}>
            <View style={tw`h-10 w-10 rounded-full`}>
              <Image
                style={tw`object-cover h-full rounded-full w-full`}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4v_JyQFGWp2ySRiHUryse7-Q1lRS7B-GpmcassCs&s',
                }}
              />
            </View>
            <View style={tw`ml-4`}>
              <Text style={tw`text-black text-[16px] font-semibold`}>
                Rozanne Barrientes
              </Text>
              <Text style={tw`text-[10px]`}>
                A wonderful serenity has taken...
              </Text>
            </View>
          </View>
          <View
            style={tw`h-6 w-6 rounded-full bg-teal-500 flex flex-col justify-center`}>
            <Text style={tw`text-white text-[12px] font-semibold text-center`}>
              1
            </Text>
          </View>
        </View>
        <View
          style={tw`flex bg-white border-2 border-slate-100 py-4 px-4 w-full flex-row justify-between`}>
          <View style={tw`flex flex-row `}>
            <View style={tw`h-10 w-10 rounded-full`}>
              <Image
                style={tw`object-cover h-full rounded-full w-full`}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4v_JyQFGWp2ySRiHUryse7-Q1lRS7B-GpmcassCs&s',
                }}
              />
            </View>
            <View style={tw`ml-4`}>
              <Text style={tw`text-black text-[16px] font-semibold`}>
                Rozanne Barrientes
              </Text>
              <Text style={tw`text-[10px]`}>
                A wonderful serenity has taken...
              </Text>
            </View>
          </View>
          <View
            style={tw`h-6 w-6 rounded-full bg-teal-500 flex flex-col justify-center`}>
            <Text style={tw`text-white text-[12px] font-semibold text-center`}>
              1
            </Text>
          </View>
        </View>
      </ScrollView>
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
            <Icon name="message" style={tw`ml-2 text-teal-500 text-[20px]`} />
          </TouchableHighlight>
          <Text style={tw`text-center text-teal-500 text-[12px]`}>Message</Text>
        </View>
        <View style={tw`flex flex-col justify-center p-4 text-center`}>
          <Icon name="account-circle" style={tw`ml-2 text-[20px]`} />
          <Text style={tw`text-center text-[12px]`}>Profile</Text>
        </View>
        <View style={tw`flex flex-col justify-center p-4 text-center`}>
          <Icon name="settings" style={tw`ml-2 text-[20px]`} />
          <Text style={tw`text-center text-[12px]`}>Settings</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Message;
