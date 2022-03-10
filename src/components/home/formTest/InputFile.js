import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Sizes from "../../../res/values/styles/Sizes";

export default class InputFile extends React.Component {
    titleText
    constructor(props) {
        super(props)
        this.state ={
            stringify: this.props.titleText
        }
    }

    render() {
        return (
            <View>
                <Text style={{ color: '#345173', }}>{this.props.titleText}</Text>
                <View style={Styles.inputFile}>
                    <Text style={{ marginRight: Sizes.s470, color: 'grey'}}>{this.state.stringify}</Text>
                    <TouchableOpacity
                        onPress={uploadImage}
                    >
                        <FontAwesome5
                            name="images"
                            size={18}
                            color="grey"
                        />
                    </TouchableOpacity>

                    <View style={{ width: 15 }}></View>
                    <TouchableOpacity
                        onPress={selectFile}
                    >
                        <FontAwesome5
                            name="file-upload"
                            size={18}
                            color="grey"
                        />
                    </TouchableOpacity>

                </View>
            </View>

        )
    }
}

const { width, height } = Dimensions.get('window');
const Styles = StyleSheet.create({

    inputFile: {
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        width: '95%',
        height: 40,
        backgroundColor: 'white',
        borderColor: '#c2c2c2',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: Sizes.s20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 3,
    },
});

const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
        const res = await DocumentPicker.pick({
            // Provide which type of file you want user to pick
            type: [DocumentPicker.types.allFiles],
            // There can me more options as well
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf
        });
        // Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        // Setting the state to show single file attributes
        setSingleFile(res);
    } catch (err) {
        setSingleFile(null);
        // Handling any exception (If any)
        if (DocumentPicker.isCancel(err)) {
            // If user canceled the document selection
            alert('Canceled');
        } else {
            // For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
        }
    }
};

const uploadImage = async () => {
    const [singleFile, setSingleFile] = React.useState(null);
    // Check if any file is selected or not
    if (singleFile != null) {
        // If file selected then create FormData
        const fileToUpload = singleFile;
        const data = new FormData();
        data.append('name', 'Image Upload');
        data.append('file_attachment', fileToUpload);
        // Please change file upload URL
        let res = await fetch(
            'http://localhost/upload.php',
            {
                method: 'post',
                body: data,
                headers: {
                    'Content-Type': 'multipart/form-data; ',
                },
            }
        );
        let responseJson = await res.json();
        if (responseJson.status == 1) {
            alert('Upload Successful');
        }
    } else {
        // If no file selected the show alert
        alert('Please Select File first');
    }
};