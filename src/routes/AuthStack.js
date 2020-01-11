
/* app navigation 🚊 .. */

import { createStackNavigator } from 'react-navigation-stack';
import { AuthHome, Login, Register } from '../screens';



const AuthStack = createStackNavigator(
  {
    AuthHome: {
      screen: AuthHome,
      navigationOptions: {
        title: 'AuthHome',
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title: 'Register',
      }
    }
  },
  {
    initialRouteName: 'AuthHome',
    headerMode: 'none'
  }
);


export { AuthStack };