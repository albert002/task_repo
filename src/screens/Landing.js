import React, { Component } from 'react';
import { Text, View,Button } from 'react-native';
import InputComponent from '../components/InputComponent'
import { Provider, connect } from 'react-redux';
import InputButton from '../components/inputButton'
import { Navigation } from 'react-native-navigation';
import {SET_USER} from '../store/actions/actionTypes';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputFields:""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(){
    this.props.navigator.push({
      screen: 'Users',
      title: 'Users',
    });
    //console.log("****",this.props.user.users.users);
    //console.log("####",this.props)
  };

  handleClick(e){
    e.preventDefault();
    this.setState({inputFields:"clicked"})
  }

  render() {
    return (
      <View>
        <Button
          title="Add Fields"
          color="blue"
          onPress={this.handleClick}
         />
         {
           this.state.inputFields === "clicked"?(
             <View>
               <InputComponent />
               <Button
                 title="Save user"
                 onPress = {this.handlePress}
               />

             </View>
           )
           :
           <Text>Press add to start</Text>
         }


      </View>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        users:state
    }
}




export default connect(mapStateToProps, null)(Landing)
