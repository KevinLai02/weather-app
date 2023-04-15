/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import tw from 'twrnc';
import rootStore from '../../store';
import NetInfo from "@react-native-community/netinfo";

function Main({navigation}: {navigation: any}): JSX.Element {
  const { mainStore: { country, temperature, weather, weatherDetail, searchWeatherApi }} = rootStore
  const unsubscribe = NetInfo.addEventListener(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
  });
  
  // Unsubscribe
  unsubscribe();
  
  return (
    <SafeAreaView style={tw`bg-[#87CEEB] h-full  flex-1`}>
        {/*<Image 
          style={tw`h-full w-full absolute`}
  source={require('../../../public/images/background1.png')}  />*/}
      <View style={tw`flex-1 justify-center items-center ml-[10px] mt-[20px]`}>
        <Text style={tw`text-[60px] text-[#fff] text-center mt-[30px] font-light`}>{temperature}{temperature ? '°':''}</Text>
        <View style={tw`flex-row`}>          
          <Text style={tw`text-[20px] text-[#fff] font-light`}>{country}</Text>
        </View>
      </View>
      <View>
        <View style={tw`opacity-50 h-[200px] justify-end bg-[#fff] rounded-t-[30px]`}>
          <View style={tw`items-center mb-[50px] `}>
            <TouchableOpacity style={tw`rounded-[1000px] h-[40px] w-[120px] bg-[#2A52BE] justify-center`} 
              onPress={() => {searchWeatherApi()}}>
              <Text style={tw`text-[#fff] text-center text-[16px]`}>reload</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`absolute`}>
          <Text style={tw`z-10 text-[25px] text-[#fff] ml-[10px]`}>{weather}</Text>
          <Text style={tw`z-10 text-[18px] text-[#fff] ml-[10px]`}>{weatherDetail?'Detail: ':''}{weatherDetail}</Text>
        </View>
      </View>  
    </SafeAreaView>
  );
}

export default observer(Main);
