/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import linking from './src/navigation/linking/linking';
import MainNavigation from './src/navigation/MainNavigation';
import {navigationRef} from './src/navigation/RootNavigation';
const App = () => {
  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <MainNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
