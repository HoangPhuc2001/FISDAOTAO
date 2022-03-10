
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styles from '../../res/values/styles/styleLogin';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginStr } from '../../res/values/strings/index';
import { getDeviceToken, handleNotify, requestUserPermission, showForeground } from '../custom/showNotifi';
import AlertView from '../custom/modal/AlertView';
//https://viblo.asia/p/push-notification-voi-firebase-cloud-messaging-trong-react-native-4dbZNppq5YM
//Notification FireBase


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidePass: true,
            checkboxRemem: false,
            username: '',
            password: '',
            icon: 'eye-slash',
            modalVisible: false,
        };
    }

    async componentDidMount() {
        requestUserPermission();
        getDeviceToken();
        handleNotify();
        // showForeground();
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    changeIcon() {
        this.setState(prevState => ({
            icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
            hidePass: !prevState.hidePass
        }));
    }

    clickCheckbox = (stt) => {
        if (stt == false) {
            this.setState({ checkboxRemem: false })
            this.setState({ sttcheck: true })
        } else {
            this.setState({ checkboxRemem: true })
            this.setState({ sttcheck: false })
        }
    }

    showAlert() {

        if (!this.state.username.length || !this.state.password.length) {
            return (
                <AlertView
                    title="Thông Báo"
                    message='Tài khoản và mật khẩu không được để trống !'
                    buttonColor='#FF7C00'>
                </AlertView>
            )
        }


        if (this.props.error !== null) {
            return (
                <AlertView
                    title="Thông Báo"
                    message={this.props.error}
                    buttonColor='#FF7C00'>
                </AlertView>
            )
        }
    }

    onLogin() {
        this.props.loginAction(this.state.username, this.state.password)

    }




    componentDidUpdate = async (prevProps) => {
        if (this.props.data !== null && this.props.data !== prevProps.data) {
            await AsyncStorage.setItem('token', this.props.data.data.token);
            console.log(this.props.data.data.token);
            await AsyncStorage.getItem('token');
            this.props.navigation.navigate('Home');
        }
    }




    render() {
        return (
            <SafeAreaView>

                <View style={styles.container}>
                    <View style={styles.dev}>
                        <Image source={loginStr.logoFPT} resizeMode={'contain'} style={styles.logoFis} />

                        <Text style={styles.text} > FIS INSIGNT PORTAL </Text>
                        <Image source={loginStr.stripe} resizeMode={'contain'} style={styles.stripe} />


                        <Text style={styles.text_tt} > ĐĂNG NHẬP HỆ THÔNG </Text>
                        <View style={styles.icon}>
                            <Icon name="user-alt" color="#b2bcc6" size={20} />
                            <TextInput style={styles.input}
                                placeholder="Tài Khoản"
                                value={this.state.username}
                                onChangeText={(text) => this.setState({ username: text })} />
                        </View>

                        <View style={styles.icon}>
                            <Icon name="lock" color="#b2bcc6" size={20} />
                            <TextInput
                                style={styles.input}
                                placeholder="Mật Khẩu"
                                value={this.state.password}
                                secureTextEntry={this.state.hidePass}
                                onChangeText={(text) => this.setState({ password: text })}
                            />

                            <Icon name={this.state.icon}
                                color="#b2bcc6" size={20} style={{ right: 1 / 2 }}
                                onPress={() => this.changeIcon()} />

                        </View>

                        <View style={styles.circle}>
                            <TouchableOpacity stt={true} onPress={() => { this.clickCheckbox(this.state.sttcheck) }}>
                                <Icon name={this.state.checkboxRemem == false ? 'circle' : 'check-circle'} size={20} color="#ff9335" />
                            </TouchableOpacity>
                            <Text style={{ marginLeft: 3, fontStyle: 'italic', color: '#ff9335' }}> Ghi nhớ đăng nhập </Text>
                        </View>

                        <View style={styles.btnForm}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.onLogin()
                                    // handleNotificationSchedule('thong bao', 'ban chua dang nhap vao app');
                                }}
                                activeOpacity={0.4}
                                style={styles.buttonContainer}>
                                <Text style={styles.buttonText}> Đăng nhập </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image source={loginStr.eLearningImg} resizeMode={'contain'} style={styles.fisimg} />
                    <Text style={styles.txtBottom}>Copyright © 2019, FPT Information system</Text>
                </View>
                {this.showAlert()}
            </SafeAreaView>
        );
    }
}
