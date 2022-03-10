import { POST_LESSON, POST_LESSON_SUCCESS, POST_LESSON_ERROR } from '../../../actions/LessonAction';


import { call, takeEvery, put, takeLatest } from 'redux-saga/effects';

import { postLesson } from '../../api/home/lesson/LessonApi'


function* postLessonFlow(action) {
    const { newLesson } = action.data
    const response = yield postLesson(newLesson)
    console.log(response.resultCode)

    try {
        if (response !== undefined && response !== null) {
            if (response.resultCode === 1) {
                console.log('PostSaga => successful', response.resultCode)
                yield put({ type: POST_LESSON_SUCCESS, response: response })
            }
            else {
                console.log('PostSaga => get Failed')
                yield put({ type: POST_LESSON_ERROR, error: response.message })
            }
        } else {
            console.log('PostSaga => ', message)
            const message = 'có lỗi xảy ra, server không phản hồi !!'
            yield put({ type: POST_LESSON_ERROR, error: message });
        }
    } catch (error) {
        console.log('PostSaga => ', message)
        const message = "Có lỗi xảy ra , không kết nối được tới server !!";
        yield put({ type: POST_LESSON_ERROR, error: message });
    }

}

export function* watchPostLesson() {
    yield takeEvery(POST_LESSON, postLessonFlow);
}