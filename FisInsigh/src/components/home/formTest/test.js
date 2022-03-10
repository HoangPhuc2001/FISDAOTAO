import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ToastAndroid, Image, Alert, Modal, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styles from '../../../res/values/styles/styleTest';
import { FlatList } from 'react-native-gesture-handler';
import { homeStr } from '../../../res/values/strings/index';
import RNPickerDialog from 'rn-modal-picker';
import { RadioButton } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { headerStr } from '../../../res/values/strings/index';
import DocumentPicker from 'react-native-document-picker';
import moment from 'moment';
import InteractiveTextInput from "react-native-text-input-interactive";
import data from './data.json'
import Sizes from "../../../res/values/styles/Sizes";
import Combobox from './Combobox';
import Datetimepicker from './Datetimepicker';
import InputFile from './InputFile';

export default class TestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      position: '',
      dataForm: [],
      dataTables: [],
      dataMaster: [],
      imageFile: null,
      item: '',
      dataSelect: [],
      frequency: '',
      dataFrequency: [],
      selectedText: '',
      defaultValue: true,
      select: '',
      valueInput: '',
    }
  }


  componentDidMount() {
    let item = [];
    const data1 = data.Data.ticket_template.individual;
    for (var i = 0; i < data1.length; i++) {
      if (data1[i].controlType === 'select' && data1[i].id === -9960) {
        //console.log(data1[i].conditions.data);
        this.setState({
          dataSelect: data1[i].conditions.data
        });
      }
      if (data1[i].controlType === 'select' && data1[i].id === -10000) {
        this.setState({
          frequency: data1[i].name
        });
        this.setState({
          dataFrequency: data1[i].conditions.data
        });
      }
      if (data1[i].type === 'time' &&
        data1[i].additionalDisplayClass ||
        data1[i].type === 'date' &&
        data1[i].additionalDisplayClass) {
        if (item.length < 4) {
          item.push(data1[i]);
        }
      }
      if (data1[i].type === 'select' ||
        data1[i].type === 'checkbox' ||
        data1[i].type === 'text' ||
        data1[i].type === 'date' ||
        data1[i].type === 'time' ||
        data1[i].type === 'upload' &&
        data1[i].additionalDisplayClass) {
        item.push(data1[i]);
      }
    }
    this.setState({
      dataForm: item
    })
    this.setState({
      dataTables: data.Data.ticket_template.multitable
    })
    this.setState({
      dataMaster: data.Data.ticket_template.multitable[0].columns.value
    })
  }

  selectedValue(index, item) {
    this.setState({ selectedText: item.text });
    // console.log(item.text);
  }

  onSubmit = () => {
    console.log(this.state.dataMaster);
  }

  render() {
    // const dataJson = data.Data.ticket_template.individual
    const { dataForm, dataTables, valueInput } = this.state
    return (
      <SafeAreaView>
 
        <ScrollView>
          <View style={styles.container}>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.textTitle}>{data.Data.processName}</Text>
              <Text>{data.Data.description}</Text>
            </View>

            {dataForm.map((item, index) =>
              item.type === 'text' && item.id === item.position ? (
                <View style={styles.inputView}>
                  <Text style={styles.title}>{item.nameText}</Text>
                  <InteractiveTextInput
                    placeholder={item.nameText}
                    key={item.id}
                    textInputStyle={styles.inputStyle}
                  />
                </View>
              ) : (
                item.type === 'select' && item.id === item.position ? (
                  <Combobox
                    titleText={item.nameText}
                    data={item.conditions.data}
                  />
                ) :
                  item.type === 'date' && item.id === item.position ? (
                    <Datetimepicker
                      titleText={item.nameText}
                      placeholder={item.nameText}
                      mode={item.type}
                      format={item.conditions.format.regex}
                      value={moment().format('DD/MM/YYYY')}
                    // data={item}
                    />
                  ) :
                    item.type === 'time' && item.id === item.position ?
                      (
                        <Datetimepicker
                          titleText={item.nameText}
                          placeholder={data.DefaultSubject}
                          mode={item.type}
                          format={item.conditions.format.regex}
                        />
                      ) :
                      item.type === 'upload' ?
                        (
                          <InputFile
                            titleText={item.nameText}

                          />
                        ) : null))
            }
            {dataTables.map((item, index) =>
              item.id == '-9908' ? (
                <View key={item.id} style={styles.viewTables}>
                  <Text style={{ fontSize: 30, color: '#345173', fontWeight: 'bold' }}>Page</Text>
                  {item.columns.map((itemI, index) =>
                    itemI.type === 'text' ? (
                      <View style={styles.inputView}>
                        <Text style={styles.title}>{itemI.nameText}</Text>
                        <InteractiveTextInput
                          placeholder={itemI.nameText}
                          key={itemI.id}
                          textInputStyle={styles.inputStyle}
                        />
                      </View>
                    ) : itemI.type === 'number' ? (
                      <View style={styles.inputView}>
                        <Text style={styles.title}>{itemI.nameText}</Text>
                        <InteractiveTextInput
                          placeholder={itemI.nameText}
                          keyboardType="numeric"
                          key={itemI.id}
                          textInputStyle={styles.inputStyle}
                        />
                      </View>
                    ) : null
                  )}
                </View>
              ) : (
                item.id == '-9750' ? (
                  <View key={item.id} style={styles.viewTables2}>
                    <Text style={{ fontSize: 30, color: '#345173', fontWeight: 'bold' }}>Page2</Text>
                    {item.columns.map((itemI, index) =>
                      itemI.type === 'text' ? (
                        <View style={styles.inputView}>
                          <Text style={styles.title}>{itemI.nameText}</Text>
                          <InteractiveTextInput
                            placeholder={itemI.nameText}
                            key={itemI.id}
                            textInputStyle={styles.inputStyle}
                          />
                        </View>
                      ) :
                        itemI.type === 'master_data_getparticipantorgdept' ? (
                          <Combobox
                            titleText={itemI.nameText}
                            data={itemI.refs}
                          />
                        ) : null
                    )}
                  </View>

                ) : null))}


          </View>
          <View style={{ height: 50 }}></View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            this.onSubmit()
          }}
          style={styles.button}>
          <Text style={{ fontSize: 20, color: 'white' }}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

