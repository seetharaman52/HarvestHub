import { StyleSheet } from 'react-native';
import { StatusBar, Platform } from 'react-native';
const HubStyles = StyleSheet.create({
    // Part 1
    container: {
        flex: 1,
        backgroundColor: 'green',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    firstContainer: {
        flex: 0.6, 
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    logo: {
        width: 120,
        height: 120,
    },
    logoContainer: {
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: 'green',
    },
    headerTextContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },

    // Part 2
    harvestorContainer: {
        alignItems: 'center',
    },
    harvestorImage: {
        width: 270,
        height: 270,
    },

    // Part 3
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        marginTop: 20,
        marginBottom: -50,
    },

    iconBox: {
        backgroundColor: 'white',
        width: '40%',
        aspectRatio: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        width: 80,
        height: 80,
        marginTop: 20,
    },
    iconText: {
        color: 'black',
        fontSize: 12.5,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    },

    rectangleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginEnd: 30,
        marginStart: 30,
        marginVertical: -30,
    },
    iconTextrect: {
        fontSize: 20,
    },
    iconRect: {
        width: 80,
        height: 80,
        marginTop: 0,
    },
    launchingSoonText: {
        color: 'black',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 1,
        marginLeft: 205,
    },

    bottomMenuContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'green',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: 'white',
    },
    
    menuIcon: {
        width: 30,
        height: 30,
        tintColor: 'white',
    },
    
    menuText: {
        color: 'white',
        fontSize: 14,
        marginLeft: 5,
    },

    sidelogo: {
        width: 150,
        height: 150,
        marginTop: 220,
    },
    sideMenuContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        width: 220,
        backgroundColor: 'rgba(224, 232, 217, 0.97)',
        padding: 30,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    sideMenuItem: {
        color: 'black',
        fontSize: 19,
        marginBottom: 20,
    },
});

export default HubStyles;