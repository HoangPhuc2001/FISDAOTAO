
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ToastAndroid, Image, Alert, Modal } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styles from '../../../res/values/styles/styleHome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList } from 'react-native-gesture-handler';
import { homeStr } from '../../../res/values/strings/index';
import UpdateCourse from './UpdateCourse';

export default class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datafromServer: [],
      dataBuilding: []
    }
  }



  async componentDidMount() {
    this.props.getCourseAction()
    this.props.getBuildingRoom()
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.Course !== this.props.Course) {
      this.setState({
        datafromServer: this.props.Course.data
      })
    }

    const result = this.props.buildingRoom.data
    if (prevProps.buildingRoom !== this.props.buildingRoom) {
      // console.log(result)
      this.setState({
        dataBuilding: result
      })
    }
    
  }
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>

        <View style={styles.navTop}>
          <TouchableOpacity
            onPress={() => this.props.navigation.openDrawer()}
            style={{ width: 40, height: 40, justifyContent: "center" }}
          >
            <Image source={homeStr.buttonMenu} resizeMode={'contain'} style={{ height: 25, width: 25, left: 15 }} />
          </TouchableOpacity>
          <Text style={styles.txtTittle}>QUẢN LÝ KHÓA HỌC</Text>
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('AddCourse') }}
          >
            <FontAwesome5 name='plus' color='#d4d5da' size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.listBackground}>
          <FlatList
            style={{ width: "100%" }}
            data={this.state.datafromServer}
            renderItem={({ item, index }) => <ListItem item={item} index={index} courseComponent={this} />}
          />
          <UpdateCourse buildingRoom={this.props.buildingRoom.data} ref={'EditCourse'} courseComponent={this} />
        </View>

      </SafeAreaView>
    );
  }
}

const ModalPopup = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);

  React.useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    }
    else {
      setShowModal(false);
    }
  };



  return (
    <Modal transparent={true} visible={showModal}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          {children}
        </View>
      </View>
    </Modal>
  )
}

class ListItem extends React.Component {
  // const [visible, setVisible] = React.useState(false);
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (

      <View style={styles.listContainer}>
        <ModalPopup visible={modalVisible} >
          <View style={{ alignItems: 'center' }} >
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => this.setModalVisible(false)}>
                <FontAwesome5 name='times' color='black' size={25} />
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody}>
              <TouchableOpacity
                onPress={() => {
                  const { courseComponent } = this.props
                  courseComponent.refs.EditCourse.showEditModal({ ...this.props.item })
                  this.setModalVisible(false)
                }}
                style={{ ...styles.btnModal, backgroundColor: '#1e90ff' }}
              >
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Cập nhật</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    'Delete',
                    'ban co muon xoa',
                    [
                      { text: 'no', onPress: () => console.log('Cancel pressed'), style: 'cancel' },
                      {
                        text: 'yes', onPress: () => {
                          console.log(this.props.item.course_id)
                          const { courseComponent } = this.props
                          courseComponent.props.deleteCourseAction(this.props.item.course_id)
                          courseComponent.props.getCourseAction()
                          this.setModalVisible(false)
                        }
                      },
                    ],
                    { cancelable: true }
                  )
                }}
                style={{ ...styles.btnModal, backgroundColor: '#ff0000' }}
              >
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ModalPopup>

        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={styles.listTitle}>{this.props.item.courseName}</Text>
          <TouchableOpacity onPress={() => this.setModalVisible(true)} style={styles.iconMenu}>
            <FontAwesome5 name='ellipsis-v' size={22} color='#808B96' />
          </TouchableOpacity>

        </View>
        <View style={styles.listRow}>
          <FontAwesome5 name="user-tie" color='#ffd237' size={20, 20} />
          <Text style={{ marginLeft: 10, fontSize: 18, color: '#345173' }}>Giảng viên:</Text>
          <Text style={{ marginLeft: 10, fontSize: 20, color: '#0a8dc3', fontWeight: 'bold', width: 250 }}>{this.props.item.trainer}</Text>
        </View>
        <View style={styles.listRow}>
          <FontAwesome5 name="address-card" color='#40304d' size={20, 20} />
          <Text style={{ marginLeft: 5, fontSize: 18, color: '#345173' }}>Cán bộ quản lý:</Text>
          <Text style={{ marginLeft: 10, fontSize: 20, color: '#f0943f', fontWeight: 'bold' }}>{this.props.item.created_by}</Text>
        </View>
        <View style={styles.listRow}>
          <FontAwesome5 name="calendar-check" color='#42c8fb' size={20, 20} />
          <Text style={{ marginLeft: 10, fontSize: 18, color: '#345173' }}>Thời gian:</Text>
          <Text style={{ marginLeft: 10, fontSize: 20, color: '#345173', fontWeight: 'bold' }}>{convertDateToString(this.props.item.startedDate)} -{convertDateToString(this.props.item.endedDate)}</Text>
        </View>
        <View style={styles.listRow}>
          <FontAwesome5 name="building" color='#0090d7' size={20, 20} />
          <Text style={{ marginLeft: 10, fontSize: 18, color: '#345173' }}>Tòa nhà:</Text>
          <Text style={{ marginLeft: 10, fontSize: 20, color: '#345173', fontWeight: 'bold' }}>{this.props.item.buildingName}</Text>
        </View>
        <View style={styles.listRow}>
          <FontAwesome5 name="chalkboard-teacher" color='#ff9126' size={20, 20} />
          <Text style={{ marginLeft: 5, fontSize: 18, color: '#345173' }}>Phòng:</Text>
          <Text style={{ marginLeft: 10, fontSize: 20, color: '#345173', fontWeight: 'bold' }}>{this.props.item.roomName}</Text>
        </View>

      </View>
    )
  }
}

const convertDateToString = (date) => {
  function pad2(n) {
    return n < 10 ? n.replace('0', '') : n;
  }
  let template = new Date(date);
  const date2 = pad2(template.getDate() + '/' + pad2(template.getMonth() + '/' + template.getFullYear()))
  return date2;
}
