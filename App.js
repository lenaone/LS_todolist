import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import DrawerNavigator from './components/DrawerNavigator'


class App extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default App;
