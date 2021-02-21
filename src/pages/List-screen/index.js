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
import ModalCategory from '../../components/molecules/ModalCategory';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const List = ({navigation, addItem, cartItems, route}) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('Sort');
  const [category, setCategory] = useState('All');
  const [modalFilter, setModalFilter] = useState(false);
  const [modalCategory, setModalCategory] = useState(false);
  const [cartsLength, setCartsLength] = useState(0);

  const getDataAll = () => {
    const datas = route.params.data;
    setData(datas);
  };
  const getSearch = async (search) => {
    if (search != '') {
      const fuse = new Fuse(data, {
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
    } else {
      getDataAll();
    }
  };

  const ModalCategoryClick = () => {
    setModalVisible(false);
    categoryProduct();
  };
  const textCategory = (category) => {
    if (category == 'all') {
      setCategory('All');
    } else if (category == 'electronics') {
      setCategory('Electronics');
    } else if (category == 'jewelery') {
      setCategory('Jewelery');
    } else if (category == 'men clothing') {
      setCategory('Men');
    } else if (category == 'women clothing') {
      setCategory('Women');
    }
  };

  const categoryProduct = async (product) => {
    textCategory(product);
    const response = route.params.data;
    if (product === 'all') {
      setData(response);
    } else if (product === 'electronics') {
      const data = response.filter((e) => {
        return e.category === product;
      });
      setData(data);
    } else if (product === 'jewelery') {
      const data = response.filter((e) => {
        return e.category === product;
      });
      setData(data);
    } else if (product === 'men clothing') {
      const data = response.filter((e) => {
        return e.category === product;
      });
      setData(data);
    } else if (product === 'women clothing') {
      const data = response.filter((e) => {
        return e.category === product;
      });
      setData(data);
    }
  };

  const textFilter = (filter) => {
    if (filter == 'asc') {
      setFilter('Lowest');
    } else if (filter == 'desc') {
      setFilter('Highest');
    }
  };

  const sortPrice = async (price) => {
    textFilter(price);
    const response = data;
    if (price === 'asc') {
      const data = response.sort((a, b) => {
        return a.price - b.price;
      });
      setData(data);
    } else if (price === 'desc') {
      const data = response.sort((a, b) => {
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

  useEffect(() => {
    setCartsLength(cartItems.length);
  });

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
        <Header title="List Product" isIcon={true} />
        <View style={{marginHorizontal: 10}}>
          <Search
            text="Cari Produk"
            onChangeText={_.debounce((e) => getSearch(e), 2000)}
            navigation={navigation}
            cartlength={cartsLength}
          />
          <View style={styles.badgecontainer}>
            <TouchableOpacity
              style={styles.badgeFilter}
              onPress={() => setModalCategory(true)}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                {category}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.badgeFilter}
              onPress={() => setModalFilter(true)}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                {filter}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.wrappercard}>
            {data.map((e, index) => {
              return (
                <Card
                  kuy={index}
                  type="tipe"
                  pricecard={e.price}
                  brandcard={e.category}
                  typecard={e.title.slice(0, 15)}
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
      <ModalCategory
        visible={modalCategory}
        click={() => ModalCategoryClick()}
        close={() => setModalCategory(false)}
        setCategory={(e) => categoryProduct(e)}
      />
    </>
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
    addItem: (product) => {
      dispatch(actions.addToCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

const styles = StyleSheet.create({
  wrappercard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badgeFilter: {
    backgroundColor: '#356AA0',
    width: 90,
    marginVertical: 10,
    padding: 5,
    borderRadius: 15,
  },
  badgecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
