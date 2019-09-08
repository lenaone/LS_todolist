import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MenuDrawer from './MenuDrawer';
import TodoMain from './TodoMain';
import About from './About';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.50,
  drawerPosition: 'left',
  contentComponent: ({ navigation }) => {
    return (<MenuDrawer navigation={navigation} />)
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TodoMain,
    },
    About: {
      screen: About,
    }
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);