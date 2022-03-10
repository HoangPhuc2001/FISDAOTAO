import { StyleSheet, Dimensions } from "react-native";
import Sizes from "./Sizes";

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    viewProfile:{
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textProfile:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlProfile:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: Sizes.s20,
        height:50
    }
  
});