import { DELETE_COURSE, DELETE_COURSE_SUCCESS, DELETE_COURSE_ERROR } from "../../actions/CourseAction";

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const deleteCourseReducer = (state = initialState, action) => {

    switch (action.type) {
        case DELETE_COURSE:
            return {
                loading: true,
                data: null,
                error: null,
            };
        case DELETE_COURSE_SUCCESS:
            return {
                loading: false,
                data: action.response,
                error: null,
            };
        case DELETE_COURSE_ERROR:
            return {
                loading: false,
                data: null,
                error: action.error,
            };

        default:
            return state;
    }
}
export default deleteCourseReducer;