import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ToastAndroid, Image, Alert, Modal, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styles from '../../../res/values/styles/styleCombobox';
import RNPickerDialog from 'rn-modal-picker';
import Sizes from "../../../res/values/styles/Sizes";

export default class Combobox extends React.Component {
    titleText
    label
    placeholderText
    data
    value
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            selectedText: '',
        }
    }

    selectedValue(index, item) {
        this.setState({ selectedText: item.text });
        // console.log(item.text);
      }

    render() {
        return(
            <View >
            <Text style={{marginLeft: Sizes.s30,color:'#345173',}}>{this.props.titleText}</Text>
            <RNPickerDialog
              data={this.props.data}
              pickerTitle={'Tòa nhà'}
              // labelText={'testss'}
              showSearchBar={false}
              showPickerTitle={false}
              listTextStyle={styles.listTextStyle}
              itemSeparatorStyle={{ borderColor: 'gray', borderWidth: 1 / 2 }}
              pickerStyle={styles.pickerStyle}
              selectedText={this.state.selectedText}
              // placeHolderText={this.state.placeHolderText}
              searchBarPlaceHolder={'Search.....'}
              searchBarPlaceHolderColor={'#9d9d9d'}
              selectedTextStyle={styles.selectedTextStyle}
              placeHolderTextColor={'gray'}
              dropDownIconStyle={styles.dropDownIconStyle}
              searchBarStyle={styles.searchBarStyle}
              dropDownIcon={require('../../../res/images/sort_down.png')}
              selectedValue={(index, item) => this.selectedValue(index, item)}
            />
          </View>
        )
    }
}
