import { GET_COURSE_SUCCESS, GET_COURSE_ERROR } from "../../actions/CourseAction";

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const courseReducers = (course = initialState, action) => {
    try {
        switch (action.type) {
            case GET_COURSE_SUCCESS:
                console.log('Reducers => get successful')
                return {
                    ...action.response,
                    isfetching: true,
                }
            case GET_COURSE_ERROR:
                console.log('Reducers => get successful')
                return action.response ? action.response.isSuccess : -1;
            default:
                return course;
        }
    } catch (error) {
        console.log('catch: ', error)
        return course;
    }
}
export default courseReducers;