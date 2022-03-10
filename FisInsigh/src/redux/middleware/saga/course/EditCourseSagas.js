import { UPDATE_COURSE, UPDATE_COURSE_ERROR, UPDATE_COURSE_SUCCESS } from '../../../actions/CourseAction';


import { call, takeEvery, put, takeLatest } from 'redux-saga/effects';

import { editCourse } from '../../api/home/course/CourseAPI'


export function* editCourseFlow(action) {
    const { updateCourse } = action.data//dua theo action lay du lieu ra     
    //hoi ham post va truyen du lieu dau vao
    const response = yield editCourse(updateCourse)
    console.log(response.resultCode)

    try {
        if (response !== undefined && response !== null) {
            if (response.resultCode === 1) {
                alert(response.message);
                console.log('PutSaga => successful', response.resultCode)
                yield put({ type: UPDATE_COURSE_SUCCESS, response: response })
            }
            else {
                alert(response.message);
                console.log('PutSaga => get Failed')
                yield put({ type: UPDATE_COURSE_ERROR, error: response.message })
            }
        } else {
            console.log('PutSaga => ', message)
            const message = 'có lỗi xảy ra, server không phản hồi !!'
            yield put({ type: UPDATE_COURSE_ERROR, error: message });
        }
    }
    catch (error) {
        console.log('PutSaga => ', message)
        const message = "Có lỗi xảy ra , không kết nối được tới server !!";
        yield put({ type: UPDATE_COURSE_ERROR, error: message });
    }

}

export function* watchEditCourse() {
    yield takeEvery(UPDATE_COURSE, editCourseFlow);
}