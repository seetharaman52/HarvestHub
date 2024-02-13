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
import News from './components/NewsPage';
import GrowWise from './components/GrowWise';
import YieldView from './components/YieldView';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <>
    // <ProfilePage></ProfilePage>
    // </>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="TheHub" component={TheHub} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Services" component={Service} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="GrowWise" component={GrowWise} />
        <Stack.Screen name="YieldView" component={YieldView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
