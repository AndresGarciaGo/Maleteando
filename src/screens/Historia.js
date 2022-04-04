import React from 'react';
import { ImageBackground, BackTextBoton, Text, Image, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import sfondo from './assets/Images/segundo-fondo-app.png'

const Historia = () => {
    return (
        <View style={styles.container}>
<ImageBackground source={sfondo} style={{width: '100%', height: '100%', alignContent:'center'}}>
            <Text style={styles.title}>
                HISTORIA
            </Text>
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
    },
    title: {
        fontSize: 32,
        color: 'black',
        marginTop: 100,
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