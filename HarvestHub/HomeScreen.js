import { Text, Image, View, TouchableOpacity } from 'react-native';
import styles from './css/home'

const CurvedBottom = () => (
  <View style={styles.curveContainer}>
    <View style={styles.curve}></View>
  </View>
);

const HomeScreen = () => {

  const handleButtonPress = () => {
      console.log('SignUp');
  };

  return (
    <View 
      style={styles.container}
    >
        <Image 
          style={styles.logo}
            source={require('./assets/HarvestHubLogo.png')}
        />
      <Text 
        style={styles.textHome}>
          Welcome to Harvest Hub!
      </Text>
      <Text 
        style={styles.phraseHome}>
          Your Agritech companion! Cultivate success with Data-driven insights and optimal farming recommendations for bountiful yields
      </Text>
      <View 
        style={styles.signInUpContainer}
      >
        <TouchableOpacity 
          style={[styles.signInUpButton, styles.signInButton]} 
          onPress={handleButtonPress}
        >
          <Text 
            style={styles.signInUp}>
              SIGN IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.signInUpButton} 
          onPress={handleButtonPress}
        >
          <Text 
            style={[styles.signInUp, styles.signUpButton]}>
              SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
      <CurvedBottom />
    </View>
  );
};

export default HomeScreen