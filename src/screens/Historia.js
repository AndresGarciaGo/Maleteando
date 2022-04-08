import React from 'react';
import { ImageBackground, BackTextBoton, Text, Image, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
<<<<<<< HEAD
import sfondo from './assets/Images/segundo-fondo-app.png'
=======
import sfondo from './assets/Images/FondoB.png'
>>>>>>> main

const Historia = () => {
    return (
        <View style={styles.container}>
<ImageBackground source={sfondo} style={{width: '100%', height: '100%', alignContent:'center'}}>
            <Text style={styles.title}>
                HISTORIA
            </Text>
<<<<<<< HEAD
=======

            <Text style={styles.titlem}>
                MALINALCO
            </Text>

>>>>>>> main
            <Text style={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa
                placerat duis ultricies lacus sed. Justo laoreet sit amet cursus site
            </Text>

            <Text style={styles.carac}>
                CARACTERISTICAS
            </Text>
            <Text style={styles.carad}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa
                placerat duis ultricies lacus sed. Justo laoreet sit amet cursus site
            </Text>

        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subtitle: {
        fontSize: 22,
        color: 'black',
<<<<<<< HEAD
=======
        marginTop: 65,
>>>>>>> main
    },
    title: {
        fontSize: 32,
        color: 'black',
<<<<<<< HEAD
        marginTop: 100,
=======
        marginTop: 75,
        paddingLeft: 120,
    },
    titlem: {
        fontSize: 32,
        color: 'black',
        marginTop: 40,
>>>>>>> main
        paddingLeft: 120,
    },
    carac: {
        fontSize: 30,
        color: 'black',
        paddingLeft: 78,
        marginTop: 25,
    },
    carad: {
        fontSize: 18,
        color: 'black',
    },

})
export default Historia;