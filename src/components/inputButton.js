import React, { Component } from 'react';
import { Text,View,TextInput,Button } from 'react-native';
import { Provider, connect } from 'react-redux';
//import reducer from './src/store/reducers/user';

class InputButton extends Component{
  constructor(props){
    super(props);
    this.saveUser = this.saveUser.bind(this)
  }

  saveUser(e){
    e.preventDefault();
    console.log("####",this.props)
  }

  render(){
    return(
      <Button
      title="save user"
      color="blue"
       />
    )
  }
}

// const mapStateToProps = (state) => {
//     return state;
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         // saveuser: () => {
//         //     dispatch(reducer("sada",{type:"SET_USER"}));
//         // }
//     }
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(InputButton);

export default InputButton
