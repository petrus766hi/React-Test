import React from 'react';
import {Image, StyleSheet, Text, View,} from 'react-native';
import {Button} from '../../components';
import {Logo} from '../../assets'


const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'blue',  alignSelf:'center'}}>
        <Image source={Logo} style={{width: 150, height: 150, resizeMode:'center'}}/>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    flex: 1,
    justifyContent:'center'
  }
});
