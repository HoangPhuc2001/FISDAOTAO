import { DELETE_LESSON, DELETE_LESSON_SUCCESS, DELETE_LESSON_ERROR,} from '../../../actions/LessonAction';

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { deleteLesson } from '../../api/home/lesson/LessonApi'
// function* là đặc biệt trong saga có nhiệm vụ làm xong phần này mới đi tiếp,
export function* watchDeleteLesson() {
    yield takeEvery(DELETE_LESSON, deleteLessonFlow)
}
//tao ham goi api xem action truyen ve
export function* deleteLessonFlow(action) {
    const { classId } = action.data//dua theo action lay du lieu ra     
    //hoi ham post va truyen du lieu dau vao
    const response = yield deleteLesson(classId)
    console.log(response.resultCode)

    try {
        // kiem tra xem co goi dc api ko 
        if (response !== undefined && response !== null) {
            if (response.resultCode === 1) {
                //thanh cong sẽ put về
                alert(response.message);
                yield put({ type: DELETE_LESSON_SUCCESS, response })
            } else {
                //truong hợp này gọi tới sever bi sever báo lỗi về
                alert(response.message);
                console.log('DeleteSagas => Success',response.message);
                yield put({ type: DELETE_LESSON_ERROR, error: response.message })
            }
        } else {
            //Đôi khi api lỗi , sever ko trả dữ liệu vè
            console.log('deleteCourse =>',message)
            const message = "có lỗi xảy ra, server không phản hồi !!"
            yield put({ type: DELETE_LESSON_ERROR, error: message })
        }
    } catch (error) {
        console.log('deleteCourse =>',message)
        const message = "Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({ type: DELETE_LESSON_ERROR, error: message })
    }
}
