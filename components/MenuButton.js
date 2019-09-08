import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class MenuButton extends Component {
  render() {
    return (
      <Icon
        name="md-menu"
        size={35}
        style={styles.menuIcon}
        color="white"
        onPress={() => this.props.navigation.toggleDrawer()} />
    );
  }
}

const styles = StyleSheet.create({
  menuIcon: {
    top: 15,
    left: 15
  }
})

export default MenuButton;
