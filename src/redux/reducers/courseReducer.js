import * as courseActions from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(prevState = initialState.courses, action) {
    switch (action.type) {
        case courseActions.CREATE_COURSE:
            return [...prevState, { ...action.course }];
        case courseActions.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return prevState;
    }
}