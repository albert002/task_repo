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
//import axios from 'axios';
//import axiosMiddleware from 'redux-axios-middleware';

import reducer from './src/reducers/user';
import UserList from './src/actions/saveUser'

const store = createStore(reducer);

//import Screens
import LandingScreen from './src/screens/Landing';
import Users from './src/screens/Users';

//import store

//import store from './src/store/configureStore';

//Register Screens
//export default () =>{
Navigation.registerComponent("LandingScreen", () => LandingScreen,store,Provider);
Navigation.registerComponent("Users", () => Users);

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
