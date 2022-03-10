
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
import Modal from "react-native-modalbox";


const convertDateToString = (date) => {
    function pad2(n) {
        return n < 10 ? n.replace('0', '') : n;
    }
    let template = new Date(date);
    const date2 = pad2(template.getDate() + '/' + pad2(template.getMonth() + '/' + template.getFullYear()))
    return date2;
}

export default class UpdateCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalStartVisible: false,
            modalEndVisible: false,
            dateStart: '',
            dateEnd: '',
            courseID: '',

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
            dateStart: moment(date).format('DD/MM/YYYY'),

        })
    }
    handleConfirmEnd = (date) => {
        this.setState({
            modalEndVisible: false,
            dateEnd: moment(date).format('DD/MM/YYYY'),

        })
    }

    hideDatePicker = () => {
        this.setState({
            modalStartVisible: false,
            modalEndVisible: false,
        })
    }

    showEditModal = (item) => {
        console.log('data', this.props.buildingRoom[0].room)
        const i = this.state.dataBuilding.findIndex(x => x.buildingName === this.state.building);
        console.log('index', i)
        console.log(this.state.building)
        this.setState({
            courseID: item.course_id,
            course: item.courseName,
            lecture: item.trainer,
            dateStart: convertDateToString(item.startedDate),
            dateEnd: convertDateToString(item.endedDate),
            room: item.roomId,
            building: item.buildingId,
            dataBuilding: this.props.buildingRoom,
            dataRoom: this.props.buildingRoom[0].room,

        })
        this.refs.myMoDal.open();
    }


    // async componentDidMount() {
    //     this.props.getBuildingRoom()
    // }

    // componentDidUpdate = async (prevProps, prevState) => {

    //     const result = this.props.buildingRoom.data

    //     if (prevProps.buildingRoom !== this.props.buildingRoom) {
    //         console.log(result)
    //         console.log(result[0].room)
    //         this.setState({
    //             dataBuilding: result
    //         })

    //     }

    //     if (prevState.building !== this.state.building) {
    //         const i = this.state.dataBuilding.findIndex(x => x.buildingName === this.state.building);
    //         console.log('index', i)
    //         console.log(this.state.building)
    //         console.log(result[i]._id)
    //         this.setState({
    //             dataRoom: result[i].room
    //         });
    //         this.setState({
    //             idBuilding: result[i]._id
    //         })
    //     }

    //     // if (prevState.room !== this.state.room) {
    //     //   if (this.state.room !== null) {
    //     //     const ind = this.state.dataRoom.findIndex(x => x.roomName === this.state.room);
    //     //     console.log('index', ind)
    //     //     console.log(this.state.room)
    //     //     console.log(result[ind]._id)
    //     //     this.setState({
    //     //       idRoom: result[ind]._id
    //     //     })
    //     //   }
    //     // }


    //     if (this.props.postCourse !== null && this.props.postCourse !== prevProps.postCourse) {
    //         Alert.alert('Thong Bao', 'them thanh cong')
    //         this.props.navigation.navigate('Home');
    //     }
    //     if (this.props.error !== null && this.props.error !== prevProps.error) {
    //         Alert.alert('Thong Bao', 'Them khong thanh con')
    //     }
    // }




    render() {


        const { open, building, dataBuilding,
            course, lecture, dateStart, dateEnd,
            openRoom, room, dataRoom, courseID,
        } = this.state;

        return (
            <Modal ref={'myMoDal'}>
                <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
                    {/* HEADER */}
                    <View style={styles.navTopEdit}>
                        <TouchableOpacity
                            style={{ width: 40, height: 40, justifyContent: 'center', left: 15 }}
                            onPress={() => { this.refs.myMoDal.close() }}
                        >
                            <FontAwesome5 name='times' color='black' size={25} />
                        </TouchableOpacity>
                    </View>
                    {/* CONTAINER */}
                    <View style={styles.container}>
                        <Text style={styles.txtTitle}>Tên Khóa</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập tên khóa học"
                            value={course}
                            onChangeText={(text) => this.setState({ course: text })} />

                        <Text style={styles.txtTitle}>Giảng Viên</Text>
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
                                value: '_id',
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
                                console.log(building, room, courseID, course, lecture, dateStart, dateEnd)
                                this.props.courseComponent.props.editCourseAction({
                                    courseId: courseID,
                                    courseName: course,
                                    trainer: lecture,
                                    startedDate: dateStart,
                                    endedDate: dateEnd,
                                    buildingId: building,
                                    roomId: room
                                })
                                this.props.courseComponent.props.getCourseAction()
                                this.refs.myMoDal.close()
                            }}
                            style={styles.btnSave}>
                            <Icon name="save" size={15} color='white' />
                            <View style={{ width: 5 }} />
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>LƯU</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </Modal>
        );
    }
};

