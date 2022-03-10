
import { POST_LESSON, POST_LESSON_SUCCESS, POST_LESSON_ERROR } from '../../actions/LessonAction';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const postLessonReducers = (state = initialState, action) => {

    switch (action.type) {
        case POST_LESSON:
            return {
                loading: true,
                data: null,
                error: null,
            };
        case POST_LESSON_SUCCESS:
            return {
                loading: false,
                data: action.response,
                error: null,
            };
        case POST_LESSON_ERROR:
            return {
                loading: false,
                data: null,
                error: action.error,
            };

        default:
            return state;
    }
}

export default postLessonReducers;