import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import styleSignUp from '../css/signup'
import { StatusBar } from 'expo-status-bar';
import { validateSignUp } from '../scripts/validation'
import LottieView from 'lottie-react-native';
import MyModal from '../modal/MyModal';
import MyLoading from '../modal/Loading';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {setShowPassword(!showPassword);};
  // Modal 1
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [animationSource, setAnimationSource] = useState('');

  // Modal 2
  const [LoadingModalVisible, setLoadingModalVisible] = useState(false);
  const [LoadingModalanimationSource, setLoadingModalanimationSource] = useState('');

  const closeModal = () => {
    setModalVisible(false);
  }

  const handleSignIn = () => {
    setLoadingModalVisible(true);
    setLoadingModalanimationSource(require("../animations/loading.json"));
    setTimeout(() => {
      setLoadingModalVisible(false);
      navigation.navigate('SignIn');
    }, 2000);
  }
  const handleSignUp = async () => {
    const validationErr = validateSignUp(username, phoneNumber, email, password);
    if (validationErr){
      setModalVisible(true);
      setModalMessage(validationErr);
      setAnimationSource(require("../animations/wrong.json"));
      return;
    }
    try {
      const phoneResponse = await fetch(`http://192.168.228.243:4548/checkPhoneNumber/${phoneNumber}`);
      const mailResponse = await fetch(`http://192.168.228.243:4548/email/${email}`);
      const usernameResponse = await fetch(`http://192.168.228.243:4548/username/${username}`);
      const phone = await phoneResponse.json();
      const mail = await mailResponse.json();
      const user = await usernameResponse.json();
      if (phone.exists) {
        setModalMessage('Phone number already exists. Please use a different one.');
        setAnimationSource(require("../animations/wrong.json"));
        setModalVisible(true);
      } 
      else if (mail.exists){
        setModalMessage('Entered Email already exixts!');
        setAnimationSource(require("../animations/wrong.json"));
        setModalVisible(true);
      }
      else if (user.exists){
        setModalMessage('Username already exists! Please try different username!');
        setAnimationSource(require("../animations/wrong.json"));
        setModalVisible(true);
      }
      else {
        const signupResponse = await fetch('http://192.168.228.243:4548/signup', {
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
                // Loading Modal
                setLoadingModalanimationSource(require("../animations/loading.json"));
                setLoadingModalVisible(true);
                setTimeout(() => {
                  setLoadingModalVisible(false);
                  // Success Modal
                  setModalMessage('Signup successful!');
                  setAnimationSource(require("../animations/success.json"));
                  setModalVisible(true);
                  setTimeout(() => {
                    closeModal();
                    navigation.navigate('SignIn');
                  }, 4000);
                }, 2000);
            } else {
                setModalMessage('Error during signup. Please try again.');
                setAnimationSource(require("../animations/wrong.json"));
                setModalVisible(true);
            }
      }
    } catch (error) {
      console.error('Error checking phone number:', error);
      setModalMessage('Error checking phone number. Please try again.');
      setAnimationSource(require("../animations/wrong.json"));
      setModalVisible(true);
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS == "ios" ? 100 : 0} style={styleSignUp.container}>
      <StatusBar barStyle="light-content" hidden={false}/>
      <Image style={styleSignUp.bg} source={require('../assets/SignUpBG.png')}/>
      <View style={styleSignUp.logoContainer}>
        <Image style={styleSignUp.logo} source={require('../assets/HarvestHubLogoWhite.png')}/>
      </View>
      <View style={styleSignUp.headingContainer}>
        <Text style={styleSignUp.heading}>Create New Account</Text>
      </View>
      <View style={styleSignUp.inputContainer}>
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
          secureTextEntry={!showPassword}
        />
      </View>
      <View style={styleSignUp.signUpButtonContainer}>
        <TouchableOpacity style={styleSignUp.signupButton} onPress={handleSignUp}>
          <Text style={styleSignUp.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styleSignUp.alreadyContainer}>
        <Text style={styleSignUp.indicateBottom}>
            <TouchableOpacity onPress={handleSignIn}>
              <Text style={styleSignUp.signInButton}>Already Have a Account? Sign In</Text>
            </TouchableOpacity>
        </Text>
      </View>
      <View style={styleSignUp.animateContainerEye}>
        <TouchableOpacity style={styleSignUp.eyeButton} onPress={togglePasswordVisibility}>
          <LottieView style={styleSignUp.animateEye} source={require('../animations/eye.json')} autoPlay loop/>
        </TouchableOpacity>
      </View>
      <MyModal visible={modalVisible} message={modalMessage} onClose={closeModal} animationSource={animationSource}/>
      <MyLoading visible={LoadingModalVisible} animationSource={LoadingModalanimationSource}/>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
