
import { DELETE_LESSON_SUCCESS, DELETE_LESSON_ERROR,DELETE_LESSON } from "../../actions/LessonAction";

//reduccer dua theo ben saga
//saga tra ve action nao thi reduccer dua vao de tra ve du lieu do
const innitState = {
    loa1: false
}
const deleteLessonReducers = (state = innitState, action) => {

    switch (action.type) {
        case DELETE_LESSON:
            return {
                loading: true,
                data: null,
                error: null,
            };
        case DELETE_LESSON_SUCCESS:
            return {
                loading: false,
                data: action.response,
                error: null,
            };
        case DELETE_LESSON_ERROR:
            return {
                loading: false,
                data: null,
                error: action.error,
            };

        default:
            return state;
    }
}
export default deleteLessonReducers
