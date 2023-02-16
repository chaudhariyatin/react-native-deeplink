import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
        }}>
        Home
      </Text>

      <Button
        title="Go to Feed"
        color={'#e91e63'}
        onPress={() => {
          navigation.navigate('Feed');
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
