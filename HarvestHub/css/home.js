import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor:'darkgrey',
      justifyContent: 'center',
      alignItems: 'center',
    },

    bg: {
        width: Dimensions.get('window').width + 10,
        height: Dimensions.get('window').height + Dimensions.get('window').height / 10,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        opacity: 0.7
    },
    
    logo: {
      width: 180,
      height: 180,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    textHome: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 18,
    },

    phraseHome: {
      color: 'black',
      textAlign: 'center',
      alignItems: 'center',
      fontSize: 16,
      paddingTop: 20,
      paddingHorizontal:50,
      fontWeight: 'bold',
    },

    signInUpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
    },

    signInUp: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 15,
    },

    signInUpButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 50,
      marginVertical: 10,
    },

    signInButton: {
      marginRight: 10,
    },

    signUpButton: {
      marginRight: 0,
    },

    centerTxt: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 30,
      marginVertical: 10,
    },

});

export default styles;

