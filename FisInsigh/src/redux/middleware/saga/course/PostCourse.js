import { POST_COURSE, POST_COURSE_SUCCESS, POST_COURSE_ERROR } from '../../../actions/CourseAction';


import { call, takeEvery, put, takeLatest } from 'redux-saga/effects';

import { postCourse } from '../../api/home/course/CourseAPI'


export function* addCourse(action) {
  const { newCourse } = action.data//dua theo action lay du lieu ra     
  //hoi ham post va truyen du lieu dau vao
  const response = yield postCourse(newCourse)
  console.log(response.resultCode)

  try {
    if (response !== undefined && response !== null) {
      if (response.resultCode === 1) {
        console.log('PostSaga => successful', response.resultCode)
        yield put({ type: POST_COURSE_SUCCESS, response: response })
      }
      else {
        console.log('PostSaga => get Failed')
        yield put({ type: POST_COURSE_ERROR, error: response.message })
      }
    } else {
      console.log('PostSaga => ', message)
      const message = 'có lỗi xảy ra, server không phản hồi !!'
      yield put({ type: POST_COURSE_ERROR, error: message });
    }
  } catch (error) {
    console.log('PostSaga => ', message)
    const message = "Có lỗi xảy ra , không kết nối được tới server !!";
    yield put({ type: POST_COURSE_ERROR, error: message });
  }

}

export function* watchPostCourse() {
  yield takeEvery(POST_COURSE, addCourse);
}