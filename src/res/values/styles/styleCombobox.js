import { StyleSheet, Dimensions } from "react-native";
import Sizes from "./Sizes";

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({

    selectedTextStyle: {
        height: 80,
        borderColor: 'gray',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        width: '100%',
        color: '#345173',
        fontSize: 16,
        paddingLeft: 10,
        marginTop: -2,
    },
    listTextStyle: {
        color: '#000',
        fontSize: 18,
        textAlign: 'left',
    },
    searchBarStyle: {
        marginBottom: 10,
        flexDirection: 'row',
        height: 40,
        shadowRadius: 1,
        shadowOpacity: 1.0,
        borderWidth: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        borderColor: '#303030',
        shadowColor: '#303030',
        borderRadius: 5,
        elevation: 1,
        marginHorizontal: 10,
    },
    placeHolderTextStyle: {
        color: 'red',
        padding: 10,
        textAlign: 'left',
        width: '99%',
        flexDirection: 'row',
    },
    dropDownIconStyle: {
        width: 10,
        height: 10,
        left: -20,
        // marginTop: 20,
    },
    pickerStyle: {
        backgroundColor: "white",
        shadowRadius: 10,
        shadowOpacity: 0.25,
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        height: 40,
        borderColor: '#c2c2c2',
        shadowColor: '#000',
        borderRadius: 10,
        elevation: 3,
    },
});