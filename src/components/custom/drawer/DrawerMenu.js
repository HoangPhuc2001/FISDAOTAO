import React from "react";
import { SafeAreaView, Text, Image, View, TouchableOpacity } from 'react-native';

import styles from '../../../res/values/styles/styleDrawer';
import { headerStr, loginStr } from '../../../res/values/strings/index'


export default class SlideMenu extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, }}>
                <View style={styles.viewProfile}>
                    <Image source={headerStr.imgAvatar} resizeMode={'contain'} style={{ height: 120, width: 120, borderRadius: 60 }} />
                </View>
                <View style={styles.textProfile}>
                    <Text style={{ color: '#345173', fontSize: 19 }}>Nguyễn Hoàng Phúc</Text>
                    <Text style={{ color: '#345173', fontSize: 16 }}>phucNH71@fpt.com.vn</Text>
                    <Image source={loginStr.stripe} resizeMode={'contain'} style={{ width: 80 }} />
                </View>
                <View>
                    <TouchableOpacity style={styles.controlProfile}>
                        <Image source={headerStr.profile} resizeMode={'contain'} style={{ width: 30, marginRight: 5 }} />
                        <Text style={{ color: '#345173', fontSize: 17 }}>Thông Tin Người Dùng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={ () => this.props.navigation.navigate('Login')}
                    style={styles.controlProfile}
                    >
                        <Image source={headerStr.logout} resizeMode={'contain'} style={{ width: 30, marginRight: 5 }} />
                        <Text style={{ color: '#345173', fontSize: 17 }}>Đăng Xuất</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}