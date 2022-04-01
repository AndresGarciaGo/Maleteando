import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/Inicio2';
import COLORS from './src/screens/consts/colors';
import DetailsScreen from './src/screens/DetailsScreen';
/*import Drawer from './src/DrawerNavigation'*/
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>

      <StatusBar backgroundColor={COLORS.primary} barStyle="ligth content" />

      <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
