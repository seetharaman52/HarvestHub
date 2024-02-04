import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styleSignIn from './css/signin'

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignIn = async () => {
    try {
      console.log(phoneNumber);
      console.log(password);
      const response = await fetch(`http://192.168.99.243:4548/checkPassword/${phoneNumber}/${password}`);
      if (!response.ok) {
        console.log("Inside if not response is Ok");
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.exists) {
        const passwordResponse = await fetch(`http://192.168.99.243:4548/checkPassword/${phoneNumber}/${password}`);
        const passwordData = await passwordResponse.json();
        console.log("Inside 1st if")
        console.log(passwordData);
        if (passwordData.exists) {
          console.log("Inside 2nd if")
          navigation.navigate('TheHub');
        } else {
          console.log("Inside 1st Else");
          alert('Incorrect password. Please try again.');
        }
      } else {
        console.log("Inside 2nd else");
        alert('No account found with this phone number.');
      }
    } catch (error) {
      console.log("Inside Catch block");
      console.error('Error during sign-in:', error);
      alert('Error during sign-in. Please try again.');
    }
  };
  return (
    <View 
      style={styleSignIn.container}
    >
      <Image 
        style={styleSignIn.bg}
          source={require('./assets/SignUpBG.png')}
      />
      <View style={styleSignIn.logoContainer}>
        <Image
          style={styleSignIn.logo}
            source={require('./assets/HarvestHubLogoWhite.png')}
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
      <TextInput
        style={styleSignIn.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
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
