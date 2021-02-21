import React from 'react';
import {View, Text} from 'react-native';
import {
  Container,
  Left,
  Right,
  ListItem,
  Thumbnail,
  Body,
  Button,
} from 'native-base';
const CardList = ({image, title, price, keys}) => {
  return (
    <ListItem
      key={keys}
      style={{
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <Right>
        <Thumbnail source={{uri: image}} />
      </Right>
      <Body
        style={{
          margin: 10,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Left style={{marginLeft: 20}}>
          <Text>{title.slice(0, 15)}</Text>
        </Left>
        <Right>
          <Text>$ {price}</Text>
        </Right>
      </Body>
    </ListItem>
  );
};

export default CardList;
