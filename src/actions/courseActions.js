/* We can omit right-hand side matches in ES6 and write just {, courses}*/
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

/** This func is going to take a list of courses. */
export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

/** Thunk always return function*/
export function loadCourses() {
  return function(dispatch) {
    /** getAllCourses return promise */
    return courseApi.getAllCourses()
        .then(courses => {
          dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
          throw(error);
        });
  };
}

/** Naming conventions:
 * - loadCourses function
 * - loadCorsesSuccess --> Success is a suffix
 *
 * */