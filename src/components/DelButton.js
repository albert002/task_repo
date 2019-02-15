import React, { Component } from 'react';
import { Text,View,TextInput,Button } from 'react-native';
import { Provider, connect } from 'react-redux';
import reducer from '../store/reducers/user';


class deleteUser extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
          <Button title="DELETE" onPress={this.props.myFunc.bind(this,this.props.id)}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        users:state
    }
}

export default connect(mapStateToProps, null)(deleteUser)
