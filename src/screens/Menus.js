import React from 'react';
import { ImageBackground, Text, Image, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
<<<<<<< HEAD
import sfondo from './assets/Images/segundo-fondo-app.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from 'react-native-navbar';
import hotel from './assets/hotel1.jpg'
=======
import sfondo from './assets/Images/FondoB.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from 'react-native-navbar';
import hotel from './assets/hotel1.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './consts/colors';
import { ScrollView } from 'react-native-gesture-handler';
>>>>>>> main

interface Props extends StackScreenProps<any, any> { };

export const Menus = ({ navigation }: Props) => {
  return (
<<<<<<< HEAD
    <View style={styles.container}>
<ImageBackground source={sfondo} style={{width: '100%', height: '100%', alignContent:'center'}}>
<Text style={styles.subtitle}>
                MALINALCO
            </Text>
            <Text style={styles.subtitlee}>
                ESTADO DE MÉXICO.
            </Text>
  <SafeAreaView>
      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Historia')}>
          <ImageBackground source={hotel} style={styles.img}>
        <Text style={styles.te}>HISTORIA</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('atractivos')}>
        <ImageBackground source={hotel} style={styles.img}>
        <Text style={styles.te}>ATRACTIVOS TURISTICOS</Text>
        </ImageBackground>
=======
 
  <ImageBackground source={sfondo} style={{width: '100%', height: '100%', alignContent:'center'}}>

    <View style={styles.qr}>
    <Icon name= "menu" size={51} color={COLORS.white}/>
  </View>
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
        <Image source={hotel} style={styles.img}/>
          <Text  style={styles.tex}>HISTORIA</Text>
      </TouchableOpacity>
        

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('atractivos')}>
        <Image source={hotel} style={styles.img}/>
          <Text  style={styles.tex}>ATRACTIVOS</Text>
>>>>>>> main
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Historia')}>
<<<<<<< HEAD
          <ImageBackground source={hotel} style={styles.img}>
        <Text style={styles.te}>GASTRONOMIA</Text>
        </ImageBackground>
=======
          <Image source={hotel} style={styles.img}/>
          <Text  style={styles.te}>GASTRONOMIA</Text>
>>>>>>> main
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Home')}>
<<<<<<< HEAD
          <ImageBackground source={hotel} style={styles.img}>
        <Text style={styles.te}>HOSPEDAJE</Text>
        </ImageBackground>
=======
          <Image source={hotel} style={styles.img}/>
          <Text  style={styles.tex}>HOSPEDAJE</Text>
>>>>>>> main
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Historia')}>
<<<<<<< HEAD
          <ImageBackground source={hotel} style={styles.img}>
        <Text style={styles.te}>PAQUETES</Text>
        </ImageBackground>
      </TouchableOpacity>
      </SafeAreaView>
</ImageBackground>

    </View>
=======
          <Image source={hotel} style={styles.img}/>
          <Text  style={styles.tex}>PAQUETES</Text>
      </TouchableOpacity>

      
    
    </ScrollView>
  </ImageBackground>
  

>>>>>>> main
  )
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    
  },
  subtitle: {
    fontSize: 32,
    color: 'black',
    paddingLeft: 115,
    marginTop: 93,
=======

subtitle: {
    fontSize: 32,
    color: 'black',
    paddingLeft: 115,
    marginTop: 33,
>>>>>>> main
},
subtitlee: {
    fontSize: 19,
    color: 'black',
    paddingLeft: 115,
},
<<<<<<< HEAD

  image2: {
    height: 100,
    width: 55,
  },

  a:{
    marginTop:105
  },

  img: {
    width: "65%", 
    height: 90, 
    borderRadius:35,  
    marginLeft: 20, 
=======
  img: {
    width: 170, 
    height: 100, 
    borderRadius: 20,  
    marginLeft: 4,
    marginTop: 4, 
>>>>>>> main

},

  te: {
<<<<<<< HEAD
    height: 70,
        width: 150,
        marginLeft: 150,
        color: 'black',
        fontSize: 25,
        alignContent:"center",
        marginTop: 15,
  },

  cont: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 35,
=======
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
>>>>>>> main
    backgroundColor: "white",
    borderColor: "black",
    marginTop: 10,
    alignContent:"center",
<<<<<<< HEAD
    marginLeft: 45,
=======
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
>>>>>>> main
  },


})
export default Menus;