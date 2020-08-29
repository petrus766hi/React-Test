import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components';
const Login = ({navigation}) => {
  return (
    <View>
      <Text>login screen</Text>
      <Button click={() => navigation.navigate('mainApp')} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
