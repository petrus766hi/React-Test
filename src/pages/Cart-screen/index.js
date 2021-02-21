import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/action/cartActions';
import {
  Container,
  Left,
  Right,
  ListItem,
  Thumbnail,
  Body,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from '../../components';
import {SwipeListView} from 'react-native-swipe-list-view';
import CartList from '../../components/molecules/CartList';
import CardList from '../../components/molecules/CartList';

const {height, width} = Dimensions.get('window');

const Cart = ({cartItems, navigation, removeToCart, clearCart}) => {
  const [totaly, setTotaly] = useState(0);

  useEffect(() => {
    const totals = () => {
      let total = 0;
      cartItems.forEach((element) => {
        return (total += element.price);
      });
      setTotaly(total);
    };
    totals();
  });

  return (
    <View style={{flex: 1}}>
      <Header title="Cart" navigation={navigation} type="Cart" />
      {cartItems.length ? (
        <>
          <View style={{flex: 10}}>
            <SwipeListView
              data={cartItems}
              keyExtractor={(data, index) => index.toString()}
              renderItem={(data, index) => (
                <CardList
                  keys={index}
                  image={data.item.image}
                  title={data.item.title}
                  price={data.item.price}
                />
              )}
              renderHiddenItem={(data) => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={styles.iconRemove}
                    onPress={() => removeToCart(data.item)}>
                    <Icon name="trash" color={'white'} size={30} />
                  </TouchableOpacity>
                </View>
              )}
              disableRightSwipe={true}
              previewOpenDelay={3000}
              friction={1000}
              tension={40}
              leftOpenValue={75}
              stopLeftSwipe={75}
              rightOpenValue={-75}
            />
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                elevation: 20,
              }}>
              <Left>
                <Text style={{fontSize: 18, margin: 20, color: 'red'}}>
                  $ {totaly}
                </Text>
              </Left>
              <Right>
                <Button
                  style={{padding: 10}}
                  danger
                  onPress={() => clearCart()}>
                  <Text>Clear</Text>
                </Button>
              </Right>
              <Right>
                <Button
                  style={{padding: 10, marginRight: 20}}
                  success
                  onPress={() => null}>
                  <Text>Checkout</Text>
                </Button>
              </Right>
            </View>
          </View>
        </>
      ) : (
        <View
          style={{
            flex: 9,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 15}}>Your basket is still empty</Text>
          <Text style={{fontSize: 15}}>
            Add products to your cart to get started
          </Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeToCart: (item) => {
      dispatch(actions.removeToCart(item));
    },
    clearCart: () => {
      dispatch(actions.clearCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  iconRemove: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 25,
    height: 90,
    width: width / 1.2,
  },
});
