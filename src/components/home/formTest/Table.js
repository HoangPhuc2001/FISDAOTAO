import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Modal,
    Pressable,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
// import TextInput from '../../Custom/TextInput/TextInput';
// import Combobox from '../../Ticket/combobox';
// import Camera from '../../Ticket/cameraImage';
// import ModalPK from '../../Ticket/modalpicker';
// import RadioPicker from '../../Ticket/radiobutton';
// import CheckTicker from '../../Ticket/checkboxtiker';
// import InputFileTicker from '../../Ticket/inputFileTicker';
// import Datetimepicker from '../../Ticket/datetimepicker';
// import TextArea from '../../Ticket/textArea';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Sizes from '../../../styles/Sizes';
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
const data1 = [{ id: 1, prefix: '', internal: '', other: '' }];
export default function Table({ item, dataMaster, setDataMaster }) {
    const item2 = item.value;
    const [data, setData] = useState(item2);
    const [index2, setIndex2] = useState(item2[0].id);
    const [prefix, setPrefix] = useState('');
    const [internal, setInternal] = useState('');
    const [other, setOther] = useState('');
    const [backgroundChange, setBackgroundChange] = useState(false);
    const [dataIndex, setDataIndex] = useState([]);

    const onFocus = () => {
        setBackgroundChange(true);
    };
    const onBlur = () => {
        setBackgroundChange(false);
    };

    useEffect(() => {
        const dataindex = [];
        for (var i = 0; i < item2.length; i++) {
            if (dataindex.find(({ id }) => id === item2[i].id) === undefined) {
                let item = { id: item2[i].id };
                dataindex.push(item);
            }
        }
        setDataIndex(dataindex);
        console.log('====================================bb');
    }, []);
    useEffect(() => {
        console.log('====================================aa');
        // if(Array.isArray(dataMaster) && dataMaster.length){
        //   const index=dataMaster.Data.ticket_template.multitable.findIndex(x => x.id===item.id);
        //   dataMaster.Data.ticket_template.multitable[index].value=data
        //       let items= [];
        //       items.push(dataMaster);
        //       setDataMaster(items)

        // }

        console.log(
            parseInt(
                dataIndex
                    .map(function (o) {
                        return o.id;
                    })
                    .indexOf(index2),
            ),
            'aa',
            index2,
        );
        console.log(dataIndex);

        console.log('====================================aa');
    }, [data]);
    useEffect(() => {
        console.log(index2 + 'aa' + item.columns[0].id);
    }, [index2]);
    const addTable = () => {
        let itemIndex = { id: index2 - 1 };
        let itemsIndex = [];
        itemsIndex.push(...dataIndex, itemIndex);
        setDataIndex(itemsIndex);

        setIndex2(index2 - 1);
        var items = [];
        items.push(...data);
        const da = item.columns;
        for (var i = 0; i < da.length; i++) {
            let item = {
                controlType: da[i].controlType,
                text: da[i].text,
                name: da[i].name,
                id: index2 - 1,
                nameText: da[i].nameText,
            };
            items.push(item);
        }

        setData(items);
        console.log(item.id);
        const index = dataMaster.Data.ticket_template.multitable.findIndex(
            x => x.id === item.id,
        );
        console.log(dataMaster.Data.ticket_template.multitable[index].value);
        dataMaster.Data.ticket_template.multitable[0].value = items;
        let itemsM = [];
        itemsM.push(dataMaster);
        setDataMaster(itemsM[0]);
        //   setData([])
        // setData(item2)
    };
    return (
        <View style={styles.containertable}>
            <View style={{ flexDirection: 'row' }}>
                {item.value[0].id !== index2 && (
                    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                        <TouchableOpacity
                            onPress={() => {
                                console.log(index2 + 'index');
                                const is = parseInt(index2) + parseInt(1);
                                console.log(is);

                                setIndex2(is);

                                //   setData(item2);
                                var items = [];
                                items.push(...data);
                                setData(items);
                                // data[index2 - 1] = {
                                //   id: data[index2-1].id,
                                //   prefix: prefix,
                                //   internal: internal,
                                //   other: other,
                                // };
                                // setIndex2(index2 + 1);
                                // setPrefix(data[index2 - 2].prefix);
                                // setInternal(data[index2 - 2].internal);
                                // setOther(data[index2 - 2].other);
                            }}>
                            <Icon
                                name={'chevron-back-outline'}
                                size={Sizes.s60}
                                color={'#ff9335'}
                            />
                        </TouchableOpacity>
                    </View>
                )}
                <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
                    <Text
                        style={{ fontWeight: 'bold', color: '#ff9335', fontSize: Sizes.s60 }}>
                        Page{' '}
                        {parseInt(
                            dataIndex
                                .map(function (o) {
                                    return o.id;
                                })
                                .indexOf(index2),
                        ) +
                            parseInt(1) +
                            ''}
                        /{dataIndex.length}
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    {item.value[item2.length - 1].id === index2 ? (
                        <TouchableOpacity
                            onPress={() => {
                                addTable();
                            }}>
                            <Icon name={'add'} size={Sizes.s60} color={'#ff9335'} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={() => {
                                const is = parseInt(index2) - parseInt(1);
                                console.log(is);

                                setIndex2(is);

                                //   setData(item2);
                                var items = [];
                                items.push(...data);
                                setData(items);
                            }}>
                            <Icon2
                                name={'navigate-next'}
                                size={Sizes.s60}
                                color={'#ff9335'}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <Text style={styles.text}>{item.nameText}</Text>
            {
                (console.log('===================================='),
                    console.log(dataIndex),
                    console.log(index2),
                    console.log(data),
                    console.log('===================================='),
                    data.map((item, index) =>
                        item.id === index2 ? (
                            item.controlType === 'text' ? (
                                <TextInput
                                    dataCurrent={item2}
                                    textTitle={item.nameText}
                                    placeholder={item.nameText}
                                    item={item}
                                    data={dataMaster}
                                    setDataMaster={setDataMaster}
                                    index={index}
                                />
                            ) : item.controlType === 'number' ? (
                                <TextInput
                                    dataCurrent={item2}
                                    data={dataMaster}
                                    textTitle={item.nameText}
                                    placeholder={dataMaster.DefaultSubject}
                                    item={item}
                                    index={index}
                                    setDataMaster={setDataMaster}
                                />
                            ) : item.controlType === 'select' ? (
                                <Combobox
                                    textTitle={item.nameText}
                                    value={item.text}
                                    setTitle={setTitle}
                                    data={item.conditions}
                                    item={item}
                                    dataMaster={dataMaster}
                                    setDataMaster={setDataMaster}
                                />
                            ) : item.controlType === 'date' ? (
                                <Datetimepicker
                                    textTitle={item.nameText}
                                    placeholder={dataMaster.DefaultSubject}
                                    mode={item.controlType}
                                    data={item}
                                    dataMaster={dataMaster}
                                    setDataMaster={setDataMaster}
                                />
                            ) : item.controlType === 'time' ? (
                                <Datetimepicker
                                    textTitle={item.nameText}
                                    placeholder={dataMaster.DefaultSubject}
                                    mode={item.controlType}
                                    data={item}
                                    dataMaster={dataMaster}
                                    setDataMaster={setDataMaster}
                                />
                            ) : item.controlType === 'upload' ? (
                                <Camera
                                    textTitle={item.nameText}
                                    data={dataMaster}
                                    item={item}
                                    setDataMaster={setDataMaster}
                                />
                            ) : item.controlType === 'checkbox' ? (
                                <CheckTicker
                                    data={dataMaster}
                                    item={item}
                                    setDataMaster={setDataMaster}
                                />
                            ) : item.controlType === 'textarea' ? (
                                <TextArea
                                    data={dataMaster}
                                    item={item}
                                    setDataMaster={setDataMaster}
                                    textTitle={item.nameText}
                                />
                            ) : item.controlType === 'combobox' ? (
                                <ModalPK
                                    data={dataMaster}
                                    item={item}
                                    setDataMaster={setDataMaster}
                                    textTitle={item.nameText}
                                />
                            ) : null
                        ) : null,
                    ))
            }

            {item.value[0].id !== index2 && (
                <TouchableOpacity onPress={() => {
                    // const current=data[index-1].id;
                    let dataNew = [];
                    const item = dataIndex.filter(item => item.id !== index2)
                    const items = item2.filter(item => item.id !== index2)
                    console.log(item)
                    // console.log(index-1)
                    setIndex2(index2 + 1);
                    const dataindexa = [];
                    for (var i = 0; i < item.length; i++) {
                        let itemNew = { id: item[0].id - i };
                        dataindexa.push(itemNew);
                        // let itemDataNew = {
                        //   controlType: da[i].controlType,
                        //   text: da[i].text,
                        //   name: da[i].name,
                        //   id: item[0].id-i,
                        //   nameText: da[i].nameText,
                        // };
                        // dataNew.push(itemDataNew);
                    }
                    console.log(dataindexa)
                    console.log('aaa')
                    setDataIndex(dataindexa);
                    console.log(items)
                    // setData(items);
                    // setDataIndex(item);
                }
                } style={styles.button}>
                    <Text style={[styles.text, { fontWeight: 'bold', color: 'white' }]}>
                        Remove
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
}