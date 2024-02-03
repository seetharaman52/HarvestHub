import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styleSignUp from './css/signup'

const SignUpScreen = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate('SignIn');
  }
  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fullNameisValid = () => fullname.trim() !== '';
  const fullNumisValid = () => phoneNumber.trim() !== '' && !isNaN(phoneNumber) && phoneNumber.length > 9;
  const EmailisValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const PasswordisValid = () => password.length >= 6;

  const handleSignUp = () => {
    if (!fullNameisValid()) {
      alert('Please enter a valid full name.');
      return;
    }

    if (!fullNumisValid()) {
      alert('Please enter a valid phone number.');
      return;
    }

    if (!EmailisValid()) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!PasswordisValid()) {
      alert('Password must be at least 6 characters long.');
      return;
    }
    alert('Signup successful!');
  };

  return (
    <View 
      style={styleSignUp.container}
    >
      <Image 
        style={styleSignUp.bg}
          source={require('./assets/SignUpBG.png')}
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
        placeholder="Full name"
        value={fullname}
        onChangeText={(text) => setFullname(text)}
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
