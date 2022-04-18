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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa
                placerat duis ultricies lacus sed. Justo laoreet sit amet cursus site
            </Text>
            <View style={ styles.carac }>
            <Text style={styles.carac}>
                Caracteristicas
            </Text>
            <Icon name="info-outline" size={38} color={COLORS.primary} />
            </View>
            <Text style={styles.lorem}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa
                placerat duis ultricies lacus sed. Justo laoreet sit amet cursus site
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
        marginTop: 10,
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