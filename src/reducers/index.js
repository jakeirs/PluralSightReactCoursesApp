/** Root reducer */

import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

/**Shorthand property name {course: course} */
const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;

/** When you added new reducer to RootReducer, we need to go back to entry point ./src/index.js
 * of our app and we need to dispatch loadAuthor as well*/