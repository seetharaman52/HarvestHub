import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import styles from './css/home'

const HomeScreen = ({ navigation }) => {

  const handleSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View 
      style={styles.container}
    >
        <Image 
          style={styles.bg}
            source={require('./assets/green.jpg')}
        />
        <Image 
          style={styles.logo}
            source={require('./assets/HarvestHubLogo.png')}
        />
      <Text 
        style={styles.textHome}>
          Welcome to Harvest Hub
      </Text>
      <Text 
        style={styles.centerTxt} >
          Your Agritech companion! Cultivate success with Data-driven insights and optimal farming recommendations for bountiful yields
      </Text>
      <View 
        style={styles.signInUpContainer}
      >
        <TouchableOpacity 
          style={[styles.signInUpButton, styles.signInButton]} 
          onPress={handleSignInPress}
        >
          <Text 
            style={styles.signInUp}>
              SIGN IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.signInUpButton} 
          onPress={handleSignUpPress}
        >
          <Text 
            style={[styles.signInUp, styles.signUpButton]}>
              SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen