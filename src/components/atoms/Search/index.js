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
import {search, Union} from '../../../assets';

const height = Dimensions.get('screen').height;

const Search = ({text, onChangeText, click, navigation}) => {
  return (
    <View style={{marginVertical: '1%'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>{text}</Text>
        <View></View>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 80,
            padding: 5,
            borderRadius: 15,
            top: -(height * 0.05),
          }}
          onPress={() => navigation.navigate('Cart')}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}>
            Cart
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxSearch}>
        <Image source={search} style={styles.imgSearch} />
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
    top: -(height * 0.05),
  },
  imgSearch: {width: 25, height: 25, alignSelf: 'center'},
  boxSearch: {
    height: 45,
    backgroundColor: 'white',
    elevation: 5,
    marginTop: -(height * 0.04),
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
});
