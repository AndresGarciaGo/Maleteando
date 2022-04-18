import React from 'react';
import { ImageBackground, Text, Image, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './consts/colors';
import { ScrollView } from 'react-native-gesture-handler';
import hotel from './assets/Paq.jpg';

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
        <Image source={hotel} style={styles.img}/>
          <Text  style={styles.tex}>Paquete 1</Text>
      </TouchableOpacity>
        

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Detalles', hotel)}>
        <Image source={hotel} style={styles.img}/>
          <Text  style={styles.tex}>Paquete 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Detalles', hotel)}>
          <Image source={hotel} style={styles.img}/>
          <Text  style={styles.te}>Paquete 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Detalles', hotel)}>
          <Image source={hotel} style={styles.img}/>
          <Text  style={styles.tex}>Paquete 4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Detalles', hotel)}>
          <Image source={hotel} style={styles.img}/>
          <Text  style={styles.tex}>Paquete 5</Text>
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