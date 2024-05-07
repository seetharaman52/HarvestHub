import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import styles from './css/home'
import LottieView from 'lottie-react-native';
import MyLoading from './modal/Loading';
const HomeScreen = ({ navigation }) => {
  const handleSignInPress = () => {
    setAnimationSource(require("./animations/loading.json"));
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('SignIn');
    }, 2000);
  };
  const handleSignUpPress = () => {
    setAnimationSource(require("./animations/loading.json"));
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('SignUp');
    }, 2000);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [animationSource, setAnimationSource] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.animateContainer}>
        <LottieView style={styles.animate} source={require('./animations/welcome.json')} autoPlay loop/>
      </View>
      <StatusBar barStyle="light-content" hidden={false}/>
      <Image style={styles.bg} source={require('./assets/green.jpg')}/>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./assets/HarvestHubLogo.png')}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.centerTxt}>
            Your Agritech companion! Cultivate success with Data-driven insights and optimal farming recommendations for bountiful yields.
        </Text>
      </View>
      <View style={styles.signInUpContainer}>
        <TouchableOpacity style={styles.signButtons} onPress={handleSignInPress}>
          <Text style={styles.signInUpText}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signButtons} onPress={handleSignUpPress}>
          <Text style={styles.signInUpText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <MyLoading visible={modalVisible} animationSource={animationSource}/>
    </View>
  );
};
export default HomeScreen