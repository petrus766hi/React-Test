import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Axios from 'axios';
import {Header, Search, Card} from '../../components';
import * as _ from 'lodash';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const List = ({navigation}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const getDataAll = async () => {
    try {
      setLoading(true);
      const response = await Axios.get(`https://fakestoreapi.com/products`);
      if (response.data) {
        setData(response.data);
        setLoading(false);
      } else {
        setData([]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log('err', error);
    }
  };

  const getSearch = async (search) => {
    if (search != '') {
      await Axios.get(`https://fakestoreapi.com/products`)
        .then((res) => {
          const dataFilter = res.data.filter((e) => {
            console.log('xxx', e.title.toLowerCase().includes(search));
            return e.title.toLowerCase().includes(search);
          });

          // if (dataFilter) {
          //   setData(dataFilter);
          // } else {
          //   setData([]);
          // }
        })
        .catch((error) => {
          console.log('err', error);
        });
    } else {
      getDataAll();
    }
  };

  useEffect(() => {
    getDataAll();
  }, []);

  const handleLoadMore = () => {
    if (page >= 6) {
      setPage(0);
      getDataAll();
      return;
    }
    setPage(page + 1);
    getDataAll();
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {loading ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
      <Header title="List Kucing" isIcon={true} />
      <View style={{marginHorizontal: 10}}>
        <Search
          text="Cari Produk"
          onChangeText={_.debounce((e) => getSearch(e), 2000)}
        />
      </View>
      <FlatList
        numColumns={2}
        data={data}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.02}
        renderItem={(item) => {
          return (
            <Card
              type="tipe"
              pricecard={item.item.price}
              brandcard={item.item.category}
              typecard={item.item.title}
              imagecard={item.item.image}
              click={() => {
                navigation.navigate('Detail', {name: item.item.name});
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default List;
const styles = StyleSheet.create({
  wrappercard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
