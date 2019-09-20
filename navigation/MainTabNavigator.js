import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import joda from '../screens/navegacion';
import loginscreen from '../screens/index';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import nuevo_usuario from '../screens/nuevousuario';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
////////////////////////////////////////////////////////////////////////////////
const HomeStack = createStackNavigator(
  {
    inicio: loginscreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

//////////////////////////////////////////////////////////////////////////////
const nuevo = createStackNavigator(
  {
    NuevoUsuario: nuevo_usuario,
  },
  config
);

nuevo.navigationOptions = {
  tabBarLabel: 'NuevoUsuario',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'
      }
    />
  ),
};

nuevo.path = '';
//////////////////////////////////////////////////////////////////////////////
const login = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

login.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};
login
login.path = '';


const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  nuevo,
  login,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
