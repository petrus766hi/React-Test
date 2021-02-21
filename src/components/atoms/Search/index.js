import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Badge} from 'native-base';
import {Searchs, Union} from '../../../assets';

import Icon from 'react-native-vector-icons/FontAwesome';
const height = Dimensions.get('screen').height;

const Search = ({text, onChangeText, click, navigation, cartlength}) => {
  return (
    <View style={{marginVertical: '1%'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>{text}</Text>
        <View></View>
        <TouchableOpacity
          style={{
            top: -(height * 0.07),
            marginRight: 6,
          }}
          onPress={() => navigation.navigate('Cart')}>
          {cartlength ? (
            <Badge style={styles.badge}>
              <Text>{cartlength}</Text>
            </Badge>
          ) : null}
          <Icon name="shopping-cart" size={30} color={'white'} />
        </TouchableOpacity>
      </View>

      <View style={styles.boxSearch}>
        <Image source={Searchs} style={styles.imgSearch} />
        <TextInput style={{flex: 1}} onChangeText={(e) => onChangeText(e)} />
        <TouchableOpacity onPress={() => null} style={styles.filterimg}>
          <Image
            source={Union}
            style={{resizeMode: 'contain', height: 30, alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  color: {
    backgroundColor: '#356AA0',
    color: 'white',
    height: 100,
    width: '100%',
  },
  text: {
    color: 'white',
    top: -50,
    position: 'absolute',
    top: -(height * 0.06),
  },
  imgSearch: {width: 25, height: 25, alignSelf: 'center'},
  boxSearch: {
    height: 45,
    backgroundColor: 'white',
    elevation: 5,
    marginTop: -(height * 0.06),
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: '5%',
  },
  boxCard: {
    height: 100,
    backgroundColor: 'white',
    elevation: 5,
    marginBottom: 20,
    marginHorizontal: '5%',
    borderRadius: 10,
    paddingLeft: 20,
  },

  icon: {
    width: 12,
    height: 20,
    marginTop: 5,
  },
  filterimg: {width: 10, alignContent: 'center', alignSelf: 'center'},
  badge: {
    width: 25,
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    top: -10,
    right: -10,
    zIndex: 1,
  },
});
