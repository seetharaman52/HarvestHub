import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    logo: {
      width: 180,
      height: 180,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    textHome: {
      fontSize: 20,
    },

    phraseHome: {
      textAlign: 'center',
      alignItems: 'center',
      fontSize: 16,
      paddingTop: 20,
      paddingHorizontal:50
    },

    signInUpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 100,
    },

    signInUp: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
    },

    signInUpButton: {
      backgroundColor: 'black',
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
});

export default styles;

