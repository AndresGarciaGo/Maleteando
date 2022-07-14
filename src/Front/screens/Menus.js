import React, { useState } from 'react';
import { StatusBar, ImageBackground, Text, Image, View, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import sfondo from './assets/Images/FondoB.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './consts/colors';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SlideFromRightIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import font from '../Font/Times New Roman/times_roman.ttf';
import { SearchBar } from 'react-native-screens';
import { Component } from 'react/cjs/react.production.min';

const boton = [
  {
    id: 'Sumergete',
    name: 'SUMERGETE',
    image: require('./assets/Tech.png'),
  },
  {
    id: 'Historia',
    name: 'HISTORIA',
    image: require('./assets/CasaC.jpg'),
  },

  {
    id: 'AtractivosTuristicos',
    name: 'ATRACTIVOS',
    image: require('./assets/ZonaA.jpg'),
  },

  {
    id: 'Restaurantes',
    name: 'GASTRONOMIA',
    image: require('./assets/Gastro.jpg'),
  },

  {
    id: 'Hoteles',
    name: 'HOSPEDAJE',
    image: require('./assets/hotel1.jpg'),
  },
  {
    id: 'Paquetes',
    name: 'PAQUETES',
    image: require('./assets/Paq.jpg'),
  }
]

export const Menus = ({ navigation, item }) => {

  const Item = ({ id, image, name }) => (
    <View style={styles.p}>
      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate(id)}>
        <Image source={image} style={styles.img} />
        <Text style={styles.tex}>{name}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}) => (
    <Item id={item.id}
      image={item.image}
      name={item.name}
    />
  );
  

  return (

    <View style={[styles.container, styles.p]}>

      <Text style={styles.subtitle}> MALINALCO </Text>
      <Text style={styles.subtitlee}> ESTADO DE MÉXICO </Text>

      <View style={styles.searchInputContainer}>
        <Icon name="search" size={35} style={{ marginLeft: 20 }} />
        <TextInput
          placeholder="Buscar"
          style={{ fontSize: 20, paddingRight: 150 }}

        />

        

      </View>
      <FlatList
        data={boton}
        keyExtractor= { (item, index)  => item.id}
        renderItem={renderItem}
      />

    </View>

  )
}

const styles = StyleSheet.create({

  p: {
    flex: 1,
    backgroundColor: '#9370db',
  },

  subtitle: {
    marginTop: 15,
    fontSize: 32,
    color: '#2B3030',
    textAlign: 'center',
    fontFamily: 'times_roman',
    justifyContent: "space-between",
    flexDirection: "row",

  },
  subtitlee: {
    fontSize: 19,
    color: '#2B3030',
    textAlign: 'center',
    fontFamily: 'times_roman',
    justifyContent: "space-between",
    flexDirection: "row",

  },
  img: {
    width: 170,
    height: 100,
    borderRadius: 20,
    marginLeft: 4,
    marginTop: 4,

  },

  tex: {
    height: 63,
    width: 180,
    marginLeft: 190,
    fontFamily: 'times_roman',
    fontSize: 20,
    alignContent: "center",
    marginTop: -59,
  },


  cont: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "white",
    borderColor: "#818181",
    boxShadow: '0px 0px 3.5px 0px rgba(0,0,0,0.2)',
    marginTop: 10,
    alignContent: "center",
    marginLeft: 25,
  },

  qr: {
    marginLeft: 340,
    marginTop: 10

  },

  searchInputContainer: {
    height: 50,
    width: "88%",
    backgroundColor: COLORS.light,
    marginTop: 15,
    borderRadius: 30,
    marginLeft: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },


})
export default Menus;