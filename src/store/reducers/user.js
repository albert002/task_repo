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
        console.log("DELETED user with id" , action.id);
        console.log("user data\n",action.id,action.name,action.lastname)
        //check equality
        //const newState = state.filter( action.id => action.id !== action.id );
        return [...state];
        break;
    default:
      return [...state];
  }
}
