import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Dimensions, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Sizes from "../../../res/values/styles/Sizes";

export default class Datetimepicker extends React.Component {
    titleText
    value
    placeholder
    mode
    format
    constructor(props) {
        super(props)
        this.state = {
            startDate: '',
            modalVisible: false,
            dateStart: this.props.value,
        }
    }
    showDatePickerStart = () => {
        this.setState({
            modalVisible: true
        })
    }

    handleConfirm = (date) => {
        this.setState({
            modalVisible: false,
            dateStart: moment(date).format(this.props.format),

        })
    }

    hideDatePicker = () => {
        this.setState({
            modalVisible: false,
        })
    }

    render() {
        return (
            <View style={{width: '95%'}}>
              <Text style={{color:'#345173',}}>{this.props.titleText}</Text>
              <TouchableOpacity style={styles.inputDate} onPress={this.showDatePickerStart}>
                <Text style={{ color: '#345173' }}>{this.state.dateStart}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={this.state.modalVisible}
                mode={this.props.mode}
                onConfirm={this.handleConfirm}
                onCancel={this.hideDatePicker}
              />
            </View>
        )
    }
}



const{ width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

    inputDate: {
        borderWidth: 1,
        borderColor: '#c2c2c2',
        borderRadius: 10,
        marginVertical: Sizes.s20,
        height: 40,
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
});
