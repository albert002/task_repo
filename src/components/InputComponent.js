import React, { Component } from 'react';
import { Text,View,TextInput,Button } from 'react-native';
import { Provider, connect } from 'react-redux';
import reducer from '../store/reducers/user';


class InputComponent extends Component {
  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter your name"
         />
         <TextInput
           placeholder="Enter your lastname"
          />
          <Text>{this.props.users.users}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        users:state
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    a: () => {
      dispatch({type:"SET_USER"})
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent)
