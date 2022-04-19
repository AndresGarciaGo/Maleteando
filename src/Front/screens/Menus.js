import React from 'react';
import { ImageBackground, Text, Image, View, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import sfondo from './assets/Images/FondoB.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from 'react-native-navbar';
import hotel from './assets/hotel1.jpg';
import hotel2 from './assets/hotel2.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './consts/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { SlideFromRightIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import CasaC from './assets/CasaC.jpg'
import ZonaA from './assets/ZonaA.jpg';
import Gastro from './assets/Gastro.jpg';
import Paq from './assets/Paq.jpg';

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
        onPress={() => navigation.navigate('Historia')}>
        <Image source={CasaC} style={styles.img}/>
          <Text  style={styles.tex}>HISTORIA</Text>
      </TouchableOpacity>
        

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Atractivos Turisticos')}>
        <Image source={ZonaA} style={styles.img}/>
          <Text  style={styles.tex}>ATRACTIVOS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Restaurantes')}>
          <Image source={Gastro} style={styles.img}/>
          <Text  style={styles.te}>GASTRONOMIA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Hoteles')}>
          <Image source={hotel} style={styles.img}/>
          <Text  style={styles.tex}>HOSPEDAJE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Paquetes')}>
          <Image source={Paq} style={styles.img}/>
          <Text  style={styles.tex}>PAQUETES</Text>
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

  te: {
    height: 63,
    width: 180,
    marginLeft: 185,
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


})
export default Menus;