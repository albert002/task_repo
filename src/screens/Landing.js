import React, { Component } from 'react';
import { Text, View,Button } from 'react-native';
import InputComponent from '../components/InputComponent'
import { Provider, connect } from 'react-redux';

class Landing extends Component {
  constructor(props){
    super(props);
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
             console.log(store)
           :
           <Text>Press add to start</Text>
         }
      </View>
      </Provider>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        type: 'SET_USER'
    }
}


export default connect(mapStateToProps, null)(Landing)
