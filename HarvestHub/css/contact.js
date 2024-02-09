import { StyleSheet, Dimensions } from 'react-native';
const sidemenuContact = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
    },
    info: {
        flex: 1,
    },
    name: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
    },
    centerTxt: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        fontSize: 18,
        borderRadius: 25,
        paddingVertical: 60,
        paddingHorizontal: 70,
        marginVertical: 60,
        marginTop: 90,
        marginBottom: 60,
    },
});

export default sidemenuContact;