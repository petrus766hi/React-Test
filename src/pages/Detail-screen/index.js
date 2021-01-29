import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Arrow,
  search,
  Union,
  car,
  Ellipse,
  Ellipse2,
  infoPengajuan,
  ulasan,
  Back,
} from '../../assets';
import {Header} from '../../components';
import {Gap} from '../../components';
import Axios from 'axios'
const height = Dimensions.get('screen').height;

const Detail = ({navigation, route}) => {
  const [dataDetail, setDataDetail] = useState([])

  const getDataDetail = async () =>{
    await Axios.get(`https://api.thecatapi.com/v1/breeds/search?name=${route.params.name}`)
    .then((res)=>{
      if(res.data){
        setDataDetail(res.data)
      }else{
        setDataDetail([])
      }
    })
    .catch((err)=>{
      console.log('err', err)
    })
  }


  useEffect(() => {
    getDataDetail()
  }, [])

  return (
    <ScrollView style={{flex: 1}}>
      <Header title="Detail"  navigation={navigation} />
      {dataDetail.map((e, index) => {
        return (
          <View
            style={{justifyContent: 'center', alignItems: 'center'}}
            key={index}>
            <Card
              name={e.name}
              // status={e.status}
              origin={e.origin}
              imperial={e.weight.imperial}
              metric={e.weight.metric}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

const Card = ({name, origin , metric, imperial, index, country}) => {
  return (
    <View style={styles.boxUmum} key={index}>
      <View style={{flexDirection: 'row', marginBottom: 12, marginTop: 18}}>
        <Image
          source={infoPengajuan}
          style={{
            resizeMode: 'contain',
            height: 30,
            width: 30,
            marginLeft: 20,
          }}
        />
        <Text
          style={{
            color: '#356AA0',
            fontSize: 13,
            alignSelf: 'center',
            marginLeft: 10,
          }}>
          Informasi Kucing
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 11, color: '#929292'}}>Name</Text>
          <Text style={{fontSize: 11, color: '#356AA0'}}>{name}</Text>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 11, color: '#929292'}}>Status</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Image
              source={Ellipse2}
              style={{
                width: 7,
                height: 7,
                backgroundColor: '#FF7A00',
                borderRadius: 20,
                marginTop: 5,
              }}
            />
            <Text style={{color: '#FF7A00', marginLeft: 3}}>
              {statusValue(status)}
            </Text>
          </View>
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 11, color: '#929292'}}>Origin</Text>
          <Text style={{fontSize: 11}}>{origin}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 11, color: '#929292'}}>Imperial</Text>
          <Text style={{fontSize: 11}}>{imperial}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 11, color: '#929292'}}>Metric</Text>
          <Text style={{fontSize: 11}}>{metric}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 11, color: '#929292'}}>Country Code</Text>
          <Text style={{fontSize: 11}}>{country}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 11, color: '#929292'}}>Metric</Text>
          <Text style={{fontSize: 11}}>{metric}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 11, color: '#929292'}}>Metric</Text>
          <Text style={{fontSize: 11}}>{metric}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 11, color: '#929292'}}>Metric</Text>
          <Text style={{fontSize: 11}}>{metric}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 11, color: '#929292'}}>Metric</Text>
          <Text style={{fontSize: 11}}>{metric}</Text>
        </View>
      </View>
    </View>
  );
};


export default Detail;

const styles = StyleSheet.create({
  color: {
    backgroundColor: '#356AA0',
    height: '13%',
    width: '100%',
  },

  boxUmum: {
    width: '95%',
    // height: '5%',
    backgroundColor: 'white',
    elevation: 2,
    marginBottom: 20,
    marginTop: -height / 20,
    marginHorizontal: 10,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: '2%',
  },

  boxPengajuan: {
    width: '95%',
    backgroundColor: 'white',
    elevation: 2,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 8,
    paddingHorizontal: '2%',
  },
  boxKendaraan: {
    width: '95%',
    backgroundColor: 'white',
    elevation: 2,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 8,
    paddingHorizontal: '2%',
  },
  boxUlasan: {
    width: '95%',
    height: 300,
    backgroundColor: 'white',
    elevation: 2,
    marginBottom: 80,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: '2%',
  },
  boxUlasan2: {
    width: '95%',
    height: 196,
    backgroundColor: 'white',
    elevation: 2,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 8,
    paddingHorizontal: '2%',
  },
  box: {
    height: 100,
    backgroundColor: '#F0F0F0',
    elevation: 1,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  boxhasilinputan: {
    height: 100,
    backgroundColor: '#FFFFFF',
    elevation: 1,
    marginHorizontal: 10,
    borderRadius: 8,
  },

  icon: {
    width: 12,
    height: 20,
  },
});
