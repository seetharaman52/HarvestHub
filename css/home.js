import { StyleSheet } from "react-native";
import { 
    responsiveHeight, 
    responsiveWidth, 
    responsiveFontSize,
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },

    bg:{
      flex: 1,
      resizeMode: 'cover',
      position: 'absolute',
      opacity: 0.7,
      zIndex: -1,
    },

    logoContainer: {
      borderRadius: 8,
      bottom: responsiveHeight(7),
    },

    logo: {
      height: responsiveHeight(17),
      width: responsiveWidth(50),
      resizeMode: 'cover',
    },

    textContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      width: responsiveWidth(90),
      bottom: responsiveHeight(8),
    },

    centerTxt: {
      marginTop: responsiveHeight(2),
      textAlign: 'center',
      color: 'black',
      textAlign: 'center',
      fontFamily: 'System',
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: responsiveFontSize(1.8),
      marginVertical: responsiveHeight(1),
      marginHorizontal: responsiveWidth(5),
      backgroundColor: 'white',
      opacity: 0.7,
      borderRadius: 8,
      padding: responsiveHeight(1),
    },

    signInUpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: responsiveHeight(5),
    },

    signInUp: {
      color: 'black',
      fontWeight: '600',
      fontSize: responsiveFontSize(2),
      backgroundColor: 'rgba(255,255,255,0.5)',
      borderRadius: 8,
      padding: responsiveHeight(1),
      marginLeft: responsiveHeight(1),
    },

    signButtons:{
      borderRadius: 4,
      backgroundColor: 'rgba(255,255,255,0.5)',
      padding: responsiveHeight(1),
      marginHorizontal: responsiveWidth(1.2),
    },

    signInUpText:{
      color: 'black',
      fontWeight: 'bold',
      fontSize: responsiveFontSize(2),
    },

    animateContainer:{
      bottom: responsiveHeight(5),
      height: responsiveHeight(14),
      width: responsiveHeight(30),
    },

    animate:{
      flex: 1,
    }
  });

  export default styles;