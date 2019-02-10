import {SET_USER} from '../actions/actionTypes';

export default function reducer(state = { users: [] }, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, loading: true };
    default:
      return state;
  }
}

export function listUsers(user) {
  return {
    type: SET_USER,
    payload: "TEST"
  };
}
