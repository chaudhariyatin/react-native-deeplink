import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
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
        Profile
      </Text>
      <Button
        title="Go to Settings"
        color={'#e91e63'}
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
