import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listUsers } from '../reducers/user';


class UserList extends Component{
  componentDidMount(){
    this.props.listUsers("ME")
  }
  renderItem = ({ item }) => (
   <View style={styles.item}>
     <Text>{item.name}</Text>
   </View>
 );
 render() {
  const { users } = this.props;
  return (
    <FlatList
      styles={styles.container}
      data={users}
      renderItem={this.renderItem}
    />
  );
}
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  let storedUsers = state.repos.map(user => ({ ...user }));
  return {
    users: storedUsers
  };
};

const mapDispatchToProps = {
  listUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
