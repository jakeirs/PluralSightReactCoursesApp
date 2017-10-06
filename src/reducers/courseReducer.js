import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      /*Here we copy deeply action.course and assign in object*/
      debugger;
      return [...state,
        Object.assign({}, action.course)
      ];

    default: 
      return state;  
  }
}