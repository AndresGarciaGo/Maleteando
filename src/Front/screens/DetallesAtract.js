import React, { useState } from 'react';
import { Linking } from 'react-native';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import COLORS from './consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {   ScrollView, FlatList } from 'react-native-gesture-handler';




const DetallesAtract = ({navigation, route}) => {
let screenWidth = Dimensions.get('window').width;
const item = route.params;
const images = ([item.image,item.image1,item.image2,item.image3,])
  return (

    <ScrollView>
            <View style={style.container}>
              <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="rgba(0,0,0,0)"
              />
              <ScrollView style= {{flex:1, width:screenWidth}}

               barStyle="light-content"
               translucent
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={true}

              >{


                  <FlatList
                    data={images}
                    key={"1"}
                    numColumns={5}
                    renderItem={({ item }) => (
                      <Image
                        source={item}
                        style={style.headerImage}
                        keyExtractor={(item) => item.id}
                      />
                    )}
                  />
                }
              </ScrollView>

            </View>

          <View>
                </View>

                    <View style={{marginTop: 20, paddingHorizontal: 20}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: COLORS.grey, marginTop: 5,
                            }}>
                            {item.subname}
                        </Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: COLORS.grey, marginTop: 5,
                            }}>
                            {item.location}
                        </Text>
                      <View
                                style={{
                                  marginTop: 10,
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                      }}>
                            <View style={{flexDirection: 'row'}}>
                              <View style={{flexDirection: 'row'}}>
                                <Icon name="star" size={20} color={COLORS.orange} />
                                <Icon name="star" size={20} color={COLORS.orange} />
                                <Icon name="star" size={20} color={COLORS.orange} />
                                <Icon name="star" size={20} color={COLORS.orange} />
                                <Icon name="star" size={20} color={COLORS.grey} />
                            </View>
                              <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5}}>
                                4.0
                              </Text>
                      </View>
                        <Text style={{fontSize: 13, color: COLORS.grey}}>365 reseñas</Text>
                    </View>

          </View>
                    <View style={{marginTop: 20, paddingHorizontal: 20}}>
                      <Text style={style.lorem}>
                        {item.Características}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={() => Linking.openURL('https://maleteando-por-mexico.herokuapp.com/maleteando/touristic-attractions')}>
                    <View style={style.btn}>
                        <Text
                            style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                            Cotizar Ahora
                        </Text>
                    </View>
                    </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                    <View style={style.btn}>
                        <Text
                        style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                        Modelado 3D de esta zona
                        </Text>
                    </View>
                </TouchableOpacity>





    </ScrollView>
  );
};


const style = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    borderRadius: 10,
  },
    container: {
      flex: 1,
    },
    headerImage: {
      flex:1,
      width:Dimensions.get('window').width,
      height: 400,
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
      overflow: 'hidden',
    },

  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: COLORS.primary,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },


    lorem:  {
    fontSize: 20,
    fontFamily: 'times_roman',
    marginBottom: 10,
    flexDirection: 'row',
    textAlign: 'justify',
    marginHorizontal: 15,
  },
});

export default DetallesAtract;
