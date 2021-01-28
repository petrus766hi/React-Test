import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {Button} from '../../components';
import {Logo} from '../../assets'

const width = Dimensions.get('screen').width;

const Splash = ({navigation}) => {
  const checkWelcome = async () =>{
    setTimeout(() => {
      navigation.replace('List');
    }, 3000);
  }

  useEffect(() => {
    checkWelcome()
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Image source={Logo} style={styles.img} />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  img: {
    resizeMode: 'center',
    width:width/2
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28AC0E',
  },
});
