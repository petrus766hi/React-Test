import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors, fonts} from '../../../utils';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Card = ({click, type, typecar, brandcar, pricecar, imagecar}) => {
  const Typecard = () => {
    if (type == 'tipe') {
      return (
        <ScrollView>
          <TouchableOpacity style={styles.card(type)} onPress={click}>
            <View style={styles.cardcar}>
              <Image source={{uri: imagecar}} style={styles.imgcar} />
            </View>
            <View style={styles.detailcar}>
              <Text style={styles.brandlabel}>{brandcar}</Text>
              <Text style={styles.typelabel}>{typecar}</Text>
              <View style={styles.rangelabelgroup}>
                <Text style={styles.leftlabel}>Asal Dari</Text>
                <Text style={styles.pricelabel}>{pricecar}</Text>
              </View>
            </View>
            <View style={styles.buttondetail}>
              <Text style={styles.buttonlabel}>Lihat Detail</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          <TouchableOpacity style={styles.card(type)} onPress={click}>
            <Image source={{uri: imagecar}} style={styles.imgbrand} />
          </TouchableOpacity>
        </ScrollView>
      );
    }
  };
  return <Typecard />;
};

export default Card;

const styles = StyleSheet.create({
  card: (type) => ({
    backgroundColor: colors.text.white,
    width: width * 0.4,
    marginVertical: height * 0.025,
    marginHorizontal: width * 0.05,
    height: type == 'tipe' ? height * 0.30 : height * 0.18,
    borderRadius: 10,
    elevation: 5,
    alignItems: type == 'tipe' ? 'flex-start' : 'center',
    justifyContent: 'center',
  }),
  imgbrand: {
    width: width * 0.35,
    resizeMode: 'contain',
    height: height * 0.15,
  },
  cardcar: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    padding: 10
  },
  imgcar: {
    width: width * 0.3,
    height: height * 0.15,
    resizeMode: 'cover',
    borderRadius: 75
  },
  detailcar: {
    paddingHorizontal: 5,
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 10,
  },
  typelabel: {
    fontSize: 18,
    fontFamily: fonts.regular,
    color: colors.primary,
  },
  buttondetail: {
    backgroundColor: colors.darkgrey,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    width:width*0.4,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  brandlabel: {
      fontSize: 10,
      fontFamily: fonts.bold
    },
  rangelabelgroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  leftlabel: {
      fontSize: 10,
      fontFamily: fonts.light
    },
  pricelabel: {
    fontSize: 10,
    fontFamily: fonts.bold,
    color: colors.carrot,
    marginLeft: 5,
  },
  buttonlabel: {
    fontFamily: fonts.semibold,
    fontSize: 10,
    color: colors.primary,
  },
});
