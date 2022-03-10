import { all } from 'redux-saga/effects';

import { watchLogin } from './login/loginSagas';
import { watchCourse } from './course/CourseSaga';
import { watchPostCourse } from './course/PostCourse';
import { watchDeleteCourse } from './course/DeleteCourse';
import { watchEditCourse } from './course/EditCourseSagas';
import { watchBuildingRoom } from './home/BuildingSagas';
import { watchLesson } from './lesson/LessonSagas';
import { watchPostLesson } from './lesson/PostLessonSagas';
import { watchDeleteLesson } from './lesson/DeleteLessonSagas';
import { watchEditLesson } from './lesson/EditLessonSagas';

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchBuildingRoom(),
        watchCourse(),
        watchPostCourse(),
        watchDeleteCourse(),
        watchEditCourse(),
        watchLesson(),
        watchPostLesson(),
        watchDeleteLesson(),
        watchEditLesson(),

    ]);
}