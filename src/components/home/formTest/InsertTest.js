import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
// import RNPickerDialog from './picker/new';
import RNPickerDialog from 'rn-modal-picker';
import { RadioButton } from 'react-native-paper';
import Styles from '../../../res/values/styles/styleForm';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { headerStr } from '../../../res/values/strings/index';
import DocumentPicker from 'react-native-document-picker';
import InteractiveTextInput from "react-native-text-input-interactive";



export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    name: 'Keangnam',
                },
                {
                    id: 2,
                    name: 'Tân Thuận 3',
                },
                {
                    id: 3,
                    name: 'Canada',
                },
                {
                    id: 4,
                    name: 'Denmark',
                },
                {
                    id: 5,
                    name: 'Egypt',
                },
                {
                    id: 6,
                    name: 'France',
                },
                {
                    id: 7,
                    name: 'Greece',
                },
                {
                    id: 8,
                    name: 'Hong Kong',
                },
                {
                    id: 9,
                    name: 'India',
                },
                {
                    id: 10,
                    name: 'Japan',
                },
                {
                    id: 11,
                    name: 'Kenya',
                },
                {
                    id: 12,
                    name: 'Liberia',
                },
                {
                    id: 13,
                    name: 'Malaysia',
                },
                {
                    id: 14,
                    name: 'Nepal',
                },
                {
                    id: 15,
                    name: 'Oman',
                },
                {
                    id: 16,
                    name: 'Poland',
                },
            ],
            placeHolderText: 'chọn ngay đi',
            selectedText: '',
            defaultValue: true,
            select: '',
            value: '',
            checked: 'first',
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA+VBMVEX/ZQH//////v//YwD+ZgH///38//////v9ZwD///n/ZAT//f///v35XgD/YQD///j3YQDsXQD00a7/9+z/7Nn1ZQD+38P849DwwZj517/+7N3+59HxyaPsahzyeznvjk7+9uDxk2P4vJHvkVvyrob///LuZADthD7/9+j//+3phUntcibyWQDnYAD72rz/5sf2xqf1o3LmdSfzp3vunGjyrnz3i0jrhz/73Lvnjlnvcyz869DvnHLvupHwoGzubhTqv5rvxJT2m1r5wpb3vJ/vk1PyhE/91q/qoWz1t4T5mVf2y7H80qDvtIT2eDrudyDyhDjmmVfpeTuS9DtyAAATz0lEQVR4nO1dCXvTuNa2bFmSFctWmjrdk9DUadqGNNCEKeQG35nSgfk6XCj//8d858hxF+jiFLcsj94ZSinx8uocnU06wnEsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsFgYVFOHQ/Dcn/1ophBCOlPld4eZSSvhV8TNyFM+gV35DSPM8r/hU1QTntxXFM3FIgfOjPAQlJcTdDB6BoDQPLW5s9ORiPKtF8Yg74JSjuNgoSCQoL+9Lc4k+Aoz06DcM54+dT8dH0lKQoxMBlIoiOZ8XjwB68eXKz67SfJxZCMbM8VTysn20vb398ejZbqai6p9i4CmldHId+ivcT1HCXRaZRlQ6UbK/ergXE4N4rzMcZ9VypDgTqNQvJ2drKxvXsXINzcNXEWrqjXdB+0BV8sdkqdkuNVtBeEIKzxt0m3uEEeISwphhGWy8Hcir9vy7GTrCUV+W+pzchhC/wNPjNx58+haGniPq443UJ2nLK8XQOL4oW4pDEnKXuAA/YK4LDwpWEyG9qgwODv7gCIaRsYCzb9j58Isz5rsuYUua3iJC/Kl6eeyH8JadpOTgA0H9uoNDxzjAR5IBdznz47cRjEBlJlU4vdWQcZ/Bc26WIYoPnpvu3/FQql914C4wGGuDUk8Vkib62R4La3CVi49nxIVRxkFd0qikVZlUSvVm7HIe4hD6NzJ0SQgvQDY1vNgtWupErU7o+iEJyKSEQUIbKqk6jbnPUUlR9jgXuA+Ew40DD7S+OsutjriL6u8yH6f7TQxZCHLcyMBxJbd59N4hyBrmUMA/01LGFObgmz480IenIs35jAcpHm9FHsQAlc1D+WUPVCT0ffh6i6WBv+Bk4wAj5NsGVm/DHIbxCf1G757QL4dHRTKEj8P8xuemy0uj0dK0n/aPu9qj2qkiOAU9AU2ngyWY6DiDQMlwEoThFSMK37toY1g6fBPRG+UHplhS0FHu1vAKv6mpLENRyP+ADwxclFswerVV14N6r7V7UI8ceqtBWxACrTrtdYBBjcCMrzFWc41duS5BHpD+h56+5S7IUEZHMUjD9+HymZZlGFKn3gT9DEE7WHpej3IPE0UVR92QnEXdlITM9RknQT+NG4208RX668O3PXVr3iFxpAYjGBgwGDWXd3W54DvaT9FMB4EbvI2KCyrOPyUmuGrGXWDIA5/Psuwgy7LeNWDsNlAwb7xbZgYolOfUp8ytgb1wSf+NKMdQnTDmmglyrOWtBuz7AN6NOqppIiY/ZPF+9E1mlv/5Mnm7Aeanb/Zyq0jYRuKUm4f1Q5gcPocJMlaPl7QAhWwdbQk4Q9bpwVwAZcQwVeSgF9+hXbrlJnCRHHPQUSRIVsFZO2Xs4MFeDexSGLrxvvcI1ZH85eD1otM0BHeHhnSojDe4njDNgfHFLdNQQHilthmoOtgpTl6ocg+PvsSMxCBFFj6be6HK00IP3s1RO2j/MLb2Z4pKz5NXAcK4rNLcMsr4495xEfs0vkRYT7r/6dF+zHwO2sNJs4dCRB9fGbc5kKE+K+KWoC2dRHyV4WPwdLfvxcGPDvqFE50+R19dhuHfKRhw8FJ+jW8OMBoUTnWxdvFuFILujcLrpc8hA9ZKq2vQ+P89t3FkOygYwsvSUpbGe7MHUaIPwSJEo8dbkDaDtlc8GeFFRPQlLRg2/rv6Lf7888/Vzb/uTrkF1RNSMDzCtKeUx38+JTUw4Tzk4I37R5mGyVB1CQrShOg/FwkTN//dFJW+vVvpqKOXis+CxxElGaptUsN8AkwNOMZwOu7dlrY8HJi1jsg8YYLEE7JQ93pyUcN8oZPddRO0Dtl6kXV1YBqCwSjDMHrTiWshZvcBZPYQvQ13S5rh8gC1r28UDCFEhAgj9P084s61zmUwwU7umYeO17qQ/rA+v/H9kOpDbFJmiBTcMITnpv/UK7amYGi29rBG4mNOgC/JisQCPCTkvDDCnC0f3C0SCIveEh6E4NlcMlP5j0pACP0uxsJJDSeiSQ35cAuDwMpmI4QeXjcgmBthQPkVIOvGxN4NxuruaUU9vQn5h48Mg9el64B4T/2RY2gKaVehSMOe5+jKPD/YUpjt4JBAVlgjuQYgzsEhs2Ci5D2mFFXdlLA46b9c6AVA+n3ILiCeuhjgUakiT+kHOPUhxBW+D3FbDL9dATGlrxrpnCtxT8wovCwGcqDmYdhMFng8eiudbaYgQHc+jUOfd6OKsl8DL+swmOYoxa90FDSn5tbSYUuDjO4JaqJTM5c5WN7RQtYQR84bdFcgMi5kyML39QoTKQ+TUBAYZyBEn1+FH8Rp5/1pEpWIh9UsZ8gwlS39cCwWCikTEfXGh36tYMj6B1FlBKlQR6CgBNWUjLrPrqLb7e5v6cgzAdjdTxRqBcwgeDXmN3YXYmhIwhyI6tvzyApu5HcrdPtUb7J8ucAP2tE3QMctcGnoHoY9sBYwRnCjadlq97W38Kg3OErBFsM0BJNzVKrcWgrSyTZYPnKkf/BQX+vJdooJJkQHZOkBQQnFAMEbrLJaCPEGRDgvVGVClM6XPq72gJaSZv2hd/HUhENqj5Us/6Na2JXh8gTW6v5OORY0wKaOK1xak2NTjIUc5r7I7C7oIZbZIP6CsNtbWBNwhduJhNNqoPeFGRO/qjBy06uo+SZc+o6B6y2bMQJt6PcWL0SYbQlCRGNSq9UYeC6I86ur2SSHoKIhlo/2Dh7MED2OCdQZGd5WNL4DVHigpqAImEFhaIP+sLLANOsTDOpDRqbPHzxs0RGfL6GS7YcYGrQ00eBDDK/BOEzEF0pWxlC24Y44D32IRR7AMNdINQp81/chYiCvSuloXv2Z30KaYp0a72H4jWuHlSqp+ghxFgfNYMGzB8YRcFVvBUaJ4+otTsNy222kFGqQJFpFYEWVfrmaQsiA9VYWoh5UVq4ZDEFJAzSCy70HhYJYyvJe7qF9YBA7f9RemdQOS8s6+2dlfXk4+3B6+uHjWgOcaWji/XC6FVGzSFkJkr6P9BiP32rxEIqgTriww8IaCTiZ9solr3CVftvhkI1gKoFrwGYhH0cpjrtKOJUtb3ufA441IEZG+uq2q7IwtXuq3hFS8+PATdvSKblqq3YCLAixfPkc80pcYoPQNt3WQla3gK8muGgAedOw98B8RZhFQALxFodMubSr0OMUhMeMBcYxxhVKiP/B7K3WqedVVxZWI1OW4e97zsMUw8Pq31YnRC1NJwPHK5m6Pu/gpouicAkxO7wFeC2SzrRZtC1VMr8b+Q623jqHoetM6qYk9ZCbYkX57xikEUy7eQWqDEN9ArOO4XqXKc64mOJjArw81vPdl9+/c89sV5WfUxIvr755cEAKWY8j1T+ENA7f9hZ4J3k6Bb8HExG3foCPqJmyUP9kq+Tacal3MyQ/TV7sZ/rh8ajAdW/1f5NuK1FOVJ6i1NnbZuqT+TY2kCQLprMvOI0rcxPm9RytNI2+Z1sOrvp5kZbevVuLr4NSrd8cna30+2kcx43144+vetrDjX9VZvd55n7H/pj7ISEyyTedL3wTiNmUGtR72adPWTIYmA0YuOBc3fbn+cZ7DAkfrvpm5Zs6C2/pxW2XyMfD6MYscSTJ3MRUV4Ki+c4Ac8cH2y20v8hSLtikgJEQJk1O8RbzlcxH2Y1B8wX6B0Li9mxcSVtwHs63luaXmOdL55GaOSwsLCwsLCwsLCwsfiuYPPL3Txx+Z4a06p2xPykeqUP754CkeaHpt4VZEC3XZvKLgibPnycL1nIe4zWKibLwQpsXRXdX7Or/Tjvvv12aEmZHuKn3PQl7LHpJ5UmKPdSLFOBo9uJFducb1puErH+7b3ReQQSWT8PQ8Zzk9PXrXb3o2RBZk/PhnZvdkeHy1wypzHv7cbOJ91jnRFyDEOJzJ03/1WgTFmAYvY59EnfvWuG5kSFKL3EiPKchcR7pNJOv4bUaBPvEpVykBzdqp4Tste9l+M08xIeo1sdpG7d4PoWvlE70v75LlnCBaxEZUj3r97fvXOK+maF0hG6nDMT/RAwd4bX6DBgu3Aivs627l1lvYShl1A5IgAwrbwe6ERQYopbmDPN+wPn6Pk7M+VkX4L2LbcO0OPfIw300Iv9b43byZsXcelDDkAFDjxbHCcn5x+gpcXOGT+ItnGg+D/MXKM6+MoGzEMWKFRg+86d8pVw483MBhDT2CY8LMkel4Dkg+N5Cwt8YGdZNV6LAPvy85w/urNuhYQg3fWqGIDJPRvPuvCg/aQW/4EvTed+epPnqk6BRlLfQmins4OqnQWSWpuAD9WPmTvX8QowOZL5rJgKGPjCU9LHO3LmDYaLU5w/bZ2vD47N340x72B0ojUVQnyajteHaaPJZm6V3Sf9ot/8Qpl8Ypa/qn+EDa2tn2x8OBtpsusHG+/VBcr49Go1m40zlQbj4fNreCVmw0z7ttu/0p4/AUNDPq+uNOD/2h8X90Zb0UGAwk/S7fmz2Wgbxylhj9KMP4/hQ59ISDrZPxEFMWBjHjea5RlcwgHnYGK3n1/H+SRLhiqh6z1N4ghunPNw7fwKXf4WhJ9QQj6shPI4D3AUedloJvpQUvWNeq5G038B+qfyMFb3C/Y0EZx0V3vOlgLtAP03hKk46W2CFaP3Y9B4RnqYBbqCZtuBCMXhP4hBb8zgJ0/Mn0NMrDKlQayC6ldHk/Pz15KxBGG7LA93y1Cys+Z3ZaWt3PFree+VFuL13hbEVkzpop9fEdtvhzvh8fHSWYnsIGuT6IXF5vDyafPiw3Ux95k+3QHn1Xzs7Z8T3z3ZmO5PWE5iaS4ZoTNbA+j3Hw8WiSO9OQ8J3FKppsue7aVdJ4UUqO02MfdErhKygkZGiPvIJm+4P4DoVDTa52Q+b+8PG6wRvp5JxB8T2AuwUBUu2z8O4m9ufp2XoqDVG1pO8i5lG+zHhG3W0NbuckdUBWBU0qvO3QoZ4kAJIaz8NyfLLKHeLapOgltIrcSn+XHdj328mnglM24T8CH94hSHmcGATQKJ97H2Ur4HhiwidwGWgVTCUVC/5LHitzHmS2JDzNcM8QnjeJG4/M3mFbIc/mKHZ+gJ+6x3Ywhaakn1gOFP4icte3wuGYguivmHdwz7/GxnOZXtCSHwwl+GPZmge7FG1w1ljFzllAWf9LMITM8R1hnji2ytwB0dKzs8f/IqhcZ4Itc1YnNGfRIZoXATu6SXI0MFjaMJwuq9ldLlDa84QvpkQzvdxB6y4QYYm8kalwL7V9GfRUhORwF/s+GFjF48SoNkG2Pd47dmVTY1zLYWL/gxJ2sIwR9wiQ6OnwNCNM0/8FAzRy3uQ5OyEBBmiQA/OYogF+PTky8C8lrjCcJOhe5B5YelmhvixbTMPfxYZGkQ7PNdSLKnUXx/HeJZFOsq0OZbzwlsgw37mSaOj9zDcwkjgp2Po5a2CUf3vk2Vs3p6i53O8giFVqymemegkwmz5vluGPydDzPvQE0Y6O+qEPmlqZFwwFGoSs2A/wnzqV2U479cBLfTUFxCj35WJuGTotSGAnSiad878ogyN9zDJuhpzl28qbICZWxrhbfUhb6g7+cbjX5MhumnsFwTtjN7s4SmX1HMuZYgdm8FOkt+tHENC4idj6HjzeinmC8CQobcoGPokRYYi3zuNRRjvS+r7awMhJWRPc4Zyt0/cRneQxwKDrxgWe3VzhvnO2TYn/FkknqbWBll8q4FZLa6WYH64fIVhSPbQWwip8bQj3KM9mIV4kgm8XLJhYhp8R/2REzedvakPBvXn+xs5Q4kM/eVB0XMIDMM8LqXyU4AnYXhlG6a+l6LT6vMQtRQiqzVOli/OwcOYBhhSB/LyyUGCaV5vkvohyNW50FJTQRysBoyR9HA4bHYCsDtzhsfEXR4UgSwyTHOGTq8BMeqstZX1noCgkFGr72NLPR41mGupLBiGpA8MhToN/U7z3c7OaIrHrpxodO0XHh/CNa8+6YfFyZLcZ3OGkOMv1+klQ5ZiTINVnxNSC+L+8vT0Ceo0yHBuaaTJCNeTQnXA0rDUMDw2J2NybMBn4SYOfFHFyEulENi0Zodp6MeNjdnwUksZW75o+EeGYGmM1aJZEw+cIHH5c20eDkgDW504/ldjrVQdx/FhUiwjRpO9oLMbeTQ6mC3H5rBhnm6Me7l9UIdpeqi9fKUerkh6Wevzp6yXW5rIaGkcT5OicUj9E8d7OUMaJdnJXhAE6VPIEBcse1nWoyb5we8u16WTrJclptNJ6YPxbHYye/tpEJmTryEyzQCCFkVxcw1GpmqpkKHo9XqZkFfvRvEYYSxeear3x/nr/z3NuoXI+//Nw7Esf9klZ7YaYEUYvvd0Xs/GJCkxB5SYi8C+SviBkPmWBDzNb+iHna1ih4K86LI3q5MybycxB/Z5OipzAPiPhukanLd/5is69XVGDnvmgJYf/G4VAUh5ZruDyNtno/0QO4xpqf7uXwK4K4hGxb8aIEX9EBxmNxLe7yJC1NBEjbcP6kpJqdTBMAjJYZ3+PgxxU4XTO/QbK//98Nf55H2DMN7fj6j4bbQUFxejv+O87zU//LxzqqRZDv3R71YNPAqBW7a9sZdiey8jvL/UUvLx/uGWHwOI2ZLdF6O1ZnN4drRb3eGAPxHQf0d4ki3+gy3ie7o3f16Y7Rb5wc4lDy7/5VBs48Au70f6t7d+MKSTV6xMa+/vKENK80UpszPj94QRW9GU/TvK0MLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLC4sfg/wE50IWGiLlnlAAAAABJRU5ErkJggg==',
            lecture: '',
        };
    }

    selectedValue(index, item) {
        this.setState({ selectedText: item.name });
    }

    choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            this.setState({ image: image.path });
        });
    }

    takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            this.setState({ image: image.path });
        });
    }

    render() {
        const { checked } = this.state;
        return (
            <ScrollView style={Styles.scrollView}>
                <View style={Styles.container}>

                    <Text style={{ marginBottom: 30, fontSize: 25, fontWeight: 'bold' }}>
                        {'React Native Form'}
                    </Text>

                    <View>
                        <Text style={{ fontWeight: 'bold' }}> Radio Button</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ checked: 'first' }); }}
                            />
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Nam</Text>
                        </View>


                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ checked: 'second' }); }}
                            />
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Nữ</Text>
                        </View>


                    </View>

                    <Text style={{ fontWeight: 'bold' }}> Dropdown Picker </Text>
                    <RNPickerDialog
                        data={this.state.data}
                        pickerTitle={'Tòa nhà'}
                        // labelText={'testss'}
                        showSearchBar={false}
                        showPickerTitle={true}
                        listTextStyle={Styles.listTextStyle}
                        itemSeparatorStyle={{ borderColor: 'gray', borderWidth: 1 / 2 }}
                        pickerStyle={Styles.pickerStyle}
                        selectedText={this.state.selectedText}
                        placeHolderText={this.state.placeHolderText}
                        searchBarPlaceHolder={'Search.....'}
                        searchBarPlaceHolderColor={'#9d9d9d'}
                        selectedTextStyle={Styles.selectedTextStyle}
                        placeHolderTextColor={'gray'}
                        dropDownIconStyle={Styles.dropDownIconStyle}
                        searchBarStyle={Styles.searchBarStyle}
                        //dropDownIcon={require('../assets/pin.png')}
                        selectedValue={(index, item) => this.selectedValue(index, item)}
                    />
                    <Text style={{ fontWeight: 'bold' }}> Dropdown Picker Search</Text>
                    <RNPickerDialog
                        data={this.state.data}
                        pickerTitle={'Phòng'}
                        // labelText={'Country'}
                        showSearchBar={true}
                        showPickerTitle={true}
                        listTextStyle={Styles.listTextStyle}
                        pickerStyle={Styles.pickerStyle}
                        selectedText={this.state.selectedText}
                        placeHolderText='chọn ngay đi'
                        searchBarPlaceHolder={'Search.....'}
                        searchBarPlaceHolderColor={'#9d9d9d'}
                        selectedTextStyle={Styles.selectedTextStyle}
                        placeHolderTextColor={'gray'}
                        dropDownIconStyle={Styles.dropDownIconStyle}
                        searchBarStyle={Styles.searchBarStyle}
                        //dropDownIcon={require('../assets/pin.png')}
                        selectedValue={(index, item) => this.selectedValue(index, item)}
                    />

                    <Text style={{ fontWeight: 'bold', marginBottom: 10 }}> Image Picker</Text>
                    <TouchableOpacity onPress={this.takePhotoFromCamera}>
                        <ImageBackground
                            source={{ uri: this.state.image }}
                            style={{ height: 100, width: 100 }}
                            imageStyle={{ borderRadius: 15 }}>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Icon
                                    name="camera"
                                    size={35}
                                    color="#fff"
                                    style={{
                                        opacity: 0.7,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: '#fff',
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.choosePhotoFromLibrary}
                        style={Styles.btnSave}
                    >
                        <Text style={{ fontWeight: 'bold', color: 'white' }} >Choose from Libary</Text>
                    </TouchableOpacity>

                    <Text style={{ fontWeight: 'bold', marginTop: 10 }}> Attach File</Text>
                    <View style={Styles.inputFile}>
                        <Text style={{ marginRight: 180 }}> Selecte File</Text>
                        <TouchableOpacity
                            onPress={uploadImage}
                        >
                            <FontAwesome5
                                name="images"
                                size={22}
                                color="black"
                            />
                        </TouchableOpacity>

                        <View style={{ width: 15 }}></View>
                        <TouchableOpacity
                            onPress={selectFile}
                        >
                            <FontAwesome5
                                name="file-upload"
                                size={22}
                                color="black"
                            />
                        </TouchableOpacity>

                    </View>

                    <View style={Styles.tableView}>
                        <RNPickerDialog
                            data={this.state.data}
                            pickerTitle={'Phòng'}
                            // labelText={'Country'}
                            showSearchBar={true}
                            showPickerTitle={true}
                            listTextStyle={Styles.listTextStyle}
                            pickerStyle={Styles.pickerStyle}
                            selectedText={this.state.selectedText}
                            placeHolderText='chọn ngay đi'
                            searchBarPlaceHolder={'Search.....'}
                            searchBarPlaceHolderColor={'#9d9d9d'}
                            selectedTextStyle={Styles.selectedTextStyle}
                            placeHolderTextColor={'gray'}
                            dropDownIconStyle={Styles.dropDownIconStyle}
                            searchBarStyle={Styles.searchBarStyle}
                            //dropDownIcon={require('../assets/pin.png')}
                            selectedValue={(index, item) => this.selectedValue(index, item)}
                        />

                        <InteractiveTextInput
                            textInputStyle={Styles.input}
                            placeholder="Nhập tên giảng viên"
                            value={this.state.lecture}
                            onChangeText={(text) => this.setState({ lecture: text })} />
                    </View>

                </View>
            </ScrollView>


        );
    }
}

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

