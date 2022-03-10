
import { UPDATE_LESSON_SUCCESS, UPDATE_LESSON_ERROR, UPDATE_LESSON } from "../../actions/LessonAction";


//reduccer dua theo ben saga
//saga tra ve action nao thi reduccer dua vao de tra ve du lieu do
const innitState = {
    loading: true,
    data: null,
    error: null,
}
const updateLessonReducers = (state = innitState, action) => {

    switch (action.type) {
        case UPDATE_LESSON:
            return {
                loading: true,
                data: null,
                error: null,
            };
        case UPDATE_LESSON_SUCCESS:
            return {
                loading: false,
                data: action.response,
                error: null,
            };
        case UPDATE_LESSON_ERROR:
            return {
                loading: false,
                data: null,
                error: action.error,
            };

        default:
            return state;
    }
}
export default updateLessonReducers
