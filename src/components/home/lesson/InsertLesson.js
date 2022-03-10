
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ToastAndroid, Image, Alert, FlatList, Button, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styles from '../../../res/values/styles/styleInsert';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { headerStr } from '../../../res/values/strings/index';


export default class InsertLesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStartVisible: false,
      modalEndVisible: false,
      modalDayVisible: false,
      idCourses: '5e845062e079643772177f1c',
      chooseDay: '',
      timeStart: '',
      timeEnd: '',

      dataBuilding: [],
      dataRoom: [],
      building: null,
      room: null,
      open: false,
      openRoom: false,

      lesson: '',
      lecture: '',
      idRoom: null,
      idBuilding: null,

      errorName: false,

    };
    this.setBuilding = this.setBuilding.bind(this);
    this.setRoom = this.setRoom.bind(this);
  }
  //ITEM

  setOpen = (open) => {
    this.setState({
      open
    });
  }

  setOpenRoom = (openRoom) => {
    this.setState({
      openRoom
    });
  }

  setBuilding(callback) {
    this.setState(state => ({
      building: callback(state.building)
    }));
  }

  setRoom(callback) {
    this.setState(state => ({
      room: callback(state.room)
    }));
  }

  //ITEM
  showDatePickerStart = () => {
    this.setState({
      modalStartVisible: true
    })
  }
  showDatePickerEnd = () => {
    this.setState({
      modalEndVisible: true
    })
  }
  showDatePickerDay = () => {
    this.setState({
      modalDayVisible: true
    })
  }

  handleConfirmStart = (time) => {
    this.setState({
      modalStartVisible: false,
      timeStart: moment(time).format('HH:mm'),

    })
  }
  handleConfirmEnd = (time) => {
    this.setState({
      modalEndVisible: false,
      timeEnd: moment(time).format('HH:mm'),

    })
  }
  handleConfirmDay = (date) => {
    this.setState({
      modalEndVisible: false,
      chooseDay: moment(date).format('DD/MM/YYYY'),

    })
  }

  hideDatePicker = () => {
    this.setState({
      modalStartVisible: false,
      modalEndVisible: false,
      modalDayVisible: false,
    })
  }


  async componentDidMount() {
    this.props.getBuildingRoom()
  }

  componentDidUpdate = async (prevProps, prevState) => {

    const result = this.props.buildingRoom.data

    if (prevProps.buildingRoom !== this.props.buildingRoom) {
      console.log(result)
      console.log(result[0].room)
      this.setState({
        dataBuilding: result
      })

    }

    if (prevState.building !== this.state.building) {
      const i = this.state.dataBuilding.findIndex(x => x.buildingName === this.state.building);
      // console.log('index', i)
      // console.log(this.state.building)
      // console.log(result[i]._id)
      this.setState({
        dataRoom: result[i].room
      });
      this.setState({
        idBuilding: result[i]._id
      })
    }

    // if (prevState.room !== this.state.room) {
    //   if (this.state.room !== null) {
    //     const ind = this.state.dataRoom.findIndex(x => x.roomName === this.state.room);
    //     console.log('index', ind)
    //     console.log(this.state.room)
    //     console.log(result[ind]._id)
    //     this.setState({
    //       idRoom: result[ind]._id
    //     })
    //   }
    // }


    if (this.props.postLesson !== null && this.props.postLesson !== prevProps.postLesson) {
      Alert.alert('Thông Báo', 'thêm thành công')
      this.props.navigation.navigate('Lesson');
      this.props.getLessonAction()
    }
    if (this.props.error !== null && this.props.error !== prevProps.error) {
      Alert.alert('Thông báo', 'Thêm thất bại')
    }
  
  }




  render() {


    const { open, building, dataBuilding,
      lesson, lecture, timeStart, timeEnd,
      openRoom, room, dataRoom, idBuilding,
      idRoom, chooseDay, idCourses,
    } = this.state;

    return (
      <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
        {/* HEADER */}
        <View style={styles.navTop}>
          <TouchableOpacity
            style={{ width: 40, height: 40, justifyContent: 'center', left: 15 }}
            onPress={() => { this.props.navigation.navigate('Lesson') }}
          >
            <Image source={headerStr.buttonBack}
              resizeMode={'contain'}
              style={{ height: 25, width: 25 }} />
          </TouchableOpacity>
          <Text style={styles.txtTopname}>TẠO MỚI BUỔI HỌC</Text>
        </View>
        {/* CONTAINER */}
        <View style={styles.container}>
          <Text style={styles.txtTitle}>Tên Buổi Học</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập tên khóa học"
            value={this.state.lesson}
            onChangeText={(text) => this.setState({ lesson: text })} />

          <Text style={styles.txtTitle}>Tên giảng viên</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập tên giảng viên"
            value={lecture}
            onChangeText={(text) => this.setState({ lecture: text })} />
          <View>
            {this.state.errorName && (
              <Text style={{ color: 'red', }} >Tên giảng viên không để trống</Text>
            )}
          </View>
          <View>
            <Text style={styles.txtTitle}>Chọn Ngày</Text>
            <TouchableOpacity style={styles.inputDate} onPress={this.showDatePickerDay}>
              <Text style={{ color: '#345173' }}>{chooseDay}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={this.state.modalDayVisible}
              onConfirm={this.handleConfirmDay}
              onCancel={this.hideDatePicker}
            />
          </View>

          <View style={styles.dateRow}>
            <View>
              <Text style={styles.txtTitle}>Giờ Bắt Đầu</Text>
              <TouchableOpacity style={styles.inputDate} onPress={this.showDatePickerStart}>
                <Text style={{ color: '#345173' }}>{timeStart}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={this.state.modalStartVisible}
                mode={'time'}
                onConfirm={this.handleConfirmStart}
                onCancel={this.hideDatePicker}
              />
            </View>
            <View style={{ width: 8 }} />
            <View>
              <Text style={styles.txtTitle}>Giờ Kết Thúc</Text>
              <TouchableOpacity style={styles.inputDate} onPress={this.showDatePickerEnd}>
                <Text style={{ color: '#345173' }}>{timeEnd}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={this.state.modalEndVisible}
                mode={'time'}
                onConfirm={this.handleConfirmEnd}
                onCancel={this.hideDatePicker}
              />
            </View>
          </View>
          {/* https://opensourcelibs.com/lib/react-native-dropdown-picker */}
          <Text style={styles.txtTitle}>Tòa Nhà</Text>
          <DropDownPicker
            style={styles.viewDrop}
            schema={{
              label: 'buildingName',
              value: 'buildingName',
            }}
            textStyle={{
              fontSize: 14,
            }}
            zIndex={3000}
            zIndexInverse={1000}
            open={open}
            value={building}
            items={dataBuilding}
            setOpen={this.setOpen}
            setValue={this.setBuilding}
            stickyHeader={true}
            placeholder={'Chọn tòa nhà'}
            ArrowDownIconComponent={({ style }) => (
              <FontAwesome5 name={'sort-down'} size={20} style={style} />
            )}
          />


          <Text style={styles.txtTitle}>Phòng</Text>
          <DropDownPicker
            style={styles.viewDrop}
            schema={{
              label: 'roomName',
              value: '_id',
            }}
            placeholder={'Chọn Phòng'}
            textStyle={{
              fontSize: 14,
            }}
            zIndex={1000}
            zIndexInverse={3000}
            ArrowDownIconComponent={({ style }) => (
              <FontAwesome5 name={'sort-down'} size={20} style={style} />
            )}
            arrowStyle={{ marginRight: 10 }}
            open={openRoom}
            value={room}
            items={dataRoom}
            setOpen={this.setOpenRoom}
            setValue={this.setRoom}
          />


          <View style={{ height: 40 }} />
          <TouchableOpacity
            onPress={() => {
              console.log(idBuilding, room)
              this.props.postLessonAction({
                courseId: idCourses,
                className: lesson,
                trainer: lecture,
                date: chooseDay,
                startedTime: timeStart,
                endedTime: timeEnd,
                buildingId: idBuilding,
                roomId: room
              })
            }}
            style={styles.btnSave}>
            <Icon name="save" size={15} color='white' />
            <View style={{ width: 5 }} />
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>LƯU</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  }
};

