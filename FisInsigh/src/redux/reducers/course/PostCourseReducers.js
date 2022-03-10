
import { POST_COURSE,POST_COURSE_SUCCESS, POST_COURSE_ERROR } from '../../actions/CourseAction';

const innitState = {
    loading: false,
    data: null,
    error: null,
}
const postCourseReducers = (state = innitState, action) => {

    switch (action.type) {
        case POST_COURSE:
            return {
                loading: true,
                data: null,
                error: null,
            };
        case POST_COURSE_SUCCESS:
            return {
                loading: false,
                data: action.response,
                error: null,
            };
        case POST_COURSE_ERROR:
            return {
                loading: false,
                data: null,
                error: action.error,
            };
            
        default:
            return state;
    }
}
export default postCourseReducers