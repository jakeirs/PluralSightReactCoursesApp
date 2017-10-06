import * as types from '../actions/actionTypes';

/** This reducer handles the LOAD_COURSES_SUCCESS action */
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        default:
            return state;
    }
}