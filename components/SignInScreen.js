import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styleSignIn from '../css/signin'
import { validateSignIn } from '../scripts/validation';
import LottieView from 'lottie-react-native';
import MyModal from '../modal/MyModal';
import MyLoading from '../modal/Loading';

const SignInScreen = ({ navigation }) => {

  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // Modal 1
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [animationSource, setAnimationSource] = useState('');
  // Modal 2
  const [LoadingModalVisible, setLoadingModalVisible] = useState(false);
  const [LoadingModalanimationSource, setLoadingModalanimationSource] = useState('');

  const togglePasswordVisibility = () => {setShowPassword(!showPassword);};

  const handleSignIn = async () => {
    const validationErr = validateSignIn(phoneNumber, password);
    if (validationErr){
      setModalVisible(true);
      setModalMessage(validationErr);
      setAnimationSource(require("../animations/wrong.json"));
      return;
    }
    try {
      const response = await fetch(`http://192.168.228.243:4548/checkPhoneNumber/${phoneNumber}`);
      if (!response.ok) {throw new Error(`HTTP error! Status: ${response.status}`);}
      const data = await response.json();
      if (data.exists) {
        const passwordResponse = await fetch(`http://192.168.228.243:4548/checkPassword/${phoneNumber}/${password}`);
        const passwordData = await passwordResponse.json();
        if (passwordData.exists) {
          await AsyncStorage.setItem('userToken', 'TestmyToken');
          setLoadingModalanimationSource(require("../animations/loading.json"));
          setLoadingModalVisible(true);
          setTimeout(() => {
            setLoadingModalVisible(false);
            navigation.navigate('TheHub');
          }, 2000);
        } else {
          setLoadingModalanimationSource(require("../animations/loading.json"));
          setLoadingModalVisible(true);
          setTimeout(() => {
            setLoadingModalVisible(false);
            setModalMessage('Incorrect password. Please try again.');
            setAnimationSource(require("../animations/wrong.json"));
            setModalVisible(true);
          }, 2000);
        }
      } else {
        setLoadingModalanimationSource(require("../animations/loading.json"));
        setLoadingModalVisible(true);
        setTimeout(() => {
          setLoadingModalVisible(false);
          setModalMessage('No account found with this phone number.');
          setAnimationSource(require("../animations/wrong.json"));
          setModalVisible(true);
        }, 2000);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setLoadingModalanimationSource(require("../animations/loading.json"));
      setLoadingModalVisible(true);
      setTimeout(() => {
        setLoadingModalVisible(false);
        setModalMessage('Error during sign-in. Please try again.');
        setAnimationSource(require("../animations/wrong.json"));
        setModalVisible(true);
      }, 2000);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS == "ios" ? 100 : 0} style={styleSignIn.container}>
      <StatusBar barStyle="light-content" hidden={false}/>
      <Image style={styleSignIn.bg} source={require('../assets/SignUpBG.png')}/>
      <View style={styleSignIn.logoContainer}>
        <Image style={styleSignIn.logo} source={require('../assets/HarvestHubLogoWhite.png')}/>
      </View>
      <View style={styleSignIn.headingContainer}>
        <Text style={styleSignIn.heading}>Sign in</Text>
      </View>
      <View style={styleSignIn.inputContainer}>
        <TextInput
          style={styleSignIn.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setphoneNumber(text)}
          keyboardType="numeric"
          autoFocus
        />
        <TextInput
          style={styleSignIn.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword}
        />
      </View>
      <View style={styleSignIn.SignInbuttonContainer}>
        <TouchableOpacity style={styleSignIn.signinButton} onPress={handleSignIn}>
          <Text style={styleSignIn.signinButtonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <View style={styleSignIn.forgotContainer}>
        <TouchableOpacity>
          <Text style={styleSignIn.forgot_text}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styleSignIn.animateContainerEye}>
        <TouchableOpacity style={styleSignIn.eyeButton} onPress={togglePasswordVisibility}>
          <LottieView style={styleSignIn.animateEye} source={require('../animations/eye.json')} autoPlay loop/>
        </TouchableOpacity>
      </View>
      <MyModal visible={modalVisible} message={modalMessage} onClose={closeModal} animationSource={animationSource}/>
      <MyLoading visible={LoadingModalVisible} animationSource={LoadingModalanimationSource}/>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
