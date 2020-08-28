import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components';

const Splash = ({navigation}) => {
  return (
    <View>
      <Text>awe</Text>
      <Button click={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
