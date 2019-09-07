import * as courseActions from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourses(course) {
    return { type: courseActions.CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses){
    return  {type: courseActions.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses(){
    return function (dispatch){
        return courseApi.getCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        })
        .catch(exception => {
            throw exception;
        })
    }
}