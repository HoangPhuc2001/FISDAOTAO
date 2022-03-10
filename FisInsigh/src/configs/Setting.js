import AsyncStorage from "@react-native-async-storage/async-storage"

export var GetCourse = 'http://10.86.224.37:5001/api/edu/get_all_course'
export var PostCourse = 'http://118.69.123.51:5000/fis/api/edu/create_new_course'
export var PutCourse = 'http://10.86.224.37:5001/api/edu/edit_course'
export var DelCourse = 'http://10.86.224.37:5001/api/edu/delete_course'
export var GetLesson = 'http://10.86.224.37:5001/api/edu/get_class_by_course?courseId=5e845062e079643772177f1c'
export var PostLesson = 'http://10.86.224.37:5001/api/edu/create_new_class'
export var PutLesson = 'http://10.86.224.37:5001/api/edu/edit_class'
export var DelLesson = 'http://10.86.224.37:5001/api/edu/delete_class'
export var Login = 'http://118.69.123.51:5000/fis/api/login'
export var BuildingRoom = 'http://10.86.224.37:5001/api/edu/get_building'

// export let userData = {
//     token: ''
// }

// export let header = {
//     Authorization: 'Bearer ' + userData.token
// }



// getData = async () => {
//     try {
//         var value = await AsyncStorage.getItem('token')
//         if (value !== null) {
//             console.log(value)
//             this.setState({token: value})
//         }
//     } catch (e) {
//         // error reading value
//     }
// }
