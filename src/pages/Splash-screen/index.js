import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components';

const Splash = ({navigation}) => {
  useEffect(() => {
    console.log('awe');
  }, []);
  return (
    <View>
      <Text>Splash screen</Text>
      <Button click={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
