import { StyleSheet } from 'react-native';
import { StatusBar, Platform, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const growStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: 'olivedrab',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },

      label: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
      },
    
      bg : {
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

      input:{
        marginTop: 8,
        backgroundColor: "white",
        padding: 6,
        borderRadius: 6,
      },

      predictButton:{
        padding: 10,
        borderRadius: 6,
        marginTop: responsiveHeight(5),
        alignSelf: "center",
        backgroundColor: "white",
      }
});

export { growStyles };