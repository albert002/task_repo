import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider, connect } from 'react-redux';

class Users extends Component {
  handlePress = () => {
    this.props.navigator.push({
      screen: 'LandingScreen',
      title: 'LandingScreen',
    });
  };

  render() {
    return (
      <Text>{this.props.users.users}</Text>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        users:state
    }
}


export default connect(mapStateToProps, null)(Users)
