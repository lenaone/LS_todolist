import React, { Component } from 'react';
import { Dimensions, Text, View, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';

class MenuDrawer extends Component {

  navLink(nav, text) {
    return (
      < TouchableOpacity style={{ height: 50 }
      } onPress={() => { this.props.navigation.navigate(nav) }}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity >

    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this.navLink('Home', 'Home')}
        {this.navLink('About', 'About')}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#db3d44'
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    marginTop: 5,
    textAlign: 'left',
    color: 'white',
    fontFamily: 'ShadowsIntoLight'
  },
  homeIcon: {
    marginTop: 12,
    marginLeft: 10
  },
  home: {
    flexDirection: 'row',
    textAlign: 'center'
  }
})

export default MenuDrawer;