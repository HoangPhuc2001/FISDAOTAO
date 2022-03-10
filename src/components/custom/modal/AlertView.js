import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Sizes from '../../../res/values/styles/Sizes'

const AlertView = ({ title, message, buttonColor }) => {
    const [alertVisible, setAlertVisible] = useState(true);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={alertVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.titleText}>{title}</Text>
                        <Text style={styles.messageText}>{message}</Text>
                        <TouchableOpacity
                            onPress={() => { setAlertVisible(!alertVisible) }}
                            style={{ ...styles.openButton, backgroundColor: buttonColor }}
                        >
                            <Text style={styles.btnStyle} >Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({

    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
    },
    modalView: {
        width: '80%',
        margin: Sizes.s10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.85,
        elevation: 5,
    },
    textStyle: {
        color: '#0074E8',
        textAlign: 'center',
        fontSize: 20,
        marginTop: Sizes.s20,
    },
    btnStyle: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    titleText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#0074E8',
    },
    messageText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000000',
        marginTop: Sizes.s20,
    },

    openButton: {
        borderRadius: 5,
        elevation: 2,
        justifyContent: 'center',
        width: '100%',
        height: 40,
        marginTop: Sizes.s40,

    }

})



export default AlertView;