import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SignUpScreen from './components/SignUpScreen'
import SignInScreen from './components/SignInScreen';
import TheHub from './components/TheHub';
import AboutUs from './components/AboutUs';
import Service from './components/Service';
import Contact from './components/Contact';
import ProfilePage from './components/ProfileScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <ProfilePage></ProfilePage>
    </>
    // <NavigationContainer>
    //   <StatusBar
    //     backgroundColor='black'
    //     barStyle="light-content"
    //     hidden={false}
    //   />
    //   <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="SignIn" component={SignInScreen} />
    //     <Stack.Screen name="SignUp" component={SignUpScreen} />
    //     <Stack.Screen name="TheHub" component={TheHub} />
    //     <Stack.Screen name="AboutUs" component={AboutUs} />
    //     <Stack.Screen name="Services" component={Service} />
    //     <Stack.Screen name="Contact" component={Contact} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
