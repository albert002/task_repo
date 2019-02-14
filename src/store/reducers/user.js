import {SET_USER} from '../actions/actionTypes';
export default function reducer(state = { user: {name:"AAA",lastname:"BBB"} }, action) {
  switch (action.type) {
    case SET_USER:
      return [
        ...state,
        {
          name:action.name,
          lastname:action.lastname
        }
      ]
    default:
      return [...state];
  }
}
