/* eslint-disable prettier/prettier */
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import React from 'react';
import { StyleSheet} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import Menus from "../screens/Menus";
import InicioSesion from "../screens/InicioSesion";
import HomeScreen from '../screens/Inicio2';
import HomeScreen2 from '../screens/Inicio3';
import DetailsScreen from '../screens/DetailsScreen';
import DetailsScreen2 from '../screens/DetailsScreen2';
import Historia from '../screens/Historia';
import AtractivosTuristicos from '../screens/AtractivosTuristicos';



const Drawer = createDrawerNavigator()

export function DrawerNavigation() {

    return(


    <Drawer.Navigator> 
    <Drawer.Screen name = "Menus" component= {Menus} />
    <Drawer.Screen name = "Inicio Sesion" component= {InicioSesion} />
    <Drawer.Screen name="Historia" component={Historia}  options={{drawerItemStyle:{display:"none"}}}/>
    <Drawer.Screen name="Atractivos Turisticos" component={AtractivosTuristicos} options={{drawerItemStyle:{display:"none"}}}/>
    <Drawer.Screen name="Hoteles" component={HomeScreen} options={{drawerItemStyle:{display:"none"}}} />
    <Drawer.Screen name="Restaurantes" component={HomeScreen2} options={{drawerItemStyle:{display:"none"}}} />
    <Drawer.Screen name="DetailsScreen" component={DetailsScreen} options={{drawerItemStyle:{display:"none"}}} />
    <Drawer.Screen name="Detalles" component={DetailsScreen2} options={{drawerItemStyle:{display:"none"}}} />
    
    </Drawer.Navigator>

    )
}
/* no terminado
const styles = StyleSheet.create({

    buttoncontainer: {
        backgrounColor: "grey"
    },

})*/
