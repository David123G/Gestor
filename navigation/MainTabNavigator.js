import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import loginscreen from '../screens/index';
import HomeScreen from '../screens/HomeScreen';
import NewUser from '../screens/NuevoPermiso';
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
  tabBarLabel: 'Historial',
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

///////////////////////////////////////////////////////////////////////////////////////

const NuevoUser = createStackNavigator(
  {
    Links: NewUser,
  },
  config
);

NuevoUser.navigationOptions = {
  tabBarLabel: 'Nuevo permiso',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

NuevoUser.path = '';



///////////////////////////////////////////////////////////////////////////////////////


const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Nuevo usuario',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

///////////////////////////////////////////////////////////////////////////////////////
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  nuevo,
  login,
  NuevoUser,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
