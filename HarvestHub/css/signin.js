import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const styleSignIn = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 60,
        paddingTop: 170,
      },

      bg: {
        width: Dimensions.get('window').width + 10,
        height: Dimensions.get('window').height + Dimensions.get('window').height / 10,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      },
      
      logoContainer: {
        alignSelf: 'flex-end',
      },

      logo: {
        width: 170,
        height: 170,
        resizeMode: 'contain',
      },
      
      headingContainer: {
        borderBottomWidth: 1,
        borderColor: 'white',
        marginBottom: 20,
        width: 100,
      },

      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: 50,
        color: 'white',
      },

      input: {
        backgroundColor: 'white',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 7,
        paddingHorizontal: 10,
      },

      signinButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 10,
        width: 100,
        marginTop: 20,
        alignSelf: 'center',
      },

      signinButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
      },

      eyeButton: {
        position: 'absolute',
        right: 10,
        top: 21,
      },
      inputContainer: {
        position: 'relative',
      },
})

export default styleSignIn;