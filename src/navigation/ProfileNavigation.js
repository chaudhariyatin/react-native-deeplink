import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Settings from '../screens/Settings';
import BottomTabsNavigator from './BottomTabsNavigator';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';

const ProfileNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileNav"
        options={{headerShown: false}}
        component={Profile}
      />

      <Stack.Screen
        name="Settings"
        options={{
          headerShown: true,
        }}
        component={Settings}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
