import { GET_BUILDING_ROOM_ERROR, GET_BUILDING_ROOM_SUCCESS } from "../../actions/actionTypes";

const initialStale = {
    data: null,
    error: null,
};
const buildingReducers = (state = initialStale, action) => {
    try {
        switch (action.type) {
            case GET_BUILDING_ROOM_SUCCESS:
                console.log("run reducers" + action.response.data)
                console.log(action.response.data);
                return {
                    data: action.response.data,
                    error: null,
                }
            case GET_BUILDING_ROOM_ERROR:
                console.log(action.error)
                return {
                    data: null,
                    error: action.error,
                }
            default:
                return state
        }
    } catch (error) {
        console.log('catchBuilding: ', error)
        return state;
    }
}
export default buildingReducers;
