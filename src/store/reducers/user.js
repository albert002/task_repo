import {SET_USER} from '../actions/actionTypes';

export default function reducer(state = { users: ["test"] }, action) {
  console.log('*****',action)
  switch (action.type) {
    case SET_USER:
      return { ...state, "payload"};
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
