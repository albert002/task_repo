import React, { Component } from 'react';
import { Text ,View} from 'react-native';
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
      <View>
        <Text>{this.props.users.users}</Text>
        <Text>{this.props.users.users.name}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        users:state
    }
}


export default connect(mapStateToProps, null)(Users)
