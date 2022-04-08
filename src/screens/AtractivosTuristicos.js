import React from 'react';
<<<<<<< HEAD
import { ImageBackground, Text, Image, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import sfondo from './assets/Images/segundo-fondo-app.png'
import hotel from './assets/hotel1.jpg'

const AtractivosTuristicos = () => {
    return (
        <View style={styles.container}>
    <ImageBackground source={sfondo} style={{width: '100%', height: '100%', alignContent:'center'}}>
            <Text style={styles.subtitle}>
                MALINALCO
            </Text>
            <Text style={styles.subtitlee}>
                ESTADO DE MÉXICO.
            </Text>
            
            <TouchableOpacity style={styles.tam}>
           <ImageBackground source={hotel} style={styles.img}> 
           <Text style={styles.hotelT}>LUGAR</Text>
           </ImageBackground>
           </TouchableOpacity>

           <TouchableOpacity style={styles.tam}>
           <ImageBackground source={hotel} style={styles.img}> 
           <Text style={styles.hotelT}>LUGAR</Text>
           </ImageBackground>
           </TouchableOpacity>

           <TouchableOpacity style={styles.tam}>
           <ImageBackground source={hotel} style={styles.img}> 
           <Text style={styles.hotelT}>LUGAR</Text>
           </ImageBackground>
           </TouchableOpacity>

           <TouchableOpacity style={styles.tam}>
           <ImageBackground source={hotel} style={styles.img}> 
           <Text style={styles.hotelT}>LUGAR</Text>
           </ImageBackground>
           </TouchableOpacity>

           <TouchableOpacity style={styles.tam}>
           <ImageBackground source={hotel} style={styles.img}> 
           <Text style={styles.hotelT}>LUGAR</Text>
           </ImageBackground>
           </TouchableOpacity>
           
            </ImageBackground>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subtitle: {
        fontSize: 32,
        color: 'black',
        paddingLeft: 115,
        marginTop: 93,
    },
    subtitlee: {
        fontSize: 19,
        color: 'black',
        paddingLeft: 115,
    },
    title: {
        fontSize: 22,
        color: 'black',
    },

    img: {
        width: "65%", 
        height: 90, 
        borderRadius:35,  
        marginLeft: 20, 
    },
    tam: {
        width: "80%",
        borderWidth: 1,
        borderRadius: 35,
        backgroundColor: "white",
        borderColor: "black",
        marginTop: 10,
        alignContent:"center",
        marginLeft: 40
    },
    carac: {
        fontSize: 25,
        color: 'black',
        paddingLeft: 95,
    },
    carad: {
        fontSize: 18,
        color: 'black',
    },

    hotelT: {
        height: 70,
        width: 150,
        marginLeft: 200,
        color: 'black',
        fontSize: 25,
        alignContent:"center",
        marginTop: 25,
    },


})
export default AtractivosTuristicos;
=======
import { ImageBackground, Text, Image, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import logo from './assets/Images/logo.png';
import sfondo from './assets/Images/FondoB.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from 'react-native-navbar';
import hotel from './assets/hotel1.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './consts/colors';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { };

export const Menus = ({ navigation }: Props) => {
  return (
 
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
        onPress={() => navigation.navigate('')}>
        <Image source={hotel} style={styles.img}/>
          <Text  style={styles.tex}>LUGAR</Text>
      </TouchableOpacity>
        

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('')}>
        <Image source={hotel} style={styles.img}/>
          <Text  style={styles.tex}>LUGAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Historia')}>
          <Image source={hotel} style={styles.img}/>
          <Text  style={styles.te}>LUGAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Home')}>
          <Image source={hotel} style={styles.img}/>
          <Text  style={styles.tex}>LUGAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Historia')}>
          <Image source={hotel} style={styles.img}/>
          <Text  style={styles.tex}>LUGAR</Text>
      </TouchableOpacity>

      
    
    </ScrollView>
  </ImageBackground>
  

  )
}

const styles = StyleSheet.create({

subtitle: {
    fontSize: 32,
    color: 'black',
    paddingLeft: 115,
    marginTop: 33,
},
subtitlee: {
    fontSize: 19,
    color: 'black',
    paddingLeft: 115,
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
>>>>>>> main
