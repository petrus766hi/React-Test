import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({click}) => {
  return (
    <TouchableOpacity onPress={click}>
      <Text>klik disini</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
