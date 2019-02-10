import React, { Component } from 'react';
import { Text,View,TextInput,Button } from 'react-native';

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
          <Button
          title="save user"
          color="blue"
           />
      </View>
    );
  }
}

export default InputComponent;
