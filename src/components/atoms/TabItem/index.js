import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {fonts, colors} from '../../../utils';
import {Gap} from '..';
import {
  HomeActive,
  HomeInactive,
  EditActive,
  EditInactive,
  CalendarActive,
  CalendarInactive,
  AccountActive,
  AccountInactive,
} from '../../../assets/icons';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Dashboard') {
      return active ? (
        <Image source={HomeActive} style={styles.image} />
      ) : (
        <Image source={HomeInactive} style={styles.image} />
      );
    }
    if (title === 'Process') {
      return active ? (
        <Image source={EditActive} style={styles.image} />
      ) : (
        <Image source={EditInactive} style={styles.image} />
      );
    }
    if (title === 'Schedule') {
      return active ? (
        <Image source={CalendarActive} style={styles.image} />
      ) : (
        <Image source={CalendarInactive} style={styles.image} />
      );
    }
    if (title === 'Account') {
      return active ? (
        <Image source={AccountActive} style={styles.image} />
      ) : (
        <Image source={AccountInactive} style={styles.image} />
      );
    }
    return <Image source={HomeActive} style={styles.image} />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Gap height={2} />
      <Text style={styles.title(active)}> {title} </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
  container: {
    alignItems: 'center',
  },
  title: (active) => ({
    fontSize: 10,
    // fontFamily: fonts[600],
    color: active ? colors.text.green : colors.text.darkgrey,
    lineHeight: 14,
  }),
});
