/** Root reducer */

import {combineReducers} from 'redux';
import courses from './courseReducer';
/**Shorthand property name {course: course} */
const rootReducer = combineReducers({
  courses
});

export default rootReducer;