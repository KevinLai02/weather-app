/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
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
  TouchableOpacity,
  TextInput
} from 'react-native';
import tw from 'twrnc';
import CheckBox from '@react-native-community/checkbox';

function SignUp({navigation}: {navigation:any}): JSX.Element {
    const [passwordSecure, setPasswordSecure] = useState(true)
    const [isSelected, setSelection] = useState(false)
  return (
    <SafeAreaView style={tw`bg-[#2A52BE] h-full  flex-1`}>
        <TouchableOpacity style={tw`z-10`} onPress={()=>{navigation.navigate('Home')}}>
            <Text style={tw`text-[#fff] font-bold`}>Home</Text>
        </TouchableOpacity>
        <View style={tw`flex-1 items-center`}>
        {/*<Image 
          style={tw` h-[150px] w-[150px]`}
  source={require('../../public/images/background.png')}  />*/}
        </View>
        <View style={tw`h-[700px] bg-[#fff] rounded-t-[30px]`}>
            <Text style={tw`text-[#2A52BE] text-[30px] font-black ml-[30px] mt-[30px]`}>
                SignUp
            </Text>
            <View style={tw`mt-[15px]`}>
                <Text style={tw`ml-[30px] text-[#000] font-bold`}>Full Name</Text>
                <TextInput 
                    style={tw`rounded-[10px] mt-[5px] ml-[30px] h-[50px] w-[85%] bg-[#E6E6FA] text-[16px]`}
                />
            </View>
            <View style={tw`mt-[15px]`}>
                <Text style={tw`ml-[30px] text-[#000] font-bold`}>Email</Text>
                <TextInput style={tw`rounded-[10px] mt-[5px] ml-[30px] h-[50px] w-[85%] bg-[#E6E6FA] text-[16px]`}/>
            </View>
            <View style={tw`mt-[15px]`}>
                <Text style={tw`ml-[30px] text-[#000] font-bold`}>Password</Text>
                <View style={tw`flex-row`}>
                    <TextInput 
                    style={tw`rounded-l-[10px] mt-[5px] ml-[30px] h-[50px] bg-[#E6E6FA] w-[75%] text-[16px]`}
                    secureTextEntry={passwordSecure}
                    />
                    <View style={tw`justify-center w-[10%] rounded-r-[10px] mt-[5px] h-[50px] bg-[#E6E6FA]`}>
                        <TouchableOpacity onPress={()=>{
                            setPasswordSecure(!passwordSecure)
                        }}>
                            <Text style={tw`text-center ${passwordSecure ? '' : 'font-black'}`}>{passwordSecure ? '[(/)]' : '[(=)]'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={tw`mt-[15px] flex-row w-[85%]`}>
                <CheckBox
                    style={tw`ml-[20px]`}
                    disabled={false}
                    value={isSelected}
                    onValueChange={(newValue) => setSelection(!isSelected)}
                />
                <Text style={tw`text-[15px] mt-[3px] ml-[5px]`}>I agree to the 
                    <Text style={tw`text-[#2A52BE] font-black`}> Terms & Conditions</Text> and 
                    <Text style={tw`text-[#2A52BE] font-black`}> Privacy Policy</Text>
                </Text>    
            </View>
            <TouchableOpacity style={tw`bg-[#2A52BE] w-[85%] h-[50px] rounded-[10px] ml-[30px] mt-[25px] justify-center`}>
                <Text style={tw`text-[#fff] text-[20px] font-bold text-center`}> Create Account</Text>
            </TouchableOpacity>
            <View style={tw`flex-row mt-[20px]`}>
                <View style={tw`h-[1px] w-[36%] bg-[#000000] mt-[20px] ml-[33px] mr-[5px] opacity-40`}></View>
                <Text style={tw`p-[2%] font-bold text-[16px]`}>
                    or
                </Text>
                <View style={tw`h-[1px] w-[36%] bg-[#000000] mt-[20px] mr-[30px] ml-[5px] opacity-40`}></View>
            </View>
            <TouchableOpacity style={tw`bg-[#fff] w-[85%] h-[50px] rounded-[10px] ml-[30px] mt-[25px] justify-center border-[2px] border-[#2A52BE]`}>
                <Text style={tw`text-[#2A52BE] text-[20px] font-bold text-center`}> SignUp With Google</Text>
            </TouchableOpacity>
            <View style={tw`flex-row items-center justify-center h-[60px]`}>
                <Text style={tw`font-medium`}>Already have account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text style={tw`text-[#2A52BE] font-medium `} >Sign in</Text>
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

export default SignUp;
