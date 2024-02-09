import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Easing, Platform } from 'react-native';
import HubStyles from '../css/hub';
import { useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loading from '../css/black'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TheHub = ({ navigation }) => {
    const Tab = createBottomTabNavigator();
    const [isSideMenuOpen, setSideMenuOpen] = useState(false);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [isLoading, setIsLoading] = useState(true);
    
    const handleIconClick = (def="") => {
        if (def == "YieldView"){
            alert("Yield View");
        }
        else if (def == 'FertileFeed'){
            alert("Fertile Feed");
        }
        else if (def == "PestShield"){
            alert("Pest Shield");
        }
        else if (def == "GrowWise"){
            alert("Grow Wise");
        }
        else if (def == "newFeature"){
            alert("Feature growing soon..!");
        }
    }

    const handleSideMenu = (def="") => {
        if (def == "AboutUs"){
            navigation.navigate("AboutUs");
        }
        if (def == "services"){
            navigation.navigate("Services");
        }
        if (def == "contact"){
            navigation.navigate("Contact");
        }
    }

    handleBottomMenu = (def="") => {
        if (def=="Hub"){
            navigation.navigate("TheHub");
        }
    }
    useEffect(() => {
        checkAuthenticationStatus();
      }, []);

    const checkAuthenticationStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setIsLoading(false);
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'SignIn' }],
        });
      }
    };  

    const handleLogout = async () => {
      await AsyncStorage.removeItem('userToken');
      navigation.reset({
        index: 0,
        routes: [{ name: 'SignIn' }],
      });
    };

    if (isLoading) {
      return (
        <View style={loading.st}>
          <Text style={loading.font}>Loading</Text>
        </View>
      );
    }

    const handleIconClickMenu = () => {
        setSideMenuOpen(prevState => !prevState);
        Animated.timing(animatedValue, {
            toValue: !isSideMenuOpen ? 1 : 0,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: Platform.OS === 'android' ? false : true,
        }).start(error => {
            if (error) {
                //console.error("Animation failed:", error.message);
            }
        });
    };

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [250, 0],
    });

    return (
        // First Part
        <View style={HubStyles.container}> 
            <View style={HubStyles.firstContainer}>
                <View style={HubStyles.logoContainer}>
                    <Image
                        style={HubStyles.logo}
                        source={require('../assets/HarvestHubLogoWhite.png')}
                    />
                </View>
                <View style={HubStyles.headerTextContainer}>
                    <Text style={HubStyles.headerText}>
                        Harvest Hub Ltd.
                    </Text>
                </View>
            </View>

            {/* Second Part */}
            <View style={HubStyles.harvestorContainer}>
                <Image
                    style={HubStyles.harvestorImage}
                    source={require('../assets/Harvestor.png')}
                />
            </View>

            {/* Third Part */}
            <View style={HubStyles.iconsContainer}>
                {/* Box 1 */}
                <View style={HubStyles.iconBox}>
                    <TouchableOpacity style={HubStyles.iconBox} onPress={() => handleIconClick('YieldView')}>
                        <Image
                            style={HubStyles.icon}
                                source={require('../assets/yield.png')}
                        />
                        <Text style={HubStyles.iconText}>Yield View</Text>
                    </TouchableOpacity>
                </View>

                {/* Box 2 */}
                <View style={HubStyles.iconBox}>
                    <TouchableOpacity style={HubStyles.iconBox} onPress={() => handleIconClick('GrowWise')}>
                        <Image
                            style={HubStyles.icon}
                                source={require('../assets/field.png')}
                        />
                        <Text style={HubStyles.iconText}>Grow Wise</Text>
                    </TouchableOpacity>
                </View>

                {/* Box 3 */}
                <View style={HubStyles.iconBox}>
                    <TouchableOpacity style={HubStyles.iconBox} onPress={() => handleIconClick('PestShield')}>
                        <Image
                            style={HubStyles.icon}
                                source={require('../assets/chemical.png')}
                        />
                        <Text style={HubStyles.iconText}>Pest Shield</Text>
                    </TouchableOpacity>
                </View>

                {/* Box 4 */}
                <View style={HubStyles.iconBox}>
                    <TouchableOpacity style={HubStyles.iconBox} onPress={() => handleIconClick('FertileFeed')}>
                        <Image
                            style={HubStyles.icon}
                                source={require('../assets/chemicals.png')}
                        />
                        <Text style={HubStyles.iconText}>Fertile Feed</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Fourth Part */}
            <View style={HubStyles.rectangleContainer}>
                <Image
                    style={HubStyles.iconRect}
                    source={require('../assets/virus.png')}
                />
                <TouchableOpacity onPress={() => handleIconClick("newFeature")}>
                <Text style={HubStyles.iconTextrect}>Plant Disease Detection</Text> 
                </TouchableOpacity>    
            </View>
            <Text style={HubStyles.launchingSoonText}>Launching Soon</Text> 

            {/* Side Menu */}

            <Animated.View style={[HubStyles.sideMenuContainer, { transform: [{ translateX }] }]}>
            {isSideMenuOpen && (
                <>
                    <Image style={HubStyles.sidelogo} source={require('../assets/HarvestHubLogoBlack.png')} />
                    
                    <TouchableOpacity onPress={() => handleSideMenu("AboutUs")}>
                    <Text style={HubStyles.sideMenuItem}>About Us</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => handleSideMenu("services")}>
                    <Text style={HubStyles.sideMenuItem}>Services</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => handleSideMenu("contact")}>
                    <Text style={HubStyles.sideMenuItem}>Contact</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                    <Text style={HubStyles.sideMenuItem}>Join Us!</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => handleLogout()}>
                    <Text style={HubStyles.sideMenuItem}>Log Out</Text>
                    </TouchableOpacity>
                </>
            )}
            </Animated.View>

            {/* Fifth part */}
            <View style={HubStyles.bottomMenuContainer}>
                <TouchableOpacity onPress={() => handleBottomMenu("Hub")}>
                    <Image
                        style={HubStyles.menuIcon}
                        source={require('../assets/HarvestHubLogoWhite.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={HubStyles.menuIcon}
                        source={require('../assets/user.png')}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image
                        style={HubStyles.menuIcon}
                        source={require('../assets/newspaper.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleIconClickMenu()}>
                    <Image
                        style={HubStyles.menuIcon}
                        source={require('../assets/menu.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TheHub;
