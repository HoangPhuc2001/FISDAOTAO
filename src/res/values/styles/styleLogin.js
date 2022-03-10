import {StyleSheet,Dimensions} from "react-native";
import Sizes from "./Sizes";

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#f4f8fb'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 10,
        color: '#335271'
    },

    text_tt:{
        marginTop: Sizes.s5,
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: Sizes.s15,
        color: '#fea026'
    },
    forgotPass:{
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 40
    },

    navButtonText:{
        fontSize: 14,
        color: '#6646ee'
    },
    input:{
        width: "83%",
        height: 40,
        fontSize: 18,
        textAlign:'center',
        alignItems: 'center',
        textAlignVertical: "center",
        color: '#002168',
    },
    buttonContainer:{
        width: "100%",
        height: 50,
        backgroundColor: '#ff9336', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ffffff'
    },
    buttonTextSignup:{
        fontSize: 20,
        color: '#7FE09D'
    },
    dev: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 40,
    },
    icon: {
        paddingLeft: 15,
        marginTop: Sizes.s20,
        width: 300,
        height: '10%',
        backgroundColor: '#e6eaed',
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#c2c2c2',
    },
    circle:{
        width: 300,
        alignItems: "center",
        marginBottom: Sizes.s20,
        marginTop: Sizes.s20,
        flexDirection: 'row'
    },
    btnForm:{
        width: 300,
        alignItems: "center",
        flexDirection: 'row',
    },

    txtBottom:{
        color: '#808B96',
        marginBottom: Sizes.s20,
    },
    
    logoFis:{
        width:500,
        height:110,
        marginTop:Sizes.s100,
    },
    fisimg:{
        width:350,
        height:'18%',
        marginBottom: Sizes.s80,
    },
    stripe:{
        width:100,
        height:10,
    },

});