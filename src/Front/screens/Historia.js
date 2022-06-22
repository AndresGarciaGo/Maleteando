import React, { useState } from 'react';
import { ImageBackground,Dimensions, BackTextBoton, StatusBar, Text, Image, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import CasaC from './assets/CasaC.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './consts/colors';
import font from '../Font/Times New Roman/times_roman.ttf';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const [images, setimages] = useState([
  require('./assets/pa1.png'),
  require('./assets/pa2.png'),
  require('./assets/Cañóndelasbocas.png'),
  require('./assets/pa3.png'),
  require('./assets/pa4.png')
])

class Historia extends React.Component {
  render() {
  let screenWidth = Dimensions.get('window').width
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="rgba(0,0,0,0)"
          />
          <ScrollView style= {{flex:1, width:screenWidth}}

           barStyle="light-content"
           translucent
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={true}

          >{


              <FlatList
                data={images}
                key={"1"}
                numColumns={5}
                renderItem={({ item }) => (
                  <Image
                    source={item}
                    style={styles.headerImage}
                    keyExtractor={(item) => item.id}
                  />
                )}
              />
            }
          </ScrollView>

          <View style={styles.header}>

            <View style={{ paddingBottom: 15 }}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: "justify" }}>
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

            <Text style={styles.lorem}>
              Es un Pueblo Mágico que te sorprenderá por todo lo que tiene para ofrecer y su excelente servicio.
              Es un extraordinario valle lleno de abundante vegetación, una Zona Arqueológica llena de historia, calles empedradas que te invitarán a dar un paseo por este pueblo.
              haciéndote sentir fascinado con sus coloridas fachadas y sus establecimientos con grandiosas vistas únicas del Valle de Malinalco.
            </Text>
            <Text style={styles.lorem}>
              Algunas de las fiestas típicas de Malinalco, que son un importante parte de la esencia de este Pueblo Mágico son: Semana Santa: Se celebra entre marzo y abril y se celebra con fiestas y procesiones.
              Erección del Municipio: Se celebra el 5 de agosto. “Charreadas”, “Jaripeos ”, se realizan bailes, música, ballets folclóricos, orquestas, etc.</Text>

            <View style={styles.carac}>
              <Text style={styles.carac}>
                Caracteristicas
              </Text>
              <Icon name="info-outline" size={38} color={COLORS.primary} />
            </View>
            <Text style={styles.lorem}>
              Algunos de los atractivos y productos turísticos que tiene este maravilloso Pueblo Mágico que no te puedes perder son:
            </Text>
            <Text style={styles.lorem}>
              •Zona Arqueológica de Cuauhtinchan.
            </Text>
            <Text style={styles.lorem}>
              •Parroquia y Antigua Convento del “Divino Salvador”.
            </Text>
            <Text style={styles.lorem}>
              •Dr. Museo Universitario Luis Mario Schneider.
            </Text>
            <Text style={styles.lorem}>
              •Los Bichos de Malinalco, Museo Vivo.
            </Text>
            <Text style={styles.lorem}>
              •Objetos artesanales tallados en madera.
            </Text>
            <Text style={styles.lorem}>
              •Objetos artesanales de rebozo.
            </Text>
          </View>

        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  p: {
    flex: 1,
  },
  headerImage: {
    flex:1,
    width:Dimensions.get('window').width,
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },

  back: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
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
    fontFamily: 'times_roman',
    marginBottom: 10,
    flexDirection: 'row',
    textAlign: 'justify',
    marginHorizontal: 15,
  },
  carad: {
    fontSize: 18,
    color: 'black',
  },

})
export default Historia;