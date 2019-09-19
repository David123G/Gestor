import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './HomeScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen}
});

const App = createAppContainer(MainNavigator);

export default App;

/*import {createStackNavigator} from'react-navigation';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen'

const stackConfig = {
  Menu:{
    screen:HomeScreen,
    navigationOptions:{
      header:null
    }
  }
}
const AppNavigator = createStackNavigator(stackConfig,{
  initialRouteName:'Menu'
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer*/