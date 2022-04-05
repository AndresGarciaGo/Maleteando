import React from 'react';
import 'react-native-gesture-handler';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './src/screens/Intro';
import Menus from './src/screens/MenuScreen/Menus';
import InicioSesion from './src/screens/InicioSesion';
import HomeScreen from './src/screens/MenuScreen/Inicio2';
import DetailsScreen from './src/screens/DetailsScreen';
import Historia from './src/screens/MenuScreen/Historia';
import AtractivosTuristicos from './src/screens/MenuScreen/AtractivosTuristicos';
//import Drawer from './src/DrawerNavigation'
const Stack = createStackNavigator();
const Navigation = () => {
  return (

    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="InicioSesion" component={InicioSesion} />
        <Stack.Screen name="Menus" component={Menus} />
        <Stack.Screen name="Historia" component={Historia} />
        <Stack.Screen name="atractivos" component={AtractivosTuristicos} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );
};

export default Navigation;

//EL CODGIGO AVANZA CON APP.JS NO CON ESTA CARPETA