import React, { Component } from 'react';
import { Text, View,Button } from 'react-native';
import InputComponent from '../components/InputComponent'
import { Provider, connect } from 'react-redux';
import InputButton from '../components/inputButton'
import { Navigation } from 'react-native-navigation';
import setuser from '../store/actions/saveUser';
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
  handlePress(data){
    this.props.navigator.push({
      screen: 'Users',
      title: 'Users'
    });

    this.props.setuser({ name:data[0],lastname:data[1]})
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
               <InputComponent myFunc={this.handlePress}/>
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

const mapDispatchToProps = dispatch => {
  return {
    setuser: (a) => {
      dispatch(setuser(a))
    }
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(Landing)
