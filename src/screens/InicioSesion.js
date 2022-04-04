import React from 'react';
import { ImageBackground, BackTextBoton, Text, Image, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import imagen1 from './assets/Images/fondof.jpg'
import image2 from './assets/Images/logo.png'
import image3 from './assets/Images/cupón.png'

interface Props extends StackScreenProps<any, any> { };

export const InicioSesion = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>

      <ImageBackground source={imagen1} style={{width: '100%', height: '100%', alignContent:'center'}}>
        <Image 
        source={image2}
        style={styles.image2}
      />
        <Text style={styles.subtitle}>BIENVENIDO</Text >
        <Text style={styles.title}>INICIAR SESIÓN</Text >

        <Text style={styles.mc}>Email:</Text>
        <TextInput style={styles.input}
          placeholder='usuario@email.com'>
        </TextInput>


        <Text style={styles.mc}>Contraseña:</Text>
        <TextInput style={styles.input}
          placeholder='********'>
        </TextInput>

        <TouchableOpacity style={styles.con}
          onPress={() => Alert.alert('Left button pressed')} >
          <Text style={styles.con} >¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sesion}>
          <Text style={styles.tsesion} >INICIAR SESIÓN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saltar}
          onPress={() => navigation.navigate('Menus')}>
          <Text style={styles.tsaltar} >SALTAR</Text>
        </TouchableOpacity>

        <Image /*Imagen de Maleta*/
      
        source={image3}
        style={styles.image3}
      /> 
      </ImageBackground>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle: {
    paddingStart: 155,
  },
  title: {
    fontSize: 45,
    color: 'purple',
    fontWeight: 'bold',
    paddingStart: 40

  },
  image2: {

    flexDirection: "column",
    height: 150,
    width: 80,
    marginLeft: 170,
    marginTop: 60,

  },
  image3: {
    height: 120,
    width: 400,
    marginTop: 40,
    marginLeft:17,
  },
  mc: {
    fontSize: 12,
    color: "gray",
    fontWeight: "bold",
    paddingStart: 50,
    marginTop: 5,
  },
  con: {
    fontSize: 13,
    color: "purple",
    marginTop: 3,
    marginLeft: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    width: '65%',
    height: 45,
    marginTop: 7,
    borderRadius: 15,
    backgroundColor: "white",
    marginLeft: 38,
  },

  sesion: {
    width: "50%",
    height: 50,
    borderRadius: 25,
    padding: 10,
    marginTop: 15,
    backgroundColor: "green",
    marginLeft: 95,
  },
  saltar: {
    width: "40%",
    height: 50,
    borderRadius: 25,
    padding: 10,
    backgroundColor: "purple",
    marginTop: 10,
    marginLeft: 116,
  },
  tsesion: {
    fontSize: 15,
    color: "white",
    marginTop: 2,
    marginLeft:38,
  },
  tsaltar: {
    fontSize: 15,
    color: "white",
    marginTop: 2,
    marginLeft:48,
  },


})
export default InicioSesion;