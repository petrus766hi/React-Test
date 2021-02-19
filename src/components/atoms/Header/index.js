import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Back} from '../../../assets/icons/Footer/index';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const Header = ({title, navigation, isIcon, type}) => {
  const styl = () => {
    if (type === 'Cart') {
      return {width: Width, height: Height / 15, backgroundColor: '#356AA0'};
    } else {
      return {width: Width, height: Height / 8, backgroundColor: '#356AA0'};
    }
  };
  return (
    <View style={styl()}>
      {isIcon ? null : (
        <TouchableOpacity
          style={{position: 'absolute', marginTop: 10, marginLeft: 10}}
          onPress={() => navigation.goBack()}>
          <Image
            style={{
              width: 20,
              marginTop: 10,
              height: 20,
              resizeMode: 'contain',
            }}
            source={Back}
          />
        </TouchableOpacity>
      )}
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 24,
          alignSelf: 'center',
          marginTop: 15,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
