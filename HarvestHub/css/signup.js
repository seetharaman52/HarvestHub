import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const styleSignUp = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 60,
        paddingTop: 170,
      },

      bg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      },
      
      headingContainer: {
        borderBottomWidth: 1,
        borderColor: 'white',
        marginBottom: 70,
        width: 100,
      },

      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 1,
        marginTop: 25,
        color: 'white',
      },

      newacc: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'white',
      },

      input: {
        backgroundColor: 'white',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 7,
        paddingHorizontal: 10,
      },

      signupButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 10,
        width: 100,
        marginTop: 20,
        alignSelf: 'center',
      },

      signupButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
      },

      indicateBottom: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 140,
        color: 'white',
        marginTop: 90,
      },

      signInButton: {
        alignContent: 'center',
        fontSize: 16,
        color: 'white',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
      },
})

export default styleSignUp;