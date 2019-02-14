import React, { Component } from 'react';
import { Text,View,TextInput,Button } from 'react-native';
import { Provider, connect } from 'react-redux';
import reducer from '../store/reducers/user';


class InputComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:0,
      username:"name",
      lastname:"lastname"
    }
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter your name"
          onChangeText={(el) => this.setState({username: el})}
         />
         <TextInput
           placeholder="Enter your lastname"
           onChangeText={(ln) => this.setState({lastname: ln})}
          />
          <Button title="ADD" onPress={this.props.myFunc.bind(this,[this.state.username,this.state.lastname,this.state.id])}/>
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
