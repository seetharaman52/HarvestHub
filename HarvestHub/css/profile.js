import { StyleSheet } from 'react-native';
import { StatusBar, Platform } from 'react-native';
const profileStyles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
    },
    headingContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    headingText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    profileInfo: {
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
    },
    username: {
        fontSize: 18,
        color: "gray",
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
    supportUs: {
        fontSize: 20,
        color: "blue",
        textDecorationLine: "underline",
    },
    imageTele: {
        width: 100,
        height: 100,
    },
});

export default profileStyles;