import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styleSignIn from './css/signin'

const handleSignIn = () => {
  alert("You clicked Sign In!");
}

const SignInScreen = () => {
  const [username, setFullname] = useState('');
  const [password, setPassword] = useState('');

  const userNameisValid = () => username.trim() !== ''; // DB
  const PasswordisValid = () => password.length >= 6; // DB

  const handleSignIn = () => {
    if (!userNameisValid()) {
      alert('Please enter a valid username.'); // DB
      return;
    }

    if (!PasswordisValid()) {
      alert('Password must be at least 6 characters long.'); //DB
      return;
    }
    alert('Sign In successful!');
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
        placeholder="Username"
        value={username}
        onChangeText={(text) => setFullname(text)}
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
