import React, { Component } from 'react';
import { Text, View,Button } from 'react-native';
import InputComponent from '../components/InputComponent'

class Landing extends Component {
  constructor(){
    super();
    this.state = {
      inputFields:""
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Users',
      title: 'Users',
    });
  };

  handleClick(e){
    e.preventDefault();
    this.setState({inputFields:"clicked"})
  }

  render() {
    return (
      <Provider store={store}>
      <View>
        <Button
          title="Add Fields"
          color="blue"
          onPress={this.handleClick}
         />
         {
           this.state.inputFields === "clicked"?
             <InputComponent/>
           :
           <Text>Press add to start</Text>
         }
      </View>
      </Provider>
    );
  }
}

export default Landing;
