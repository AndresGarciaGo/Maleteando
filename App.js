import React from 'react';
import { } from 'react-native';
import {DrawerNavigation} from './src/Front/navigation/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

/*ComponentDidMounts (){
  fetch('')
}
.then(response => {
  console.log(response);
})*/
const App = () => {
  
  return (

 <NavigationContainer>
   <DrawerNavigation/>
 </NavigationContainer>


  );
};

export default App;