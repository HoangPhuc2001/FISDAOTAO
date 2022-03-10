import {StyleSheet,Dimensions} from "react-native";
import Sizes from "./Sizes";

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        marginTop: Platform.OS === 'ios' ? 34 : 0
      },
      text: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#345173'
      },
      rowbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: Sizes.s200,
        backgroundColor: '#ff9434',
        height: Sizes.s100,
        marginTop: Sizes.s40,
        marginLeft: Sizes.s570
      },
      textluu: {
        color: '#FFFFFF',
        marginLeft: 7,
        fontSize: 20
      },
    
      viewRowDay: {
        flexDirection: 'column',
      },
      picker: {
        width: Sizes.s750,
        height: Sizes.s100,
        borderWidth: 1
      },
      textinput: {
        height: Sizes.s120,
        width: Sizes.s750,
        marginTop: Sizes.s15,
        paddingLeft: 12,
        borderRadius: 10,
        borderWidth: 1
      },
      textTop: {
        color: '#345173',
        fontWeight: 'bold',
        fontSize: 15
      },
      container2: {
        flex: 1,
        alignItems: 'center',
      },
      inputdate: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Sizes.s360,
        height: Sizes.s100,
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: Sizes.s15
      },
      containerdate: {
        flexDirection: 'row',
    
      },
      containertime: {
        flexDirection: 'row',
    
      },
      containeicon: {
        position: 'absolute',
        left: 20
      },
      containerTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        alignItems: 'center',
        borderColor: '#d4d5da',
        height: Sizes.s140,
      }
   
});