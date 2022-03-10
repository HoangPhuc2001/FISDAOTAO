
import React from 'react';

import { getCourseAction, deleteCourseAction, editCourseAction, getBuildingRoom } from "../../../redux/actions/index";
import CourseComponent from "../../../components/home/course/Course";
import { connect } from "react-redux";

class CourseContainer extends React.Component {
    render() {
        return <CourseComponent {...this.props} />;

    }
}

const mapStateToProps = state => {
    return {
        Course: state.courseReducers,
        buildingRoom: state.buildingReducers
        // deleteCourse: state.deleteCourseReducer.data,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCourseAction: () => {
            dispatch(getCourseAction());
        },
        deleteCourseAction: (courseId) => {
            dispatch(deleteCourseAction(courseId));
        },
        editCourseAction: (updateCourse) => {
            dispatch(editCourseAction(updateCourse));
        },
        getBuildingRoom: () => {
            dispatch(getBuildingRoom())
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer)