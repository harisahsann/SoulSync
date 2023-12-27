import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, CommonStyles, Fonts, Sizes } from '../constants/styles';
import { Text } from '../components/commonText';
import MyStatusBar from '../components/myStatusBar';
import {auth} from './firebase';
import  {createUserWithEmailAndPassword,sendEmailVerification } from 'firebase/auth';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);

  const registerUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email, password).then((userCredential)=>{
        console.log('rvrefere')
        sendEmailVerification(userCredential.user).then(() => {

            alert("Email Sent For Verification")
         
            setTimeout(()=>{
              navigation.navigate('LoginScreen');
            },1000)
        })

      })
      const user = userCredential.user;
    } catch (error) {
        console.log('error',error.message);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          {nameInfo()}
          {emailInfo()}
          {mobileInfo()}
          {passwordInfo()}
          {registerButton()}
        </ScrollView>
        {alreadyAccountInfo()}
      </View>
    </View>
  );

  function alreadyAccountInfo() {
    return (
      <Text
        style={{
          margin: Sizes.fixPadding * 2.0,
          ...Fonts.grayColor16Medium,
          textAlign: 'center',
        }}
      >
        Already have an account?
        <Text
          onPress={() => {
            navigation.push('LoginScreen');
          }}
          style={{ ...Fonts.primaryColor16Medium }}
        >
          {' '}
          Login now
        </Text>
      </Text>
    );
  }

  function registerButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={registerUser}
        style={{ ...CommonStyles.buttonStyle, margin: Sizes.fixPadding * 2.0 }}
      >
        <Text style={{ ...Fonts.whiteColor18SemiBold }}>Register</Text>
      </TouchableOpacity>
    );
  }

  function passwordInfo() {
    return (
      <View style={{ margin: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>
          Password<Text style={{ ...Fonts.redColor15SemiBold }}>*</Text>
        </Text>
        <View
          style={{
            ...CommonStyles.textFieldWrapper,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0, flex: 1, padding: 0 }}
            cursorColor={Colors.primaryColor}
            value={password}
            onChangeText={(val) => setPassword(val)}
            secureTextEntry={securePassword}
          />
          <MaterialCommunityIcons
            name={securePassword ? 'eye' : 'eye-off'}
            size={20}
            color={Colors.lightGrayColor}
            onPress={() => {
              setSecurePassword(!securePassword);
            }}
          />
        </View>
      </View>
    );
  }

  function mobileInfo() {
    return (
      <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>
          Mobile Number<Text style={{ ...Fonts.redColor15SemiBold }}>*</Text>
        </Text>
        <View style={CommonStyles.textFieldWrapper}>
          <TextInput
            placeholder="Enter Mobile Number*"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0, padding: 0 }}
            cursorColor={Colors.primaryColor}
            value={mobile}
            onChangeText={(val) => setMobile(val)}
            keyboardType="number-pad"
          />
        </View>
      </View>
    );
  }

  function emailInfo() {
    return (
      <View style={{ margin: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>
          Email<Text style={{ ...Fonts.redColor15SemiBold }}>*</Text>
        </Text>
        <View style={CommonStyles.textFieldWrapper}>
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0, padding: 0 }}
            cursorColor={Colors.primaryColor}
            value={email}
            onChangeText={(val) => setEmail(val)}
            keyboardType="email-address"
          />
        </View>
      </View>
    );
  }

  function nameInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginTop: Sizes.fixPadding + 5.0,
        }}
      >
        <Text style={{ ...Fonts.grayColor16Regular }}>
          Name<Text style={{ ...Fonts.redColor15SemiBold }}>*</Text>
        </Text>
        <View style={CommonStyles.textFieldWrapper}>
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0, padding: 0 }}
            cursorColor={Colors.primaryColor}
            value={name}
            onChangeText={(val) => setName(val)}
          />
        </View>
      </View>
    );
  }



  function header() {
    return (
      <View
        style={{
          margin: Sizes.fixPadding * 2.0,
          justifyContent: 'center',
        }}
      >
        <MaterialIcons
          name="keyboard-backspace"
          size={26}
          color={Colors.blackColor}
          style={{ position: 'absolute', zIndex: 100 }}
          onPress={() => {
            navigation.pop();
          }}
        />
        <Text style={CommonStyles.headerTextStyle}>Register Account</Text>
      </View>
    );
  }
};

export default RegisterScreen;
