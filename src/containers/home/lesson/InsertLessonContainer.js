import React from "react";

import { connect } from "react-redux";
import InsertLesson from "../../../components/home/lesson/InsertLesson";
import { getBuildingRoom, postLessonAction, getLessonAction } from "../../../redux/actions/index";



class InsertLessonContainer extends React.Component {
    render() {
        return <InsertLesson {...this.props} />;

    }
}

const mapStateToProps = (state) => {

    return {
        buildingRoom: state.buildingReducers,
        postLesson: state.postLessonReducers,


    }
};

const mapDispatchToProps = (dispatch) => {
    console.log('runmap')
    return {
        getBuildingRoom: () => {
            dispatch(getBuildingRoom())
        },

        postLessonAction: (newLesson) => {
            dispatch(postLessonAction(newLesson))
        },

        getLessonAction: () => {
            dispatch(getLessonAction());
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InsertLessonContainer);
