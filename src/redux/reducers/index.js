import { combineReducers } from 'redux';
import loginReducers from './login/loginReducers';
import courseReducers from './course/CourseReducers';
import buildingReducers from './lesson/BuildingReducers';
import postCourseReducers from './course/PostCourseReducers';
import deleteCourseReducers from './course/DeleteCourseReducers';
import editCourseReducers from './course/EditCourseReducer';
import postLessonReducers from './lesson/PostLessonReducers';
import lessonReducers from './lesson/LessonReducers';
import updateLessonReducers from './lesson/EditLessonReducers';
import deleteLessonReducers from './lesson/DeleteLessonReducers';



const allReducers = combineReducers({
    
    loginReducers,
    courseReducers,
    buildingReducers,
    postCourseReducers,
    deleteCourseReducers,
    postLessonReducers,
    lessonReducers,
    updateLessonReducers,
    deleteLessonReducers,
    editCourseReducers,
    
});

export default allReducers;