import { StyleSheet } from "react-native";
import { 
    responsiveHeight, 
    responsiveWidth, 
    responsiveFontSize,
} from "react-native-responsive-dimensions";

const styleSignIn = StyleSheet.create({
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

  modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.8)',
  },

  modalContent: {
    backgroundColor: 'white',
    padding: responsiveHeight(2),
    borderRadius: 5,
    alignItems: 'center',
  },

  modalMessage:{
    fontSize: responsiveFontSize(2),
  },

  modalButton:{
    borderRadius: 5,
  },

  animateWrong: {
    height: responsiveHeight(5),
    width: responsiveHeight(5),
  },

  logoContainer: {
    bottom: responsiveHeight(6),
    zIndex: 1,
  },

  logo: {
    width: responsiveWidth(50),
    height: responsiveHeight(17),
    resizeMode: 'cover',
  },

  headingContainer: {
    bottom: responsiveHeight(6),
  },

  heading: {
    fontSize: responsiveFontSize(3),
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
    top: responsiveHeight(2),
  },

  inputContainer: {
    top: responsiveHeight(1),
    gap: responsiveHeight(2),
  },

  input: {
    borderRadius: 5,
    overflow: 'hidden',
    width: responsiveWidth(60),
    height: responsiveHeight(6),
    fontSize: responsiveFontSize(1.8),
    paddingLeft: responsiveWidth(3),
    backgroundColor: 'rgba(255,255,255,0.8)',
  },

  SignInbuttonContainer: {
    top: responsiveHeight(4),
  },

  signinButton: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 5,
    padding: responsiveHeight(1.2),
  },

  signinButtonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  forgotContainer:{
    top: responsiveHeight(8),
  },

  forgot_text: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    textDecorationLine: 'underline',
  },

  animateContainerEye: {
    bottom: responsiveWidth(23.3),
    left: responsiveHeight(11),
  },

  animateEye: {
    flex: 1,
  },

  eyeButton: {
    height: responsiveHeight(4),
    width: responsiveHeight(4),
  },

})

export default styleSignIn;