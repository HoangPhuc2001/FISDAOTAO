
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ToastAndroid, Image, Alert, FlatList, Button, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styles from '../../../res/values/styles/styleInsert';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import { headerStr } from '../../../res/values/strings/index';
import InteractiveTextInput from "react-native-text-input-interactive";


export default class InsertCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStartVisible: false,
      modalEndVisible: false,
      dateStart: moment().format('MM/DD/YYYY'),
      dateEnd: '',

      dataBuilding: [],
      dataRoom: [],
      building: null,
      room: null,
      open: false,
      openRoom: false,

      course: '',
      lecture: '',
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

  handleConfirmStart = (date) => {
    this.setState({
      modalStartVisible: false,
      dateStart: moment(date).format('MM/DD/YYYY'),

    })
  }
  handleConfirmEnd = (date) => {
    this.setState({
      modalEndVisible: false,
      dateEnd: moment(date).format('MM/DD/YYYY'),

    })
  }

  hideDatePicker = () => {
    this.setState({
      modalStartVisible: false,
      modalEndVisible: false,
    })
  }


  async componentDidMount() {
    this.props.getBuildingRoom()
  }

  componentDidUpdate = async (prevProps, prevState) => {

    const result = this.props.buildingRoom.data

    if (prevProps.buildingRoom !== this.props.buildingRoom) {
      // console.log(result)
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


    if (this.props.postCourse !== null && this.props.postCourse !== prevProps.postCourse) {
      Alert.alert('Thông Báo', 'Thêm thành công !')
      this.props.navigation.navigate('MainScreens');
    }
    if (this.props.error !== null && this.props.error !== prevProps.error) {
      Alert.alert('Thong Báo', 'Thêm thất bại !')
    }
  }




  render() {


    const { open, building, dataBuilding,
      course, lecture, dateStart, dateEnd,
      openRoom, room, dataRoom, idBuilding,
    } = this.state;

    return (
      <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
        {/* HEADER */}
        <View style={styles.navTop}>
          <TouchableOpacity
            style={{ width: 40, height: 40, justifyContent: 'center', left: 15 }}
            onPress={() => { this.props.navigation.navigate('MainScreens') }}
          >
            <Image source={headerStr.buttonBack}
              resizeMode={'contain'}
              style={{ height: 25, width: 25 }} />
          </TouchableOpacity>
          <Text style={styles.txtTopname}>TẠO MỚI KHÓA HỌC</Text>
        </View>
        {/* CONTAINER */}
        <View style={styles.container}>
          <Text style={styles.txtTitle}>Tên Khóa</Text>
          <InteractiveTextInput
            textInputStyle={styles.input}
            placeholder="Nhập tên khóa học"
            value={course}
            onChangeText={(text) => this.setState({ course: text })} />

          <Text style={styles.txtTitle}>Giảng Viên</Text>
          <InteractiveTextInput
            textInputStyle={styles.input}
            placeholder="Nhập tên giảng viên"
            value={lecture}
            onChangeText={(text) => this.setState({ lecture: text })} />
          <View>
            {this.state.errorName && (
              <Text style={{ color: 'red', }} >Tên giảng viên không để trống</Text>
            )}
          </View>
          <View style={styles.dateRow}>
            <View>
              <Text style={styles.txtTitle}>Từ Ngày</Text>
              <TouchableOpacity style={styles.inputDate} onPress={this.showDatePickerStart}>
                <Text style={{ color: '#345173' }}>{this.state.dateStart}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={this.state.modalStartVisible}
                mode='date'
                onConfirm={this.handleConfirmStart}
                onCancel={this.hideDatePicker}
              />
            </View>
            <View style={{ width: 8 }} />
            <View>
              <Text style={styles.txtTitle}>Đến Ngày</Text>
              <TouchableOpacity style={styles.inputDate} onPress={this.showDatePickerEnd}>
                <Text style={{ color: '#345173' }}>{this.state.dateEnd}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={this.state.modalEndVisible}
                mode='date'
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
              console.log(dateStart, dateEnd)
              this.props.postCourseAction({
                courseName: course,
                trainer: lecture,
                startedDate: dateStart,
                endedDate: dateEnd,
                buildingId: idBuilding,
                roomId: room
              })
              this.props.getCourseAction()
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

