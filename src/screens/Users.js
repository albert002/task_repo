import React, { Component } from 'react';
import { Text ,View} from 'react-native';
import { Provider, connect } from 'react-redux';

class Users extends Component {
  constructor(props){
    super(props);
  }
  handlePress = () => {
    this.props.navigator.push({
      screen: 'LandingScreen',
      title: 'LandingScreen',
    });
  };

  render() {
    return (
      <View>
        {
          this.props.users.map((user)=>{
            return(
              <View>
                <Text key={user.id}>{user.name + " " + user.lastname}</Text>
              //  <Button />
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


export default connect(mapStateToProps, null)(Users)
