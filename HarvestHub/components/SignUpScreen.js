import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styleSignUp from '../css/signup'
import { validateSignUp } from '../scripts/validation'

const SignUpScreen = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate('SignIn');
  }

  const handleSignUp = async () => {
    const validationErr = validateSignUp(username, phoneNumber, email, password);
    if (validationErr){
      alert(validationErr);
      return;
    }
    try {
      const phoneResponse = await fetch(`http://192.168.104.243:4548/checkPhoneNumber/${phoneNumber}`);
      const mailResponse = await fetch(`http://192.168.104.243:4548/email/${email}`);
      const usernameResponse = await fetch(`http://192.168.104.243:4548/username/${username}`);
      const phone = await phoneResponse.json();
      const mail = await mailResponse.json();
      const user = await usernameResponse.json();
      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }
      if (phone.exists) {
        alert('Phone number already exists. Please use a different one.');
      } 
      if (mail.exists){
        alert('Entered Email already exixts!');
      }
      if (user.exists){
        alert('Username already exists! Please try different username!');
      }
      else {
        const signupResponse = await fetch('http://192.168.99.243:4548/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, phoneNumber, email, password }),
            });
            if (!signupResponse.ok) {
                throw new Error(`HTTP error! Status: ${signupResponse.status}`);
            }

            const signupData = await signupResponse.json();

            if (signupData.success) {
                alert('Signup successful!');
                navigation.navigate('Home');
            } else {
                alert('Error during signup. Please try again.');
            }
      }
  
    } catch (error) {
      console.error('Error checking phone number:', error);
      alert('Error checking phone number. Please try again.');
    }
  }

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View 
      style={styleSignUp.container}
    >
      <Image 
        style={styleSignUp.bg}
          source={require('../assets/SignUpBG.png')}
      />
      
      <View style={styleSignUp.headingContainer}>
        <Text 
          style={styleSignUp.heading}>
            Sign Up
        </Text>
      </View>
      <Text 
        style={styleSignUp.newacc}>
          Create New Account
      </Text>
      <TextInput
        style={styleSignUp.input}
        placeholder="User name"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styleSignUp.input}
        placeholder="Phone number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styleSignUp.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styleSignUp.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity 
        style={styleSignUp.signupButton} onPress={handleSignUp}
      >
        <Text 
          style={styleSignUp.signupButtonText}>
            SIGN UP
        </Text>
      </TouchableOpacity>
        <Text 
          style={styleSignUp.indicateBottom}>
            <TouchableOpacity onPress={handleSignIn}>
              <Text style={styleSignUp.signInButton}>
                Already Have a Account? Sign In
              </Text>
            </TouchableOpacity>
        </Text>
    </View>
  );
};

export default SignUpScreen;
