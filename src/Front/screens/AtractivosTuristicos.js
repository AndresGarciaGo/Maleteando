import React from 'react';
import { ImageBackground, Text, Image, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import logo from './assets/Images/logo.png';
import sfondo from './assets/Images/FondoB.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from 'react-native-navbar';
import hotel from './assets/hotel1.jpg';
import ZonaA from './assets/ZonaA.jpg';
import Convento from './assets/Convento.jpg';
import CasaC from './assets/CasaC.jpg';
import Museo from './assets/Museo.jpg';
import Senderismo from './assets/Senderismo.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './consts/colors';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { };

export const Menus = ({ navigation }: Props) => {
  return (
 
  <View style={[styles.container,styles.p]}>

      <Text style={styles.subtitle}> MALINALCO </Text>
      <Text style={styles.subtitlee}> ESTADO DE MÉXICO </Text>
      
      <View style={styles.searchInputContainer}>
          <Icon name="search" size={35} style={{ marginLeft: 20 }} />
          <TextInput
            placeholder="Buscar"
            style={{ fontSize: 20, paddingRight: 150 }}
          />
        </View>
      
        <ScrollView>
      <TouchableOpacity style={styles.contB}
        onPress={() => navigation.navigate('Detalles', hotel)}>
        <Image source={ZonaA} style={styles.img}/>
          <Text  style={styles.tex}>Ruinas</Text>
      </TouchableOpacity>
        

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Detalles', hotel)}>
        <Image source={Convento} style={styles.img}/>
          <Text  style={styles.tex}>Convento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Detalles', hotel)}>
          <Image source={CasaC} style={styles.img}/>
          <Text  style={styles.te}>Cultura</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Detalles', hotel)}>
          <Image source={Museo} style={styles.img}/>
          <Text  style={styles.tex}>Museo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Detalles', hotel)}>
          <Image source={Senderismo} style={styles.img}/>
          <Text  style={styles.tex}>Senderismo</Text>
      </TouchableOpacity>
      </ScrollView>
  
    </View>

  )
}

const styles = StyleSheet.create({
p:{
    flex:1,
    backgroundColor: '#9370db',
  },
subtitle: {
    marginTop:15,
    fontSize: 32,
    color: '#2B3030',
    textAlign: 'center',
    fontWeight: 'bold'


},
subtitlee: {
    fontSize: 19,
    color: '#2B3030',
    textAlign: 'center',
    fontWeight: 'bold'
},
  img: {
    width: 170, 
    height: 100, 
    borderRadius: 20,  
    marginLeft: 4,
    marginTop: 4, 

},

gagnam: {
  backgroundColor: '#9370db',
},

  te: {
    height: 63,
    width: 180,
    marginLeft: 190,
    color: 'black',
    fontSize: 25,
    alignContent:"center",
    marginTop: -59
  },

  tex:{
    height: 63,
    width: 180,
    marginLeft: 190,
    color: 'black',
    fontSize: 25,
    alignContent:"center",
    marginTop: -59

  },

  cont: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "white",
    borderColor: "black",
    marginTop: 10,
    alignContent:"center",
    marginLeft: 25,
  },

  contB: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "white",
    borderColor: "black",
    marginTop: 10,
    alignContent:"center",
    marginLeft: 25,
  },


  qr: {
    marginLeft: 340,
    marginTop: 10

  },

  searchInputContainer: {
    height: 50,
    width: "70%",
    backgroundColor: COLORS.white,
    marginRight: 50,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 15,
    borderBottomRightRadius: 30,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  i: {
    flexDirection: "column",
    height: 60,
    width: 30,
    marginLeft: 2,
    marginTop: 2,
  },


})
export default Menus;