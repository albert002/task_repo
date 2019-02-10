import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

//import reducers

import indexReducer from './reducers/user';

const rootReducer = combineReducers({
  index:indexReducer
})
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk))
}
const store = configureStore();

export default store;
