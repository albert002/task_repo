/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './src/store/reducers/user';
// import UserList from './src/store/actions/saveUser';
import thunk from 'redux-thunk';
import action from './src/store/actions/saveUser'

const store = createStore(reducer,applyMiddleware(thunk));
//store.dispatch(action)
//console.log("This is our store @@@",store.getState())

//import Screens
import LandingScreen from './src/screens/Landing';
import Users from './src/screens/Users';

//import store
const createApp = (Mycomponent,...props) => {
  return class App extends Component{
    render(){
      return(
        <Provider store={store}>
          <Mycomponent {...{
              ...this.props,
              ...props,
            }} />
        </Provider>
        )
    }
  }
}

//Register Screens
//export default () =>{
Navigation.registerComponent("LandingScreen", () => createApp(LandingScreen),store,Provider);
Navigation.registerComponent("Users", () => createApp(Users),store,Provider);

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'LandingScreen',
      icon: require('./src/images/icon1.png'),
      selectedIcon: require('./src/images/icon1_selected.png'),
      title: 'LandingScreen'
    },
    {
      label: 'Two',
      screen: 'Users',
      icon: require('./src/images/icon2.png'),
      selectedIcon: require('./src/images/icon2_selected.png'),
      title: 'Users'
    }
  ]
});
//}
