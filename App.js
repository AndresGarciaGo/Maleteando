import React from 'react';
import {} from 'react-native';
import {DrawerNavigation} from './src/Front/navigation/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LogBox } from 'react-native';


const App = () => {
  
  return (

 <NavigationContainer>
   <DrawerNavigation/>
 </NavigationContainer>


  );
};

export default App;