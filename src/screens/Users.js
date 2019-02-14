import React, { Component } from 'react';
import { Text ,View,Button} from 'react-native';
import { Provider, connect } from 'react-redux';
import deluser from '../store/actions/deluser';
import DelButton from '../components/DelButton';

class Users extends Component {
  constructor(props){
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }
  handlePress = () => {
    this.props.navigator.push({
      screen: 'LandingScreen',
      title: 'LandingScreen',
    });
  };
  deleteUser(id){
    console.log("deleting the id",id)
    this.props.deluser(id)
  }

  render() {
    return (
      <View>
        {
          this.props.users.map((user ,i)=>{
            return(
              <View>
                <Text key={i}>{user.name + " " + user.lastname}</Text>
                <DelButton myFunc={this.deleteUser} id={i}/>
              </View>
            )
          })
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
    deluser: (a) => {
      dispatch(deluser(a))
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Users)
