import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Axios from 'axios';
import {Header, Search, Card} from '../../components';
import * as _ from 'lodash';
import Fuse from 'fuse.js';
import {connect} from 'react-redux';
import * as actions from '../../redux/action/cartActions';
import ModalFilter from '../../components/molecules/ModalFilter';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const List = ({navigation, addItem}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('Sort');
  const [modalFilter, setModalFilter] = useState(false);

  const getDataAll = async () => {
    try {
      const response = await Axios.get(`https://fakestoreapi.com/products`);
      if (response.data) {
        setData(response.data);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log('err', error);
    }
  };

  const getSearch = async (search) => {
    if (search != '') {
      await Axios.get(`https://fakestoreapi.com/products`)
        .then((res) => {
          const fuse = new Fuse(res.data, {
            keys: ['title'],
          });
          const result = fuse.search(search);
          const dataFilter = result.map((items) => {
            return items.item;
          });
          if (dataFilter) {
            setData(dataFilter);
          } else {
            setData([]);
          }
        })
        .catch((error) => {
          console.log('err', error);
        });
    } else {
      getDataAll();
    }
  };

  const textFilter = (filter) => {
    if (filter == 'desc') {
      setFilter('Lowest');
    } else if (filter == 'asc') {
      setFilter('Highest');
    }
  };

  const sortPrice = async (price) => {
    textFilter(price);
    const response = await Axios.get(`https://fakestoreapi.com/products`);
    if (price === 'desc') {
      const data = response.data.sort((a, b) => {
        return a.price - b.price;
      });
      setData(data);
    } else {
      const data = response.data.sort((a, b) => {
        return b.price - a.price;
      });
      setData(data);
    }
  };
  const ModalFilterClick = () => {
    setModalVisible(false);
    sortPrice();
  };

  useEffect(() => {
    getDataAll();
  }, []);

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
        <Header title="List Product" isIcon={true} />
        <View style={{marginHorizontal: 10}}>
          <Search
            text="Cari Produk"
            onChangeText={_.debounce((e) => getSearch(e), 2000)}
            // click={() => navigation.navigate('Cart')}
            navigation={navigation}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#356AA0',
              width: 80,
              marginVertical: 10,
              padding: 5,
              borderRadius: 15,
            }}
            onPress={() => setModalFilter(true)}>
            <Text style={{color: 'white', textAlign: 'center'}}>{filter}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.wrappercard}>
            {data.map((e) => {
              return (
                <Card
                  // key={e.id}
                  type="tipe"
                  pricecard={e.price}
                  brandcard={e.category}
                  typecard={e.title}
                  imagecard={e.image}
                  click={() => {
                    addItem(e);
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <ModalFilter
        visible={modalFilter}
        click={() => ModalFilterClick()}
        close={() => setModalFilter(false)}
        setFilter={(e) => sortPrice(e)}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (product) => {
      dispatch(actions.addToCart(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(List);
const styles = StyleSheet.create({
  wrappercard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
