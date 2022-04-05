import React from 'react';
import { ImageBackground, Text, Image, View, StyleSheet } from 'react-native';


 const Intro = () => {
  return (
    <View style={styles.container}>

      

      <Text style={styles.title}>MALETEANDO</Text >
      <Text style={styles.title}>POR MÉXICO</Text >



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 45,
    color: 'white',

  },
  image2: {
    height: 400,
    width: 220,

  },


})
export default Intro;