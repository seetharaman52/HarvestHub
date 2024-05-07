import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, Animated, Easing, SafeAreaView, ScrollView } from 'react-native';
import HubStyles from '../css/hub';
import { useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import MyLoading from '../modal/Loading';
import AlertModal from '../modal/AlertModal';

const TheHub = ({ navigation }) => {
    const [isSideMenuOpen, setSideMenuOpen] = useState(false);

    const [LoadingModalVisible, setLoadingModalVisible] = useState(false);
    const [LoadingModalanimationSource, setLoadingModalanimationSource] = useState('');
    const [LoadingAlert, setLoadingAlert] = useState(false);
    const [customText, setcustomText] = useState("Feature growing soon..!");

    const onClose = () => {
        setLoadingAlert(false);
    }
    
    const handleIconClick = (def="") => {
        if (def == "YieldView"){
            navigation.navigate("YieldView");
        }
        else if (def == 'FertileFeed'){
            setcustomText("Fertile Feed coming soon!");
            setLoadingAlert(true);
        }
        else if (def == "PestShield"){
            setcustomText("Pest Shield coming soon!");
            setLoadingAlert(true);
        }
        else if (def == "GrowWise"){
            navigation.navigate("GrowWise");
        }
        else if (def == "newFeature"){
            setcustomText("Feature growing soon..!");
            setLoadingAlert(true);
        }
    }

    const handleSideMenu = (def="") => {
        if (def == "AboutUs"){navigation.navigate("AboutUs");}
        else if (def == "services"){navigation.navigate("Services");}
        else if (def == "contact"){navigation.navigate("Contact");}
        else if (def == "profilePage"){navigation.navigate("Profile");}
        else if (def == "News"){
            setLoadingModalanimationSource(require("../animations/loading.json"));
            setLoadingModalVisible(true);
            setTimeout(() => {
                setLoadingModalVisible(false);
                navigation.navigate("News");
            }, 1000);
        }
        else if (def == "JoinUs"){
            setcustomText("Page coming soon!");
            setLoadingAlert(true)
        }
    }

    handleBottomMenu = (def="") => {
        if (def=="Hub"){navigation.navigate("TheHub");}
    }

    useEffect(() => {checkAuthenticationStatus();}, []);

    const checkAuthenticationStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (!userToken) {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'SignIn' }],
            });
        }, 2000);
      }
    };  

    const handleLogout = async () => {
      await AsyncStorage.removeItem('userToken');
      setLoadingModalanimationSource(require("../animations/loading.json"));
      setLoadingModalVisible(true);
      setTimeout(() => {
        setLoadingModalVisible(false);
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
            });
        }, 2000);
    };

    // Sidemenu Animation
    const animatedValue = useRef(new Animated.Value(0)).current;
    const handleIconClickMenu = () => {
        setSideMenuOpen(prevState => !prevState);
        Animated.timing(animatedValue, {
            toValue: !isSideMenuOpen ? 1 : 0,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    };

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [250, 0],
    });

    return (
        // First Part
        <SafeAreaView style={HubStyles.container}> 
            <StatusBar barStyle="light-content" hidden={false}/>
            <View style={HubStyles.firstContainer}>
                <View style={HubStyles.logoContainer}>
                    <Image style={HubStyles.logo} source={require('../assets/HarvestHubLogoWhite.png')}/>
                </View>
                <View style={HubStyles.headerTextContainer}>
                    <Text style={HubStyles.headerText}>Harvest Hub Ltd.</Text>
                </View>
            </View>

            {/* Second Part */}
            <View style={HubStyles.harvestorContainer}>
                <Image style={HubStyles.harvestorImage} source={require('../assets/Harvestor.png')}/>
            </View>

            {/* Third Part */}
            <ScrollView style={HubStyles.ScrollViewCustom}>
            <View style={HubStyles.iconsContainer}>
                {/* Box 1 */}
                <View style={HubStyles.iconBox}>
                    <TouchableOpacity style={HubStyles.iconBox} onPress={() => handleIconClick('YieldView')}>
                        <Image style={HubStyles.icon} source={require('../assets/yield.png')}/>
                        <Text style={HubStyles.iconText}>Yield View</Text>
                    </TouchableOpacity>
                </View>

                {/* Box 2 */}
                <View style={HubStyles.iconBox}>
                    <TouchableOpacity style={HubStyles.iconBox} onPress={() => handleIconClick('GrowWise')}>
                        <Image style={HubStyles.icon} source={require('../assets/field.png')}/>
                        <Text style={HubStyles.iconText}>Grow Wise</Text>
                    </TouchableOpacity>
                </View>

                {/* Box 3 */}
                <View style={HubStyles.iconBox}>
                    <TouchableOpacity style={HubStyles.iconBox} onPress={() => handleIconClick('PestShield')}>
                        <Image style={HubStyles.icon} source={require('../assets/chemical.png')}/>
                        <Text style={HubStyles.iconText}>Pest Shield</Text>
                    </TouchableOpacity>
                </View>

                {/* Box 4 */}
                <View style={HubStyles.iconBox}>
                    <TouchableOpacity style={HubStyles.iconBox} onPress={() => handleIconClick('FertileFeed')}>
                        <Image style={HubStyles.icon} source={require('../assets/chemicals.png')}/>
                        <Text style={HubStyles.iconText}>Fertile Feed</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Fourth Part */}
            <View style={HubStyles.rectangleContainer}>
                <Image style={HubStyles.iconRect} source={require('../assets/virus.png')}/>
                <TouchableOpacity onPress={() => handleIconClick("newFeature")}>
                <Text style={HubStyles.iconTextrect}>Plant Disease Detection</Text> 
                </TouchableOpacity>    
            </View>
            <Text style={HubStyles.launchingSoonText}>Launching Soon</Text> 
            </ScrollView>

            {/* Side Menu */}

            <Animated.View style={[HubStyles.sideMenuContainer, {transform:[{translateX}]} ]}>
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
                    
                    <TouchableOpacity onPress={() => handleSideMenu("JoinUs")}>
                        <Text style={HubStyles.sideMenuItem}>Join Us!</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => handleLogout()}>
                        <Text style={[HubStyles.sideMenuItem, HubStyles.sidemenuLogOut]}>Log Out</Text>
                        <View style={HubStyles.animateContainer}>
                            <LottieView style={HubStyles.animate} source={require('../animations/logout.json')} autoPlay loop/>
                        </View>
                    </TouchableOpacity>
                </>
            )}
            </Animated.View>

            {/* Fifth part */}
            <View style={HubStyles.bottomMenuContainer}>
                <TouchableOpacity onPress={() => handleBottomMenu("Hub")}>
                    <Image style={HubStyles.menuIconHub} source={require('../assets/HarvestHubLogoWhite.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleSideMenu("profilePage")}>
                    <Image style={HubStyles.menuIcon} source={require('../assets/user.png')}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => handleSideMenu("News")}>
                    <Image style={HubStyles.menuIcon} source={require('../assets/newspaper.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleIconClickMenu()}>
                    <Image style={HubStyles.menuIcon} source={require('../assets/menu.png')}/>
                </TouchableOpacity>
            </View>
            <MyLoading visible={LoadingModalVisible} animationSource={LoadingModalanimationSource}/>
            <AlertModal visible={LoadingAlert} onClose={onClose} CustomText={customText}/>
        </SafeAreaView>
    );
};

export default TheHub;
