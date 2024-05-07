import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const ddStyles = StyleSheet.create({
    container: {
        marginTop: responsiveHeight(1),
        position: "relative",
    },

    textContainer: {
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 50,
    },
    label: {
        marginLeft: responsiveWidth(2),
        color: "black",
        fontSize: responsiveFontSize(2),
    },
    dropdown_img: {
       height: responsiveHeight(5),
       width: responsiveWidth(10),
    },
    dropdownContainer:{
        width: "100%",
        height: responsiveHeight(20),
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: responsiveHeight(6),
        elevation: 20,
        alignSelf: 'center',
        position: "absolute",
        zIndex: 1,
    },
    searchBar:{
        backgroundColor: "rgba(0, 0, 0, .1)",
        alignSelf: "center",
        width: "90%",
        borderRadius: 6,
        marginTop: responsiveHeight(1),
        padding: responsiveHeight(1),
    },
    dropdownText:{
        fontSize: responsiveFontSize(2),
        padding: responsiveWidth(4),
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    }
});

export default ddStyles;
