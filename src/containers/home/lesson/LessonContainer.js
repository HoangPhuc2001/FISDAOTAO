
import React from 'react';

import { getLessonAction, deleteLessonAction, editLessonAction,getBuildingRoom } from "../../../redux/actions/index";
import LessonComponent from "../../../components/home/lesson/Lesson";
import { connect } from "react-redux";

class LessonContainer extends React.Component {
    render() {
        return <LessonComponent {...this.props} />;

    }
}

const mapStateToProps = state => {
    return {
        Lesson: state.lessonReducers,
        buildingRoom: state.buildingReducers
        //deleteCourse: state.deleteLessonReducers.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLessonAction: () => {
            dispatch(getLessonAction());
        },
        deleteLessonAction: (classId) => {
            //console.log('container',courseId)
            dispatch(deleteLessonAction(classId))
        },
        editLessonAction: (updateLesson) => {
            dispatch(editLessonAction(updateLesson))
        },
        getBuildingRoom: () => {
            dispatch(getBuildingRoom())
        },

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer)