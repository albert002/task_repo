import {SET_USER} from '../actions/actionTypes';
import {DEL_USER} from "../actions/actionTypes";
export default function reducer(state = { user: {name:"AAA",lastname:"BBB"} }, action) {
  switch (action.type) {
    case SET_USER:
      return [
        ...state,
        {
          id:action.id,
          name:action.name,
          lastname:action.lastname
        }
      ]
      break;
      case DEL_USER:
        console.log("Action id" , action.id);
        //check equality
        let newState = state.filter((user) => {
           return user.id !== action.id
        });
        return [...newState];
        break;
    default:
      return [...state];
  }
}
