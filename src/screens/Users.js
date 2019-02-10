import React, { Component } from 'react';
import { Text } from 'react-native';

class Users extends Component {
  handlePress = () => {
    this.props.navigator.push({
      screen: 'LandingScreen',
      title: 'LandingScreen',
    });
  };

  render() {
    return (
      <Text>Users page</Text>
    );
  }
}

export default Users;
