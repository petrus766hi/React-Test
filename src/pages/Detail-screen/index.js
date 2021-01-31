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
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native';
import {Logos} from '../../assets';
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
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, [])

  return (
    <ScrollView style={{flex: 1}}>
      <Header title={route.params.name}  navigation={navigation} />
      {dataDetail.map((e, index) => {
        console.log('e', e)
        return (
          <View
            style={{justifyContent: 'center', alignItems: 'center'}}
            key={index}>
            <Card
              name={e.name}
              country={e.country_code}
              origin={e.origin}
              imperial={e.weight.imperial}
              metric={e.weight.metric}
              affectionlevel={e.affection_level}
              indoor={e.indoor}
              life={e.life_span}
              adaptability={e.adaptability}
              child_friendly={e.child_friendly}
              dog_friendly={e.dog_friendly}
              energy_level={e.energy_level}
              grooming={e.grooming}
              health_issues={e.health_issues}
              intelligence={e.intelligence}
              shedding_level={e.shedding_level}
              social_needs={e.social_needs}
              stranger_friendly={e.stranger_friendly}
              vocalisation={e.vocalisation}
              experimental={e.experimental}
              hairless={e.hairless}
              natural={e.natural}
              rare={e.rare}
              rex={e.rex}
              suppressed_tail={e.suppressed_tail}
              short_legs={e.short_legs}
              wikipedia_url={e.wikipedia_url}
              hypoallergenic={e.hypoallergenic}
              cfa_url={e.cfa_url ? e.cfa_url : 'None'}
              vetstreet_url={e.vetstreet_url}
              vcahospitals_url={e.vcahospitals_url ? e.vcahospitals_url : 'None'}
              temperament={e.temperament}
              description={e.description}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

const Card = (
  { name,
    origin,
    metric,
    imperial,
    index,
    country,
    affectionlevel,
    indoor,
    life,
    adaptability,
    affection_level,
    child_friendly,
    dog_friendly,
    energy_level,
    grooming,
    health_issues,
    intelligence,
    shedding_level,
    social_needs,
    stranger_friendly,
    vocalisation,
    experimental,
    hairless,
    natural,
    rare,
    rex,
    suppressed_tail,
    short_legs,
    wikipedia_url,
    hypoallergenic,
    cfa_url,
    vetstreet_url,
    vcahospitals_url,
    temperament,
    description
  }
  ) => {
  const [expanded, setExpanded] = useState(false)

  const changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded)
  }

  return (
    <View style={styles.boxUmum} key={index}>
      <TouchableOpacity style={{flexDirection: 'row', marginBottom: 12, marginTop: 18}}  >
        <Image
          source={Logos}
          style={{
            resizeMode: 'center',
            height: 25,
            width: 25,
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
      </TouchableOpacity>
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
            <Text style={{fontSize: 11, color: '#929292'}}>Indoor</Text>
            <Text style={{fontSize: 11}}>{indoor}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Life Span</Text>
            <Text style={{fontSize: 11}}>{life}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Adaptability</Text>
            <Text style={{fontSize: 11}}>{adaptability}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Affection Level</Text>
            <Text style={{fontSize: 11}}>{affectionlevel}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Affection Level</Text>
            <Text style={{fontSize: 11}}>{affectionlevel}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Child Friendly</Text>
            <Text style={{fontSize: 11}}>{child_friendly}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Affection Level</Text>
            <Text style={{fontSize: 11}}>{affectionlevel}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Dog Friendly</Text>
            <Text style={{fontSize: 11}}>{dog_friendly}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Energy Level</Text>
            <Text style={{fontSize: 11}}>{energy_level}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Grooming</Text>
            <Text style={{fontSize: 11}}>{grooming}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Health Issues</Text>
            <Text style={{fontSize: 11}}>{health_issues}</Text>
          </View>
          <View style={{height: expanded ? null : 0, overflow: 'hidden'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Intelligence</Text>
            <Text style={{fontSize: 11}}>{intelligence}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Shedding Level</Text>
            <Text style={{fontSize: 11}}>{shedding_level}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Social Needs</Text>
            <Text style={{fontSize: 11}}>{social_needs}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Stranger Friendly</Text>
            <Text style={{fontSize: 11}}>{stranger_friendly}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Vocalisation</Text>
            <Text style={{fontSize: 11}}>{vocalisation}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Experimental</Text>
            <Text style={{fontSize: 11}}>{experimental}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Hairless</Text>
            <Text style={{fontSize: 11}}>{hairless}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Natural</Text>
            <Text style={{fontSize: 11}}>{natural}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Rare</Text>
            <Text style={{fontSize: 11}}>{rare}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Experimental</Text>
            <Text style={{fontSize: 11}}>{experimental}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Rex</Text>
            <Text style={{fontSize: 11}}>{rex}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Suppressed Tail</Text>
            <Text style={{fontSize: 11}}>{suppressed_tail}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Short Legs</Text>
            <Text style={{fontSize: 11}}>{short_legs}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Hypoallergenic</Text>
            <Text style={{fontSize: 11}}>{hypoallergenic}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Wikipedia Url</Text>
            <View style={{width:'50%'}}>
            <Text style={{fontSize: 11, textAlign:'justify'}}>{wikipedia_url}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Cfa Url</Text>
            <View style={{width:'50%'}}>
            <Text style={{fontSize: 11, textAlign:'justify'}}>{cfa_url}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Vetstreet Url</Text>
            <View style={{width:'50%'}}>
            <Text style={{fontSize: 11, textAlign:'justify'}}>{vetstreet_url}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Vcahospitals Url</Text>
            <View style={{width:'50%'}}>
            <Text style={{fontSize: 11, textAlign:'justify'}}>{vcahospitals_url}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Temperament</Text>
            <View style={{width:'50%'}}>
            <Text style={{fontSize: 11, textAlign:'justify'}}>{temperament}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 11, color: '#929292'}}>Description</Text>
            <View style={{width:'50%'}}>
            <Text style={{fontSize: 11, textAlign:'justify'}}>{description}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => changeLayout()}>
          {expanded ? <Text style={{
            color: '#356AA0',
            fontSize: 13,
            alignSelf: 'flex-end',
            marginLeft: 10,
          }}>View Less</Text> : <Text style={{
            color: '#356AA0',
            fontSize: 13,
            alignSelf: 'flex-end',
            marginLeft: 10,
          }}>View More</Text> }

        </TouchableOpacity>
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
    marginBottom: 50,
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
