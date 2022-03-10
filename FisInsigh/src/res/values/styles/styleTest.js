import { StyleSheet, Dimensions } from "react-native";
import Sizes from "./Sizes";

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: Sizes.s20
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'orange',
    },
    title: {
        color:'#345173',
        marginBottom: Sizes.s20
    },
    inputView: {
        width: '95%',
        marginBottom: Sizes.s20
    },
    inputStyle: {
        height: 40,
        fontSize: 14,
        padding: 10,
        alignItems: 'center',
        textAlignVertical: "center",
        color: '#002168',
        borderColor: "#c2c2c2",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 3,
    },
    viewTables: {
        borderWidth: 1,
        borderColor: '#c2c2c2',
        borderRadius: 10,
        padding: 8,
        marginVertical: Sizes.s20,
        backgroundColor: 'white',
        justifyContent: 'center', alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 3,
    },
    viewTables2: {
        borderWidth: 1,
        borderColor: '#c2c2c2',
        borderRadius: 10,
        marginVertical: Sizes.s20,
        marginHorizontal: Sizes.s10,
        backgroundColor: 'white',
        justifyContent: 'center', alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 3,
    },
    button: {
        backgroundColor: '#ff9336',
        marginHorizontal: Sizes.s20,
        height:50,
        width:'95%', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        bottom: 5,

    }
});