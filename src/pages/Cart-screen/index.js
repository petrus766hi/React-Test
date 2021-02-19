import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/action/cartActions';
import {Container, Left, Right, ListItem, Thumbnail, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header, Search, Card} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';

const Cart = ({cartItems, navigation, removeToCart}) => {
  return (
    <View>
      <Header title="Cart" navigation={navigation} type="Cart" />
      <ScrollView>
        {cartItems.map((e) => {
          return (
            <ListItem
              style={{
                alignItems: 'center',
                backgroundColor: 'white',
                justifyContent: 'center',
                marginHorizontal: 20,
                marginVertical: 10,
                padding: 20,
              }}>
              <Right>
                <Thumbnail source={{uri: e.image}} />
              </Right>
              <Body
                style={{
                  margin: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Left style={{marginLeft: 20}}>
                  <Text>{e.title.slice(0, 15)}</Text>
                </Left>
                <Right>
                  <Text>$ {e.price}</Text>
                </Right>
                <Right>
                  <TouchableOpacity onPress={() => removeToCart(e)}>
                    <Icon name="trash-o" size={20} color={'black'} />
                  </TouchableOpacity>
                </Right>
              </Body>
            </ListItem>
          );
        })}
      </ScrollView>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
