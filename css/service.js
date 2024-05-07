import { StyleSheet } from 'react-native';
import { Platform, StatusBar } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const sidemenuService = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: 'green',
    },
    imageContainer: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        alignItems: 'center',
    },
    imageLogo:{
        width: 220,
        height: 220,
    },
    headingFont:{
        paddingTop: 20,
        color: 'white',
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        fontWeight: 'bold',
    },
    centerTxt: {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        fontSize: responsiveFontSize(2),
        borderRadius: 19,
        paddingVertical: 50,
        paddingHorizontal: 30,
        marginVertical: 20,
        textAlign: 'justify',
    }    
});

export default sidemenuService;