import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

   
export default function Maps(){

  const [qr1, setqr1] = React.useState ({
    latitude: 18.946448967924447,
    longitude: -99.49747539486961,
  });

  const [qr2, setqr2] = React.useState ({
    latitude: 18.949707154923694, 
    longitude: -99.48723582283196,
  });

  const [qr3, setqr3] = React.useState ({
    latitude: 18.95002570127571, 
    longitude: -99.49536166252453,
  });

    return (

        <View >

  <MapView
  style={styles.map}
    initialRegion={{
      latitude: qr1.latitude,
      longitude: qr1.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    >
      <Marker
      title = "Qr1"
      description='Orientacion del primer codigo Qr'
      coordinate={qr1}
      />
      <Marker
      title = "Qr2"
      description='Orientacion del primer codigo Qr'
      coordinate={qr2}
      />
      <Marker
      title = "Qr3"
      description='Orientacion del primer codigo Qr'
      coordinate={qr3}
      />


    </MapView>

    
      </View>

    );

}

const styles = StyleSheet.create({
    map:{
    width:'100%',
    height:'100%',
    }

});

