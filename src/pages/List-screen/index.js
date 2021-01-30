import React,{useEffect, useState} from 'react'
import { View, Text , Dimensions, StyleSheet, ScrollView, FlatList} from 'react-native'
import Axios from 'axios'
import {Header, Search, Card} from '../../components'
import * as _ from 'lodash'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const List = ({navigation}) => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)

  const getDataAll = async () => {
    try {
      const response = await Axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`)
      if(response.data){
        setData(response.data)
      }else{
        setData([])
      }
    } catch (error) {
      console.log('err', error)
    }
  }

  const getSearch = async (search) => {
    if(search != ''){
      await Axios.get(`https://api.thecatapi.com/v1/breeds?limit=67`)
      .then((res) =>{
        const dataFilter = res.data.filter((e)=>{
          return e.name === search
        })
        if(dataFilter){
          setData(dataFilter)
        }else{
          setData([])
        }
      })
      .catch((error)=>{
        console.log('err', error)
      })
    }

  }

  useEffect(() => {
   getDataAll()
  }, [])

  const handleLoadMore = () =>{
    if(page >= 6){
      setPage(0)
      getDataAll()
      return
    }
    setPage(page + 1)
    getDataAll()

  }

    return (
        <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
           <Header title="List Kucing" isIcon={true} />
           <View style={{marginHorizontal: 10}}>
              <Search text="Cari Jenis Kucing" onChangeText={_.debounce((e)=> getSearch(e),2000)} />
           </View>
           <ScrollView>
          <FlatList
            numColumns={2}
            data={data}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            renderItem={(item) =>{
              return(

                  <Card
                    type="tipe"
                    pricecar={item.item.origin}
                    brandcar={item.item.id}
                    typecar={item.item.name}
                    imagecar={item.item.image ?  item.item.image.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'}
                    click={() => {
                      navigation.navigate('Detail', {name: item.item.name});
                    }}
                  />

              )
            }}
          />
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