import { StyleSheet, Platform, StatusBar } from 'react-native';
const newsStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        padding: 20,
        backgroundColor: 'green',
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center', 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    cardText: {
        fontSize: 16,
        marginBottom: 5,
    },
    link: {
        textDecorationLine: "underline",
        textAlign: 'left',
    },
    thumbnail: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 5,
    },
    content : {
        flex: 1,
    },
    dateText : {
        fontSize: 12,
    },
});
  
export default newsStyles;