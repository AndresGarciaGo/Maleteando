import React from 'react';
import 'react-native-gesture-handler';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './src/screens/Intro';
import Menus from './src/screens/Menus';
import InicioSesion from './src/screens/InicioSesion';
import HomeScreen from './src/screens/Inicio2';
import HomeScreen2 from './src/screens/Inicio3';
import DetailsScreen from './src/screens/DetailsScreen';
import Historia from './src/screens/Historia';
import AtractivosTuristicos from './src/screens/AtractivosTuristicos';
const Stack = createStackNavigator();
const App = () => {
  
  return (

    
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="InicioSesion" component={InicioSesion} />
        <Stack.Screen name="Menus" component={Menus} />
        <Stack.Screen name="Historia" component={Historia} />
        <Stack.Screen name="atractivos" component={AtractivosTuristicos} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={HomeScreen2} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );
};

export default App;