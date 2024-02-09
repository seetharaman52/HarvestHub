import { StyleSheet } from 'react-native';
import { StatusBar, Platform } from 'react-native';
const profileStyles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: 'green',
    },
    headingContainer: {
        alignSelf: 'flex-start',
        paddingLeft: 30,
    },
    headingText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
    },
});

export default profileStyles;