import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Dashboard from './pages/Dasboard';

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Login: {
        screen: Login,
      },
      Dashboard: {
        screen: Dashboard,
      },
    },
  ),
);

export default AppNavigator;
