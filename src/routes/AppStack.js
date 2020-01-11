
/* app navigation 🚊 .. */

import { createStackNavigator } from 'react-navigation-stack';
import { Home, Show, AddShow, Add, ModelDetails } from '../screens';



const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      }
    },
    Show: {
      screen: Show,
      navigationOptions: {
        title: 'Show'
      }
    },
    AddShow: {
      screen: AddShow,
      navigationOptions: {
        title: 'AddShow'
      }
    },
    Add: {
      screen: Add,
      navigationOptions: {
        title: 'Add'
      }
    },
    ModelDetails: {
      screen: ModelDetails,
      navigationOptions: {
        title: 'ModelDetails'
      }
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);


export { AppStack };