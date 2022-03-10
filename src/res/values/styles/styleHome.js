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
  txtTittle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#345173',
    marginLeft: Sizes.s100,
    marginRight: Sizes.s100,
  },
  List: {
    height: '100%'
  },
  listContainer: {
    margin: width * 3.6 / 187.5,
    padding: width * 3.6 / 187.5,
    borderRadius: width * 3.6 / 187.5,
    borderColor: '#d4d5da',
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 3,
  },
  listBackground: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF"
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 22,
    width: '90%',
    color: '#345173',
    fontWeight: 'bold',
  },

  iconMenu: {
    alignItems: 'flex-end',
    width: 30
  },

  textView: {
    borderRadius: Sizes.s40,
    width: Sizes.s160,
    height: Sizes.s80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7ebee',
  },
  textSo: {
    color: '#d67e3e',
    fontSize: Sizes.s35,
    fontWeight: 'bold',
  },
  testAdd: {
    fontWeight: 'bold',
    color: '#0a8dc3',
    fontSize: 20
  },
  textWifi: {
    marginLeft: 10,
    fontSize: 20,
    color: '#345173',
    fontWeight: 'bold',
    width: 200,
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 2,
  },
  modalHeader: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  modalBody: {
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnModal: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: Sizes.s10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});