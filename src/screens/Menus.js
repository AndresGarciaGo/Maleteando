import React from 'react';
import { ImageBackground, Text, Image, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import sfondo from './assets/Images/segundo-fondo-app.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from 'react-native-navbar';
import hotel from './assets/hotel1.jpg'

interface Props extends StackScreenProps<any, any> { };

export const Menus = ({ navigation }: Props) => {
  return (
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
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Historia')}>
          <ImageBackground source={hotel} style={styles.img}>
        <Text style={styles.te}>GASTRONOMIA</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Home')}>
          <ImageBackground source={hotel} style={styles.img}>
        <Text style={styles.te}>HOSPEDAJE</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cont}
        onPress={() => navigation.navigate('Historia')}>
          <ImageBackground source={hotel} style={styles.img}>
        <Text style={styles.te}>PAQUETES</Text>
        </ImageBackground>
      </TouchableOpacity>
      </SafeAreaView>
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

},

  te: {
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
    backgroundColor: "white",
    borderColor: "black",
    marginTop: 10,
    alignContent:"center",
    marginLeft: 45,
  },


})
export default Menus;