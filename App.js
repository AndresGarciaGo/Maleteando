import 'react-native-gesture-handler'
import React from 'react';
import { } from 'react-native';
import {DrawerNavigation} from './src/Front/navigation/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './src/Front//screens/Intro';
import Menus from './src/Front/screens/Menus';
import InicioSesion from './src/Front/screens/InicioSesion';
import HomeScreen from './src/Front/screens/Inicio2';
import HomeScreen2 from './src/Front/screens/Inicio3';
import DetailsScreen from './src/Front/screens/DetailsScreen';
import Historia from './src/Front/screens/Historia';
import AtractivosTuristicos from './src/Front/screens/AtractivosTuristicos';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const App = () => {
  
  return (

    
 <NavigationContainer>
   <DrawerNavigation/>
 </NavigationContainer>

  );
};

export default App;