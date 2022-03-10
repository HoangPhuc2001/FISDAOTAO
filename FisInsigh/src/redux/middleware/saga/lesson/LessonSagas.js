import { GET_LESSON, GET_LESSON_SUCCESS, GET_LESSON_ERROR } from '../../../actions/LessonAction';
import { call, takeEvery, put } from 'redux-saga/effects';
import { getLesson } from '../../api/home/lesson/LessonApi';


function* getLessonFlow(action) {
    const response = yield getLesson()
    try {
        // kiem tra xem co goi dc api ko 
        if (response !== undefined && response !== null) {
            if (response.resultCode === 1) {
                //thanh cong sẽ put về
                console.log('getCourseSaga => Success',);
                yield put({ type: GET_LESSON_SUCCESS, response })
            } else {
                //truong hợp này gọi tới sever bi sever báo lỗi về
                console.log('getCourseSaga => ',response.message);
                yield put({ type: GET_LESSON_ERROR, error: response.message })
            }
        } else {
            //Đôi khi api lỗi , sever ko trả dữ liệu vè
            console.log('getCourseSaga => ',message);
            const message = "Có lỗi xảy ra, không thể kết nối tới sever"
            yield put({ type: GET_LESSON_ERROR, error: message })
        }
    } catch (error) {
        const message = "Có lỗi xảy ra, không thể kết nối tới sever"
        console.log('getCourseSaga => ',message);
        yield put({ type: GET_LESSON_ERROR, error: message })
    }
}

export function* watchLesson() {
    yield takeEvery(GET_LESSON, getLessonFlow);
}