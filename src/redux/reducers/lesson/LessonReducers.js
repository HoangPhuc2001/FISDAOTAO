import { GET_LESSON_SUCCESS, GET_LESSON_ERROR } from "../../actions/LessonAction";

const initialState = {
    loading: false,

}

const lessonReducers = (state = initialState, action) => {
    try {
        switch (action.type) {
            case GET_LESSON_SUCCESS:
                return {
                    ...action.response,
                    isfetching: true,
                }
            case GET_LESSON_ERROR:
                return action.response ? action.response.isSuccess : -1;
            default:
                return state;
        }
    } catch (error) {
        console.log('catch: ', error)
        return state;
    }
}
export default lessonReducers;