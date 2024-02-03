import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import HubStyles from './css/hub';

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
}

const TheHub = () => {
    return (
        // First Part
        <View style={HubStyles.container}> 
            <View style={HubStyles.firstContainer}>
                <View style={HubStyles.logoContainer}>
                    <Image
                        style={HubStyles.logo}
                        source={require('./assets/HarvestHubLogoWhite.png')}
                    />
                </View>
                <View style={HubStyles.headerTextContainer}>
                    <Text style={HubStyles.headerText}>
                        Harvest Hub Inc.
                    </Text>
                </View>
            </View>

            {/* Second Part */}
            <View style={HubStyles.harvestorContainer}>
                <Image
                    style={HubStyles.harvestorImage}
                    source={require('./assets/Harvestor.png')}
                />
            </View>

            {/* Third Part */}
            <View style={HubStyles.iconsContainer}>
                {/* Box 1 */}
                <View style={HubStyles.iconBox}>
                    <TouchableOpacity style={HubStyles.iconBox} onPress={() => handleIconClick('YieldView')}>
                        <Image
                            style={HubStyles.icon}
                                source={require('./assets/yield.png')}
                        />
                        <Text style={HubStyles.iconText}>Yield View</Text>
                    </TouchableOpacity>
                </View>

                {/* Box 2 */}
                <View style={HubStyles.iconBox}>
                    <TouchableOpacity style={HubStyles.iconBox} onPress={() => handleIconClick('GrowWise')}>
                        <Image
                            style={HubStyles.icon}
                                source={require('./assets/field.png')}
                        />
                        <Text style={HubStyles.iconText}>Grow Wise</Text>
                    </TouchableOpacity>
                </View>

                {/* Box 3 */}
                <View style={HubStyles.iconBox}>
                    <TouchableOpacity style={HubStyles.iconBox} onPress={() => handleIconClick('PestShield')}>
                        <Image
                            style={HubStyles.icon}
                                source={require('./assets/chemical.png')}
                        />
                        <Text style={HubStyles.iconText}>Pest Shield</Text>
                    </TouchableOpacity>
                </View>

                {/* Box 4 */}
                <View style={HubStyles.iconBox}>
                    <TouchableOpacity style={HubStyles.iconBox} onPress={() => handleIconClick('FertileFeed')}>
                        <Image
                            style={HubStyles.icon}
                                source={require('./assets/chemicals.png')}
                        />
                        <Text style={HubStyles.iconText}>Fertile Feed</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Fourth Part */}
            <View style={HubStyles.rectangleContainer}>
                <Image
                    style={HubStyles.iconRect}
                    source={require('./assets/virus.png')}
                />
                <Text style={HubStyles.iconTextrect}>Plant Disease Detection</Text>     
            </View>
            <Text style={HubStyles.launchingSoonText}>Launching Soon</Text> 

            {/* Fifth part */}
            <View style={HubStyles.bottomMenuContainer}>
                <TouchableOpacity>
                    <Image
                        style={HubStyles.menuIcon}
                        source={require('./assets/HarvestHubLogoWhite.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={HubStyles.menuIcon}
                        source={require('./assets/user.png')}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image
                        style={HubStyles.menuIcon}
                        source={require('./assets/newspaper.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={HubStyles.menuIcon}
                        source={require('./assets/menu.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TheHub;
