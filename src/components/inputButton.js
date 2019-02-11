import React, { Component } from 'react';
import { Text,View,TextInput,Button } from 'react-native';


class InputButton extends Component{
  constructor(props){
    super(props);
    this.saveUser = this.saveUser.bind(this)
  }

  saveUser(e){
    e.preventDefault();
    console.log("****",this.props.user.users.users);
    console.log("####",this.props)
  }

  render(){
    return(
      <Button
      title="save user"
      color="blue"
      //onPress={this.saveUser}
       />
    )
  }
}

export default InputButton;
