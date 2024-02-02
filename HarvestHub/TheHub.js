import React from 'react';
import { View, Text, Image } from 'react-native';
import HubStyles from './css/hub';

const TheHub = () => {
    return (
        <View style={HubStyles.container}>
            <Text style={HubStyles.heading}>
                Harvest Hub Inc.
            </Text>
        </View>
    );
};

export default TheHub;
