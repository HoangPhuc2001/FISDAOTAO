
import { GET_BUILDING_ROOM, GET_BUILDING_ROOM_ERROR, GET_BUILDING_ROOM_SUCCESS } from "../../../actions/actionTypes";
import { call, takeEvery, put, takeLatest } from 'redux-saga/effects'
import { getBuildingRoom } from '../../api/home/BuildingApi'

function* getBuildingRoomFlow(action) {
    console.log('run saga')
    const response = yield getBuildingRoom();
    try {
        // kiem tra xem co goi dc api ko 
        if (response !== undefined && response !== null) {
            if (response.resultCode === 1) {
                //thanh cong sẽ put về
                yield put({ type: GET_BUILDING_ROOM_SUCCESS, response })
            } else {
                //truong hợp này gọi tới sever bi sever báo lỗi về
                console.log('error');
                yield put({ type: GET_BUILDING_ROOM_ERROR, error: response.message })
            }
        } else {
            console.log('api lỗi');
            //Đôi khi api lỗi , sever ko trả dữ liệu vè
            const message = "Có lỗi xảy ra, không thể kết nối tới sever"
            yield put({ type: GET_BUILDING_ROOM_ERROR, error: message })
        }
    } catch (error) {
        const message = "Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({ type: GET_BUILDING_ROOM_ERROR, error: message })
    }
}

export function* watchBuildingRoom() {
    yield takeEvery(GET_BUILDING_ROOM, getBuildingRoomFlow)
}