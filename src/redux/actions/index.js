import {
    POST_LOGIN,
    GET_BUILDING_ROOM,

} from './actionTypes';
import { POST_COURSE, GET_COURSE, DELETE_COURSE, UPDATE_COURSE } from './CourseAction';
import { GET_LESSON, POST_LESSON, UPDATE_LESSON, DELETE_LESSON, } from './LessonAction';




//////////////////LOGIN//////////////////////
export const loginAction = (user, password) => {
    return {
        type: POST_LOGIN,
        data: { user, password }
    }
}
//////////////////COURSE//////////////////////
export const getCourseAction = () => {
    return {
        type: GET_COURSE,
    }
}

export const postCourseAction = (newCourse) => {
    return {
        type: POST_COURSE,
        data: { newCourse }
    }
}

export const editCourseAction = (updateCourse) => {
    return {
        type: UPDATE_COURSE,
        data: { updateCourse },

    }
}
export const deleteCourseAction = (courseId) => {

    return {
        type: DELETE_COURSE,
        data: { courseId },
    }
}
//////////////////GET BUIDING ROOM//////////////////////
export const getBuildingRoom = () => {
    console.log('nodag chay')
    return {
        type: GET_BUILDING_ROOM,
    }

}
//////////////////LESSON//////////////////////
export const getLessonAction = () => {
    return {
        type: GET_LESSON,
    }
}

export const postLessonAction = (newLesson) => {
    return {
        data: { newLesson },
        type: POST_LESSON,
    }
}

export const editLessonAction = (updateLesson) => {
    return {
        type: UPDATE_LESSON,
        data: { updateLesson },

    }
}
export const deleteLessonAction = (classId) => {

    return {
        type: DELETE_LESSON,
        data: { classId },
    }
}