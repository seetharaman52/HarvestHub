import React from 'react';
import { View, Text, Image } from 'react-native';
import sidemenuContact from '../css/contact';
const Contact = () => {
    return (
        <View style={sidemenuContact.container}>
            <View style={sidemenuContact.centerTxt}>
                <Image
                    style={sidemenuContact.image}
                    source={require('../assets/seetha.jpg')}
                />
                <View style={sidemenuContact.info}>
                    <Text style={sidemenuContact.name}>Seetharaman S</Text>
                    <Text style={sidemenuContact.email}>seetharamanshan699@gmail.com</Text>
                </View>
            {/* </View> */}
            {/* <View style={sidemenuContact.contactItem}> */}
                <Image
                    style={sidemenuContact.image}
                    source={require('../assets/linkedh.jpg')}
                />
                <View style={sidemenuContact.info}>
                    <Text style={sidemenuContact.name}>Linkedh S</Text>
                    <Text style={sidemenuContact.email}>linkedh28@gmail.com</Text>
                </View>
            {/* </View> */}
            {/* <View style={sidemenuContact.contactItem}> */}
                <Image
                    style={sidemenuContact.image}
                    source={require('../assets/jegan.jpg')}
                />
                <View style={sidemenuContact.info}>
                    <Text style={sidemenuContact.name}>Jegan K</Text>
                    <Text style={sidemenuContact.email}>jeganoct14@gmail.com</Text>
                </View>
            {/* </View> */}
            {/* <View style={sidemenuContact.contactItem}> */}
                <Image
                    style={sidemenuContact.image}
                    source={require('../assets/prasanth.jpg')}
                />
                <View style={sidemenuContact.info}>
                    <Text style={sidemenuContact.name}>Prasanth M</Text>
                    <Text style={sidemenuContact.email}>prasanthbike@gmail.com</Text>
                </View>
            {/* </View> */}
            </View>
        </View>
    );
};

export default Contact;
