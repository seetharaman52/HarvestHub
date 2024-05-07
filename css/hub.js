import { StyleSheet } from 'react-native';
import { StatusBar, Platform } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HubStyles = StyleSheet.create({
    // Part 1
    container: {    
        flex: 1,
        backgroundColor: 'green',
        paddingTop: responsiveHeight(.6),
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    firstContainer: {
        //flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        width: responsiveWidth(100),
        height: responsiveHeight(10),
        marginTop: responsiveHeight(4),
    },
    logo: {
        width: responsiveWidth(25),
        height: responsiveHeight(10),
    },
    logoContainer: {
        marginRight: responsiveHeight(3),
        marginLeft: responsiveHeight(3),
        backgroundColor: 'green',
    },
    headerTextContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: responsiveFontSize(3.5),
        fontWeight: 'bold',
        textAlign: 'center',
        // textDecorationLine: 'underline',
    },

    // Part 2
    harvestorContainer: {
        alignItems: 'center',
        //width: responsiveWidth(100),
        //height: responsiveHeight(28),
        marginTop: responsiveHeight(1),

    },
    harvestorImage: {
        width: responsiveWidth(50),
        height: responsiveHeight(30),
    },

    // Part 3
    iconsContainer: {
        alignSelf: "center",
        height: responsiveHeight(45),
        width: responsiveWidth(90),
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: responsiveHeight(3),
        marginBottom: responsiveHeight(3),
        justifyContent: 'space-evenly',
        backgroundColor: 'green',
    },

    iconBox: {
        backgroundColor: 'white',
        width: responsiveWidth(40),
        height: responsiveHeight(15),
        //aspectRatio: 1,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: responsiveHeight(3),
        
    },
    icon: {
        width: responsiveWidth(20),
        height: responsiveHeight(10),
        marginTop: responsiveHeight(2.2),
        resizeMode: 'contain',
    },
    iconText: {
        color: 'black',
        fontSize: responsiveFontSize(1.31),
        textAlign: 'center',
        marginTop: responsiveHeight(1),
        fontWeight: 'bold',
    },

    rectangleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 6,
        alignSelf: "center",
        width: "83%",
        marginStart: responsiveWidth(7),
        marginEnd: responsiveWidth(7),
        marginVertical: -responsiveHeight(12),
        height: responsiveHeight(8),
    },

    iconTextrect: {
        fontSize: responsiveFontSize(2),
    },

    iconRect: {
        width: responsiveWidth(12),
        height: responsiveHeight(12),
        resizeMode: 'contain',
        marginTop: 0,
    },

    launchingSoonText: {
        color: 'black',
        fontWeight: 'bold',
        fontStyle: "italic",
        fontSize: responsiveFontSize(1.31),
        textAlign: 'center',
        marginTop: responsiveHeight(10.5),
        marginLeft: responsiveWidth(45),
    },

    bottomMenuContainer: {
        marginBottom: -responsiveHeight(1),
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: responsiveHeight(0),
        backgroundColor: 'green',
        width: '100%',
        borderTopWidth: 2,
        borderTopColor: 'white',
    },
    
    menuIcon: {
        width: responsiveWidth(8),
        height: responsiveHeight(4.5),
        aspectRatio: 1,
        tintColor: 'white',
    },

    menuIconHub:{
        width: responsiveWidth(16),
        height: responsiveHeight(8.5),
        resizeMode: 'contain',
        tintColor: 'white',
    },

    sidelogo: {
        width: responsiveWidth(40),
        height: responsiveHeight(20),
        marginTop: responsiveHeight(22),
    },

    sideMenuContainer: {
        position: 'absolute',
        top: "0%",
        bottom: "50%",
        right: 0,
        height: responsiveHeight(100),
        width: 220,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: responsiveWidth(12),
        backgroundColor: 'rgba(224, 232, 217, 0.98)',
        padding: 30,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    sideMenuItem: {
        color: 'black',
        fontSize: responsiveFontSize(2),
        marginBottom: responsiveHeight(2),
        marginLeft: responsiveWidth(1.5),
    },

    sidemenuLogOut: {
        marginTop: responsiveHeight(2),
        backgroundColor: 'grey',
        alignSelf: 'center',
        padding: 5,
        borderRadius: 5,
        color: 'white',
    },

    // Beta
    animateContainer:{
        alignSelf: 'center',
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(2),
        bottom: responsiveHeight(5),
        height: responsiveHeight(6),
        width: responsiveHeight(6),
    },
  
    animate:{
        flex: 1,
    },

    ScrollViewCustom:{
        // backgroundColor: 'black',
    },
});

export default HubStyles;