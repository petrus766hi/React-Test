import React,{useEffect, useState} from 'react'
import { View, Text , Dimensions, StyleSheet, ScrollView} from 'react-native'
import Axios from 'axios'
import {Header, Search, Card} from '../../components'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const List = () => {
  const [data, setData] = useState([])
  const getDataAll = async () => {
    try {
      const response = await Axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0')
      if(response.data){
        setData(response.data)
      }else{
        setData([])
      }
    } catch (error) {

    }

  }

  useEffect(() => {
   getDataAll()
  }, [])

    return (
        <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
           <Header title="List Kucing" isIcon={true} />
           <View style={{marginHorizontal: 10}}>
              <Search text="Cari Jenis Kucing"  />
           </View>
            <ScrollView>
              <View style={styles.wrappercard}>
                {data.map((e, index) => {
                  console.log('e.image.url',e.image.url)
                return (
                  <Card
                    key={index}
                    type="tipe"
                    pricecar="132 Juta"
                    brandcar={e.name}
                    typecar={"asasa"}
                    imagecar={e.image.url}
                    // click={() => {
                    //   navigation.navigate('Detailcar', {idModel: e.AssetModel, merk:route.params.dataMerk, model:e.AssetModelName  });
                    // }}
                  />
                )})}
              </View>
            </ScrollView>
      </View>
    )
}

export default List
const styles = StyleSheet.create({
  wrappercard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});