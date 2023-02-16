import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Settings from '../screens/Settings';
import BottomTabsNavigator from './BottomTabsNavigator';
import Feed from '../screens/Feed';

const MainNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        options={{headerShown: false}}
        component={BottomTabsNavigator}
      />

      <Stack.Screen
        name="Feed"
        options={{
          headerShown: true,
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
