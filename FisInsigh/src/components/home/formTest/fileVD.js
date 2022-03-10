import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import Headers from '../Custom/Header';
import TextInput from '../Custom/TextInput/TextInput';
import Combobox from './combobox';
import Camera from './cameraImage';
import ModalPK from './modalpicker';
import styles from './style';
import RadioPicker from './radiobutton';
import CheckTicker from './checkboxtiker';
import TableTicker from './tableticker';
import InputFileTicker from './inputFileTicker';
import Sizes from '../../styles/Sizes';
import data from '../../../data.json';
import Datetimepicker from './datetimepicker';
export default function Ticket() {
  const [title, setTitle] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [position, setPosition] = useState('');
  const [bookcar, setBookcar] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [gender, setGender] = useState('');
  const [heart, setHeart] = useState('');
  const [note, setNote] = useState([]);
  const [file, setFile] = useState(null);
  const [datacheckbox, setDatacheckbox] = useState(data.checkheart);
  const [checkheart, setCheckheart] = useState();
  const [address, setAddress] = useState('');
  const [dataselect, setDataselect] = useState([]);
  const [datafrequency, setDatafrequency] = useState([]);
  const [frequency, setFrequency] = useState('');
  const [dataAll, setDataAll] = useState([])
  const [datastartDate, setDatastartDate] = useState('')
  const [dataDate, setDataDate] = useState([])
  const onSubmit = () => {
    let a = [];
    for (var i = 0; i < datacheckbox.length; i++) {
      if (datacheckbox[i].checked) a.push(datacheckbox[i].label);
    }
    let data = {
      title: title,
      position: position,
      bookcar: bookcar,
      imageFile: imageFile,
      gender: gender,
      heart: a,
      note: note,
      file: file,
    };
    alert(JSON.stringify(data));
  };
  const error = () => {
    if (title === '') {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
  };
  useEffect(() => {
    let item = [];
    const data1 = data.Data.ticket_template.individual;
    for (var i = 0; i < data1.length; i++) {
      if (data1[i].controlType === 'select' && data1[i].id === -9960) {
        //console.log(data1[i].conditions.data);
        setDataselect(data1[i].conditions.data);
      }
      if (data1[i].controlType === 'select' && data1[i].id === -10000) {
        setFrequency(data1[i].name);
        setDatafrequency(data1[i].conditions.data);
      }
      if (data1[i].type === 'time' && data1[i].additionalDisplayClass || data1[i].type === 'date' && data1[i].additionalDisplayClass) {
        if (item.length < 4) {
          item.push(data1[i]);
        }
      }
      if (data1[i].type === 'select' || data1[i].type === 'checkbox' || data1[i].type === 'text' || data1[i].type === 'date' || data1[i].type === 'time' || data1[i].type === 'upload' && data1[i].additionalDisplayClass) {
        item.push(data1[i]);
      }
    }
    // setDataDate(item)
    setDataAll(item)
  }, []);



  return (
    <View style={styles.container}>
      <Headers title="Ticket" />

      <ScrollView>
        {dataAll.map((item, index) =>
          item.type === 'text' && item.id === item.position ? (
            <TextInput
              textTitle={item.nameText}
              placeholder={data.DefaultSubject}
              setTitle={setTitle}
            />
          ) : (
            item.type === 'select' && item.id === item.position ? (
              <Combobox
                textTitle={item.nameText}
                value={item.text}
                setTitle={setTitle}
                data={item.conditions}
              />
            ) :
              item.type === 'date' && item.id === item.position ?
                (
                  <Datetimepicker
                    textTitle={item.nameText}
                    placeholder={data.DefaultSubject}
                    setTitle={setTitle}
                    mode={item.type}
                    data={item}
                  />) :
                item.type === 'time' && item.id === item.position ?
                  (
                    <Datetimepicker
                      textTitle={item.nameText}
                      placeholder={data.DefaultSubject}
                      setTitle={setTitle}
                      mode={item.type}
                      data={item}
                    />
                  ) :
                  item.type === 'upload' ?
                    (
                      <InputFileTicker
                        textTitle={item.nameText}

                      />
                    ) : item.type === 'checkbox' ?
                      (
                        <CheckTicker
                          data={item}

                        />


                      )
                      : null))
        }
        {/* <Text
          style={[
            styles.textTitle,
            {color: 'orange', fontWeight: 'bold', textAlign: 'center'},
          ]}>
          {data.Data.processName}
        </Text>
        <Text style={[{textAlign: 'center'}]}>{data.Data.description}</Text>
        <TextInput
          textTitle="Tieu de yeu cau"
          placeholder={data.DefaultSubject}
          setTitle={setTitle}
        />
        {errorName && <Text style={styles.erros}>Required</Text>}
        <Combobox
          textTitle="Vi tri cua ban"
          setValue={setPosition}
          value={position}
          data={dataselect}
        />
        <Combobox
          textTitle="Địa điểm"
          setValue={setAddress}
          value={address}
          data={dataselect}
        />
        <Combobox
          textTitle="Tần xuất họp"
          setValue={setFrequency}
          value={frequency}
          data={datafrequency}
        />
        {dataDate.map((item, index)=>
         
          <Datetimepicker 
          textTitle={item.nameText}
            //setValue={setStartDate}
           // value={startDate}
           data={item}
            mode={item.type}/>
         
          )} */}




        {/* <Datetimepicker
textTitle={datastartDate.nameText}
          setValue={setStartDate}
          value={startDate}
          mode={'date'}/>
        <Datetimepicker 
        textTitle="Gio bắt đầu"
          setValue={setStartDate}
          value={startDate}
          
          mode={'time'}/> */}
        {/*
        <ModalPK
          textTitle="Dat xe"
          setBookcar={setBookcar}
          datacar={data.bookcar}
        />
        <Camera setImageFile={setImageFile} textTitle="Attach File" />
        <RadioPicker setGender={setGender} textTitle="Gioi tinh" />
        <CheckTicker
          data={datacheckbox}
          onChange={setDatacheckbox}
          setHeart={setHeart}
          textTitle="Gioi tinh"
          setCheckheart={setCheckheart}
        />
        <TableTicker setNote={setNote} textTitle="Ghi chu" />
        <InputFileTicker textTitle="Chon file" setFile={setFile} /> */}
        <TouchableOpacity
          onPress={() => {
            onSubmit();
          }}
          style={styles.button}>
          <Text style={{ fontSize: 20 }}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}