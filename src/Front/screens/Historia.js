import React from 'react';
import { ImageBackground, BackTextBoton, StatusBar,Text, Image, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import CasaC from './assets/CasaC.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './consts/colors';
import { ScrollView } from 'react-native-gesture-handler';

const Historia = () => {
    return (
            <ScrollView >
        <View style={styles.container}>
        <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="rgba(0,0,0,0)"
              />
            <ImageBackground style={styles.headerImage} source={CasaC}>
                    <View style={styles.header}>
                    </View>
            </ImageBackground>

        <View style={styles.header}>
            <View style={{ paddingBottom: 15 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                Historia
                </Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>de </Text>
                <Text
                style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.primary }}>
                Malinalco
            </Text>
          </View>
        </View>
        <Icon name="menu-book" size={38} color={COLORS.primary} />
</View>
            <View style={[styles.p]}>

<Text style={ styles.lorem }>
Es un Pueblo Mágico que te sorprenderá por todo lo que tiene para ofrecer y su excelente servicio. 
Es un extraordinario valle lleno de abundante vegetación, una Zona Arqueológica llena de historia, calles empedradas que te invitarán a dar un paseo por este pueblo.
haciéndote sentir fascinado con sus coloridas fachadas y sus establecimientos con grandiosas vistas únicas del Valle de Malinalco.
</Text>
<Text style={ styles.lorem }>
Algunas de las fiestas típicas de Malinalco, que son un importante parte de la esencia de este Pueblo Mágico son: Semana Santa: Se celebra entre marzo y abril y se celebra con fiestas y procesiones. 
Erección del Municipio: Se celebra el 5 de agosto. “Charreadas”, “Jaripeos ”, se realizan bailes, música, ballets folclóricos, orquestas, etc.</Text>

            <View style={ styles.carac }>
            <Text style={styles.carac}>
                Caracteristicas
            </Text>
            <Icon name="info-outline" size={38} color={COLORS.primary} />
            </View>
            <Text style={styles.lorem}>
            Algunos de los atractivos y productos turísticos que tiene este maravilloso Pueblo Mágico que no te puedes perder son:
            •Zona Arqueológica de Cuauhtinchan.
            •Parroquia y Antigua Convento del “Divino Salvador”.
            •Dr. Museo Universitario Luis Mario Schneider.
            •Los Bichos de Malinalco, Museo Vivo.
            •Objetos artesanales tallados en madera.
            •Objetos artesanales de rebozo.
            </Text>
            </View>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
      p:{
        flex:1,
      },
    headerImage: {

        height: 400,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: 'hidden',
      },
    header: {

        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
      },
    subtitle: {
        fontSize: 22,
        color: 'black',
        marginTop: 65,
    },
    title: {
        fontSize: 32,
        color: 'black',
        marginTop: 75,
        paddingLeft: 120,
    },
    titlem: {
        fontSize: 32,
        color: 'black',
        marginTop: 40,
        paddingLeft: 120,
    },
    carac: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    textAlign: 'left',
    justifyContent: 'space-between',
    color: COLORS.primary,
    marginHorizontal: 10,
    },
        lorem: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        flexDirection: 'row',
        textAlign: 'left',
        marginHorizontal: 15,
        },
    carad: {
        fontSize: 18,
        color: 'black',
    },

})
export default Historia;