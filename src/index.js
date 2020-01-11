
/* root naviagtion file 🚊 .. */

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppStack, AuthStack } from './routes';
import { AuthLoading } from './screens';



const root = createSwitchNavigator(
  {
    Starter: AuthLoading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Starter'
  }
);


export default createAppContainer(root) ;