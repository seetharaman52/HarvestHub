import { StyleSheet, Platform, StatusBar } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const newsStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        padding: responsiveHeight(2),
        backgroundColor: 'green',
    },
    title: {
        marginTop: responsiveHeight(1.5),
        color: 'white',
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: responsiveHeight(2),
        textDecorationLine: 'underline',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center', 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: responsiveWidth(4),
        marginBottom: responsiveHeight(1),
        borderRadius: 5,
    },
    cardText: {
        fontSize: responsiveFontSize(1.8),
        marginBottom: responsiveHeight(1),
        fontStyle: 'italic',
        fontWeight: '500',
    },
    link: {
        textDecorationLine: "underline",
        textAlign: 'left',
    },
    thumbnail: {
        width: responsiveWidth(20),
        height: responsiveHeight(10),
        marginRight: responsiveWidth(3),
        borderRadius: 5,
    },
    content : {
        flex: 1,
    },
    dateText : {
        fontSize: responsiveFontSize(1.5),
    },
});
  
export default newsStyles;