import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetCourse } from "../../../../../configs/Setting";



export async function get_Course() {
    console.log('getCourse =>', get_Course)
    const token=await AsyncStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append( 'Authorization',`Bearer ${token}`)

    var raw = ""

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return (await fetch(GetCourse, requestOptions)).json()
}


export async function postCourse(newCourse) {
    console.log('postCourse =>', postCourse)
    const token=await AsyncStorage.getItem('token')
    let data = {
        courseName: newCourse.courseName,
        trainer: newCourse.trainer,
        startedDate: newCourse.startedDate,
        endedDate: newCourse.endedDate,
        buildingId: newCourse.buildingId,
        roomId: newCourse.roomId
    }

    const response = await fetch('http://118.69.123.51:5000/fis/api/edu/create_new_course', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },

        body: JSON.stringify(data)//du lieu truyen len

    })
        .then(response => response.json())//tra ve json
        .catch(error => {
            console.log(error);
            return { resultCode: -1, message: 'Vui lòng nhập đầy đủ thông tin đăng nhập' };
        });;
    console.log('response => postCourseApi', response)
    return response//response tra ve cau truc cua api
}

export async function editCourse(updateCourse) {
    console.log('putCourse =>', editCourse)
    const token=await AsyncStorage.getItem('token')
    let data = {
        courseId: updateCourse.courseId,
        courseName: updateCourse.courseName,
        trainer: updateCourse.trainer,
        startedDate: updateCourse.startedDate,
        endedDate: updateCourse.endedDate,
        buildingId: updateCourse.buildingId,
        roomId: updateCourse.roomId
    }
    const response = await fetch('http://10.86.224.37:5001/api/edu/edit_course', {

        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },

        body: JSON.stringify(data)//du lieu truyen len

    })
        .then(response => response.json())//truyen ve kieu json
        .catch(error => {
            console.log(error);
            return { resultCode: -1, message: 'Vui long nhap day du thong tin' };
        });;
    console.log('editApi =>', response)
    return response//response tra ve cau truc cua api
}

export async function daleteCourse(courseId) {

    console.log('API=> , courseId =>', daleteCourse)
    const token=await AsyncStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append( 'Authorization',`Bearer ${token}`)


    URLlink = 'http://10.86.224.37:5001/api/edu/delete_course'
    //ham fetch cua javascrip
    const response = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    console.log('dss', response)
    return (await fetch(`${URLlink}?courseId=${courseId}`, response)).json()
}





















