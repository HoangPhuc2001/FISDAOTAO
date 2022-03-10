import { GET_COURSE, GET_COURSE_SUCCESS, GET_COURSE_ERROR } from '../../../actions/CourseAction';
import { call, takeEvery, put } from 'redux-saga/effects';
import { get_Course } from '../../api/home/course/CourseAPI';


function* getCourse(action) {
    const response = yield get_Course();
    try {
        // kiem tra xem co goi dc api ko 
        if (response !== undefined && response !== null) {
            if (response.resultCode === 1) {
                //thanh cong sẽ put về
                console.log('getCourseSaga => Success',);
                yield put({ type: GET_COURSE_SUCCESS, response })
            } else {
                //truong hợp này gọi tới sever bi sever báo lỗi về
                console.log('getCourseSaga => ',response.message);
                yield put({ type: GET_COURSE_ERROR, error: response.message })
            }
        } else {
            //Đôi khi api lỗi , sever ko trả dữ liệu vè
            console.log('getCourseSaga => ',message);
            const message = "Có lỗi xảy ra, không thể kết nối tới sever"
            yield put({ type: GET_COURSE_ERROR, error: message })
        }
    } catch (error) {
        const message = "Có lỗi xảy ra, không thể kết nối tới sever"
        console.log('getCourseSaga => ',message);
        yield put({ type: GET_COURSE_ERROR, error: message })
    }

}

export function* watchCourse() {
    yield takeEvery(GET_COURSE, getCourse);
}