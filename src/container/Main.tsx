/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function Main({navigation}: {navigation: any}): JSX.Element {
  return (
    <SafeAreaView style={tw`bg-[#2A52BE] h-full  flex-1`}>
      <View style={tw`flex-1 justify-center items-center ml-[10px] mt-[20px]`}>
        <Image 
          style={tw`z-50 absolute h-[400px] w-[400px]`}
          source={require('../../public/images/background.png')}  />
      </View>
      <View style={tw`h-[330px] bg-[#fff] rounded-t-[30px]`}>
        <View style={tw`flex-1`}>
          <Text style={tw`text-[#2A52BE] text-[30px] font-black text-center mr-[30px] ml-[30px] mt-[50px]`}>
            Access online course for free every time
          </Text>
          <Text style={tw`opacity-50 text-[20px] font-bold text-center mr-[30px] ml-[30px]`}>
            Upgrade your basic skill to be advance with expert mentors
          </Text>
        </View>
        <View style={tw`items-center mb-[50px] `}>
          <TouchableOpacity style={tw`rounded-[1000px] h-[60px] w-[60px] bg-[#2A52BE] justify-center`} 
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={tw`text-[#fff] text-center text-[30px]`}> -{'>'} </Text>
          </TouchableOpacity>
        </View>
       
      </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Main;
