import { StyleSheet } from "react-native";
import { 
    responsiveHeight, 
    responsiveWidth, 
    responsiveFontSize,
} from "react-native-responsive-dimensions";

const styleSignUp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    bg: {
        flex: 1,
        position: 'absolute',
        resizeMode: 'cover',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },

    logoContainer: {
        bottom: responsiveHeight(1),
        zIndex: 1,
    },
    
    logo: {
        width: responsiveWidth(50),
        height: responsiveHeight(17),
        resizeMode: 'cover',
    },

    headingContainer: {
        bottom: responsiveHeight(4),
    },

    heading: {
        fontSize: responsiveFontSize(3),
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'underline',
        top: responsiveHeight(2),
    },

    inputContainer: {
        gap: responsiveHeight(1),
    },

    input: {
        borderRadius: 5,
        overflow: 'hidden',
        width: responsiveWidth(60),
        height: responsiveHeight(6),
        fontSize: responsiveFontSize(1.8),
        paddingLeft: responsiveWidth(3),
        paddingRight: responsiveWidth(3),
        backgroundColor: 'rgba(255,255,255,0.8)',
    },

    signUpButtonContainer:{
        top: responsiveHeight(1.5),
    },

    signupButton: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 5,
        padding: responsiveHeight(1),
    },

    signupButtonText: {
        fontWeight: 'bold',
    },

    alreadyContainer:{
        top: responsiveHeight(4),
    },

    indicateBottom: {
        color: 'white',
        textAlign: 'center',
    },

    signInButton: {
        fontSize: responsiveFontSize(2),
        color: 'white',
        textDecorationLine: 'underline',
    },

    animateContainerEye: {
        bottom: responsiveHeight(12.3),
        left: responsiveHeight(11),
    },
    
    animateEye: {
        flex: 1,
    },
    
    eyeButton: {
        height: responsiveHeight(4),
        width: responsiveHeight(4),
    },

});

export default styleSignUp;