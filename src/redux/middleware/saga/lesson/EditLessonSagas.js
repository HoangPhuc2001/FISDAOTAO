import { UPDATE_LESSON_SUCCESS, UPDATE_LESSON, UPDATE_LESSON_ERROR } from '../../../actions/LessonAction';

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { editLesson } from '../../api/home/lesson/LessonApi'

export function* watchEditLesson() {
    yield takeEvery(UPDATE_LESSON, editLessonFlow)
}
//tao ham goi api xem action truyen ve
export function* editLessonFlow(action) {
    const { updateLesson } = action.data//dua theo action lay du lieu ra 

    //hoi ham post va truyen du lieu dau vao
    const response = yield editLesson(updateLesson)
    console.log(response.resultCode)

    try {
        if (response !== undefined && response !== null) {
            if (response.resultCode === 1) {
                alert(response.message);
                console.log('putSaga => successful', response.resultCode)
                yield put({ type: UPDATE_LESSON_SUCCESS, response: response })
            }
            else {
                alert(response.message);
                console.log('putSaga => get Failed')
                yield put({ type: UPDATE_LESSON_ERROR, error: response.message })
            }
        } else {
            console.log('putSaga => ', message)
            const message = 'có lỗi xảy ra, server không phản hồi !!'
            yield put({ type: UPDATE_LESSON_ERROR, error: message });
        }
    }
    catch (error) {
        console.log('putSaga => ', message)
        const message = "Có lỗi xảy ra , không kết nối được tới server !!";
        yield put({ type: UPDATE_LESSON_ERROR, error: message });
    }

}
