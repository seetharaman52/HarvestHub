import React from 'react';
import { View, Text, Image } from 'react-native';
import sidemenu from '../css/aboutus';

const AboutUs = () => {
    return (
        <View style={sidemenu.container}>
            <View style={sidemenu.imageContainer}>
                <Image
                    style={sidemenu.imageLogo}
                    source={require('../assets/HarvestHubLogoWhite.png')}
                />
            </View>
            <Text style={sidemenu.headingFont}>About Us</Text>
            <Text style={sidemenu.centerTxt}>
                Harvest Hub, the brainchild of
                Karpagam Institute of Technology
                students, is a revolutionary farmer data
                app. Merging smart analytics, crop
                monitoring, marketplace integration,
                and weather forecasts, it empowers
                farmers with real-time insights. Join our
                collaborative community to enhance
                decision-making and productivity. With
                Harvest Hub, technology meets
                agriculture seamlessly, redefining the
                future of farming. Download now and
                cultivate success through innovation
                and connectivity, making every field a
                beacon of prosperity.
            </Text>
        </View>
    );
};

export default AboutUs;
