import { StyleSheet } from 'react-native';
import { StatusBar, Platform, Dimensions } from 'react-native';

const growStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'olivedrab',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
      boxContainer: {
        flex: 0.15,
        flexDirection: 'row',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
      label: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      input: {
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: 'black',
        backgroundColor: 'white',
      },
      bg : {
        width: Dimensions.get('window').width + 10,
        height: Dimensions.get('window').height + Dimensions.get('window').height / 10,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        opacity: 0.7
      },
      predictButton : {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 10,
        width: 100,
        marginTop: 10,
        alignSelf: 'center',
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
      pickerContainer: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#bdc3c7',
        overflow: 'hidden',
        height: 55,
        marginBottom: 20,
      },
});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        paddingHorizontal: 10,
        marginBottom: 10,
        color: 'black',
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: 'white',
    },
});

export { growStyles, pickerSelectStyles };