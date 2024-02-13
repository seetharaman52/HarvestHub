import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styleSignIn from '../css/signin'
import loading from '../css/black'
import { validateSignIn } from '../scripts/validation';

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  useEffect(() => {
    checkAuthenticationStatus();
  }, []);

  const checkAuthenticationStatus = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'TheHub' }],
      });
    } else {
      setIsLoading(false);
    }
  };  
  if(isLoading){
    return(
      <View style={loading.st}>
        <Text style={loading.font}>Loading</Text>
      </View>
    )
  }

  const handleSignIn = async () => {
    const validationErr = validateSignIn(phoneNumber, password);
    if (validationErr){
      alert(validationErr);
      return;
    }
    try {
      //console.log(phoneNumber);
      //console.log(password);
      const response = await fetch(`http://192.168.209.243:4548/checkPhoneNumber/${phoneNumber}`);
      //console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      //console.log(data);
      if (data.exists) {
        const passwordResponse = await fetch(`http://192.168.209.243:4548/checkPassword/${phoneNumber}/${password}`);
        const passwordData = await passwordResponse.json();
        if (passwordData.exists) {
          await AsyncStorage.setItem('userToken', 'TestmyToken');
          navigation.navigate('TheHub');
        } else {
          alert('Incorrect password. Please try again.');
        }
      } else {
        alert('No account found with this phone number.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      alert('Error during sign-in. Please try again.');
    }
  };
  return (
    <View 
      style={styleSignIn.container}
    >
      <StatusBar
          barStyle="light-content"
          hidden={false}
      />
      <Image 
        style={styleSignIn.bg}
          source={require('../assets/SignUpBG.png')}
      />
      <View style={styleSignIn.logoContainer}>
        <Image
          style={styleSignIn.logo}
            source={require('../assets/HarvestHubLogoWhite.png')}
        />
      </View>
      <View style={styleSignIn.headingContainer}>
        <Text 
          style={styleSignIn.heading}>
            Sign In
        </Text>
      </View>
      <TextInput
        style={styleSignIn.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setphoneNumber(text)}
        keyboardType="numeric"
      />
      
      <View style={styleSignIn.inputContainer}>
        <TextInput
          style={styleSignIn.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styleSignIn.eyeButton}>
          <View>
            <Text>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styleSignIn.signinButton} onPress={handleSignIn}
      >
        <Text
          style={styleSignIn.signinButtonText}>
            SIGN IN
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
