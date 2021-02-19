import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {Close} from '../../../assets/icons';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const ModalFilter = ({visible, close, setFilter}) => {
  const [select, setSelected] = useState(1);

  return (
    <Modal
      isVisible={visible}
      onSwipeComplete={() => close()}
      onBackdropPress={() => close()}
      swipeDirection="down"
      style={{padding: 0, margin: 0, flex: 1, justifyContent: 'flex-end'}}>
      <View
        style={{
          height: '40%',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={select == 0 ? styles.item2 : styles.item}
            onPress={() => {
              setFilter('desc');
              setSelected(0);
              close();
            }}>
            <Text style={select == 0 ? styles.text2 : styles.text}>Lowest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={select == 1 ? styles.item2 : styles.item}
            onPress={() => {
              setFilter('asc');
              setSelected(1);
              close();
            }}>
            <Text style={select == 1 ? styles.text2 : styles.text}>
              Highest
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#E4E7E9',
    padding: 10,
    width: width * 0.9,
    borderRadius: 10,
    marginVertical: 5,
  },
  item2: {
    backgroundColor: '#356AA0',
    padding: 10,
    width: width * 0.9,
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    color: 'black',
  },
  text2: {
    color: 'white',
  },
});

export default ModalFilter;
