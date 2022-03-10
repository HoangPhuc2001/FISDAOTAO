import { POST_LOGIN, SIGNIN_SUCCESS, SIGNIN_ERROR } from '../../../actions/actionTypes';


import { call, takeEvery, put ,takeLatest} from 'redux-saga/effects';

import { postLogin } from '../../api/login/LoginApi'


function* loginFlow(action) {
  const { user, password } = action.data

  try{
    const response = yield postLogin(user, password)
    
  
    if (response !== undefined && response !== null) {
      if (response.resultCode === 1) {
        console.log('response', response.resultCode)
        yield put({ type: SIGNIN_SUCCESS, response: response})
      }
      else {
        yield put({ type: SIGNIN_ERROR, error: response.message})
      }
    } else {
      const message ='có lỗi xảy ra, server không phản hồi !!'
      yield put({ type: SIGNIN_ERROR, error: message });
    }
  } catch (error) {
      const message = "Có lỗi xảy ra , không kết nối được tới server !!";
      yield put({ type: SIGNIN_ERROR, error: message});
  }
 
}

export function* watchLogin() {
  yield takeEvery(POST_LOGIN, loginFlow);
}