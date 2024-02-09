import { StyleSheet } from 'react-native';
import { Platform, StatusBar } from 'react-native';
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
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    centerTxt: {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        fontSize: 18,
        borderRadius: 19,
        paddingVertical: 50,
        paddingHorizontal: 30,
        marginVertical: 20,
        textAlign: 'justify',
    }    
});

export default sidemenuService;