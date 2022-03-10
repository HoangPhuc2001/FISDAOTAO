import { DELETE_COURSE, DELETE_COURSE_SUCCESS, DELETE_COURSE_ERROR, } from '../../../actions/CourseAction';

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { daleteCourse } from '../../api/home/course/CourseAPI'
// function* là đặc biệt trong saga có nhiệm vụ làm xong phần này mới đi tiếp,

//tao ham goi api xem action truyen ve
export function* deleteFlow(action) {
    const { courseId } = action.data//dua theo action lay du lieu ra     
    //hoi ham post va truyen du lieu dau vao
    const response = yield daleteCourse(courseId)
    console.log(response.resultCode)

    try {
        // kiem tra xem co goi dc api ko 
        if (response !== undefined && response !== null) {
            if (response.resultCode === 1) {
                //thanh cong sẽ put về
                alert(response.message);
                yield put({ type: DELETE_COURSE_SUCCESS, response })
            } else {
                //truong hợp này gọi tới sever bi sever báo lỗi về
                alert(response.message);
                console.log('DeleteSagas => Success',response.message);
                yield put({ type: DELETE_COURSE_ERROR, error: response.message })
            }
        } else {
            //Đôi khi api lỗi , sever ko trả dữ liệu vè
            console.log('deleteCourse =>',message)
            const message = "có lỗi xảy ra, server không phản hồi !!"
            yield put({ type: DELETE_COURSE_ERROR, error: message })
        }
    } catch (error) {
        console.log('deleteCourse =>',message)
        const message = "Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({ type: DELETE_COURSE_ERROR, error: message })
    }
}
export function* watchDeleteCourse() {
    yield takeEvery(DELETE_COURSE, deleteFlow)
}