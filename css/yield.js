import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
const yieldStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 30 : 0,
      paddingRight: responsiveWidth(7),
      paddingLeft: responsiveWidth(7),
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      gap: 8,
    },
    pickerContainer: {
      flex: 1,
      marginRight: 0,
      marginLeft: 0,
    },
    inputContainer: {
      marginBottom: 10,
    },
    label: {
      fontSize: responsiveFontSize(2),
      color: 'black',
      marginBottom: 5,
      fontWeight: "500",
    },
    input: {
      color: 'black',
      borderWidth: 2,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: responsiveWidth(2.6),
      backgroundColor: 'white',
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
    submitButton:{
        marginTop: 20,
        width: "40%",
        alignSelf: "center",
        padding: 6,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    submitText:{
        color: 'black',
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
    }
  });
  
  export default yieldStyles;