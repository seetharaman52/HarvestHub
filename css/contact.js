import { StyleSheet, Dimensions } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const sidemenuContact = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: responsiveWidth(20),
        height: responsiveHeight(10),
        resizeMode: 'cover',
        borderRadius: 60,
        marginRight: 20,
    },
    info: {
        flex: 1,
    },
    name: {
        textAlign: 'center',
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },
    email: {
        textAlign: 'center',
        color: 'white',
        fontSize: responsiveFontSize(2),
    },
    centerTxt: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        fontSize: responsiveFontSize(2),
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 50,
        marginTop: responsiveHeight(7),
        marginBottom: responsiveHeight(7),
    },
});

export default sidemenuContact;