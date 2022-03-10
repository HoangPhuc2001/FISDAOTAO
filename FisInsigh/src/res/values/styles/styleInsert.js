import { StyleSheet, Dimensions } from "react-native";
import Sizes from "./Sizes";

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({

    navTop: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        borderBottomColor: '#d4d5da',
        borderBottomWidth: 1,
    },
    navTopEdit: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        borderBottomColor: '#d4d5da',
        borderBottomWidth: 1,
    },
    container: {
        height: '100%', margin: Sizes.s25
    },
    txtTopname: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#345173',
        marginLeft: Sizes.s120,
        marginRight: Sizes.s120,
    },
    txtTitle: {
        fontSize: 20, color: '#345173', fontWeight: 'bold',
    },
    input: {
        width: "100%",
        height: 50,
        fontSize: 16,
        marginTop: Sizes.s10, marginBottom: Sizes.s10,
        alignItems: 'center',
        textAlignVertical: "center",
        color: '#002168',
        borderWidth: 1, 
        borderRadius: 5,
    },
    dateRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginBottom: Sizes.s10
    },
    inputDate: {
        borderWidth: 1,
        borderColor: '#c2c2c2',
        borderRadius: 5,
        marginTop: Sizes.s10,
        width: 180,
        height: 40,
        justifyContent: 'center', alignItems: 'center'
    },
    btnSave: {
        backgroundColor: '#ff9434',
        width: 120,
        height: 40,
        borderRadius: 5,
        alignItems: 'center', justifyContent: 'center',
        flexDirection: 'row',
        left: 245,
    },
    picker: {
        borderColor: '#c2c2c2',
        borderWidth: 1,
        borderRadius: 15,
        height: 50
    },

    viewDrop: {
        borderColor: '#d4d5da',
        borderWidth: 1,
        borderRadius: Sizes.s10,

    }

});