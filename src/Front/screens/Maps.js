import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function Map(){

    return (

        <View >
        <Text>
        Hola
        </Text>
  <MapView
  style={styles.map}
    initialRegion={{
      latitude: 18.946448967924447,
      longitude: -99.49747539486961,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
        </View>

    );

}

const styles = StyleSheet.create({
    map:{
    width:'100%',
    height:'100%',
    }


});

