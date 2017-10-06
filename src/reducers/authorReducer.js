import * as types from '../actions/actionTypes';
import initialState from './initialState';

/** This reducer handles the LOAD_COURSES_SUCCESS action */
export default function AuthorReducer(state = initialState.authors, action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.author;

        default:
            return state;
    }
}

/** Right now our initial state is empty array.
 *  But we're going to centralize our initial state in a single place */

/** Since we've created a new reducer, we need to add to our rootReducer
 */