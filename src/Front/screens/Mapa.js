import react from "react";
import {View, StyleSheet,Text} from 'react-native';
import MapView from "react-native-maps";

export default function Mapa( ) {
    
return(

 <View style = {styles.bod}>

<MapView
       style={styles.map}
       initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>

 </View>

)};

const styles = StyleSheet.create({

bod: {
    flex: 1,
    alignItems: 'center',
},

});