export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      /*Here we copy deeply action.course and assign in object*/
      return [...state,
        Object.assign({}, action.course)
      ];

    default: 
      return state;  
  }
}