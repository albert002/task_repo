import {SET_USER} from '../actions/actionTypes';

export default function reducer(state = { users: [{name:"AAA",lastname:"BBB"}] }, action) {
  switch (action.type) {
    case SET_USER:
    state.users.push({name:action.name,lastname:action.lastname})
      return { ...state};
    default:
      return state;
  }
}

// export function listUsers(user) {
//   return {
//     type: SET_USER,
//     payload: "TEST"
//   };
// }
