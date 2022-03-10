import { userData, header } from "../../../../../configs/Setting";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getLesson() {
    console.log('getLesson =>', getLesson)
    const token = await AsyncStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`)

    var raw = "";

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return (await fetch('http://10.86.224.37:5001/api/edu/get_class_by_course?courseId=5e845062e079643772177f1c', requestOptions)).json()
}



export async function postLesson(newLesson) {
    console.log('postLesson =>', postLesson)
    const token = await AsyncStorage.getItem('token')
    let data = {
        courseId: newLesson.courseId,
        className: newLesson.className,
        trainer: newLesson.trainer,
        date: newLesson.date,
        startedTime: newLesson.startedTime,
        endedTime: newLesson.endedTime,
        buildingId: newLesson.buildingId,
        roomId: newLesson.roomId
    }

    const response = await fetch('http://10.86.224.37:5001/api/edu/create_new_class', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data),

    })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log('error login', error)
            return { resultCode: -1, message: 'Vui lòng nhập đầy đủ' };
        });;
    return response
}

export async function editLesson(updateLesson) {
    const token = await AsyncStorage.getItem('token')
    let data = {
        classId: updateLesson.classId,
        className: updateLesson.className,
        trainer: updateLesson.trainer,
        date: updateLesson.date,
        startedTime: updateLesson.startedTime,
        endedTime: updateLesson.endedTime,
        buildingId: updateLesson.buildingId,
        roomId: updateLesson.roomId
    }
    const response = await fetch('http://10.86.224.37:5001/api/edu/edit_class', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },

        body: JSON.stringify(data)//du lieu truyen len

    }).then(response => response.json())//truyen ve kieu json
        .catch(error => {
            console.log(error);
            return { resultCode: -1, message: 'Vui lòng nhập đầy đủ' };
        });;
    console.log('dss', response)
    return response//response tra ve cau truc cua api
}





export async function deleteLesson(classId) {
    const token=await AsyncStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append( 'Authorization',`Bearer ${token}`)
    console.log('sdsafdsa', classId)

    UrlLink = 'http://10.86.224.37:5001/api/edu/delete_class'
    //ham fetch cua javascrip
    const response = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    console.log('dss', response)
    return (await fetch(`${UrlLink}?classId=${classId}`, response)).json()
}















