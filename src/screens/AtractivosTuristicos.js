import React from 'react';
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
