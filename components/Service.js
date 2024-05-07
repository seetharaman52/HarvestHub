import React from 'react';
import { View, Text, Image } from 'react-native';
import sidemenuService from '../css/service';

const Service = () => {
    return (
        <View style={sidemenuService.container}>
            <View style={sidemenuService.imageContainer}>
                <Image
                    style={sidemenuService.imageLogo}
                    source={require('../assets/HarvestHubLogoWhite.png')}
                />
            </View>
            <Text style={sidemenuService.headingFont}>Services</Text>
            <Text style={sidemenuService.centerTxt}>
                Experience farming innovation with
                our comprehensive agritech service!
                Our app combines cutting-edge
                technology to predict crop yields, offer
                personalized crop suggestions, and
                recommend precise pesticide and
                fertilizer solutions. Harness the power
                of Al-driven insights to optimize your
                farming practices, ensuring bountiful
                harvests. From predicting yields based
                on environmental factors to suggesting
                the right crops and providing pesticide
                and fertilizer recommendations, our
                service is your trusted companion for
                smart and sustainable agriculture.
                Cultivate success with precision,
                efficiency, and the power of data-driven
                farming.
            </Text>
        </View>
    );
};

export default Service;
