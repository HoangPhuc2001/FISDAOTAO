import React from "react";

import { connect } from "react-redux";
import InsertCourse from "../../../components/home/course/InsertCourse";
import { getBuildingRoom,postCourseAction,getCourseAction } from "../../../redux/actions/index";



class InsertCourseContainer extends React.Component {
    render() {
        return <InsertCourse {...this.props} />;

    }
}

const mapStateToProps = (state) => {

    return {
        buildingRoom: state.buildingReducers,
        postCourse: state.postCourseReducers.data,
        error: state.postCourseReducers.error,
        Course: state.courseReducers,

    }
};

const mapDispatchToProps = (dispatch) => {
    console.log('runmap')
    return {
        getBuildingRoom: () => {
            dispatch(getBuildingRoom())
        },

        postCourseAction: (newCourse) => { 
            dispatch(postCourseAction(newCourse))
        }
        ,
        getCourseAction: () => {
            dispatch(getCourseAction());
        },

    }
}
export default InsertCourseContainer = connect(mapStateToProps, mapDispatchToProps)(InsertCourseContainer);
