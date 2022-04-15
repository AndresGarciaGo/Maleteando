/* eslint-disable prettier/prettier */
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Menus from "../screens/Menus";
import InicioSesion from "../screens/InicioSesion";


const Drawer = createDrawerNavigator()

export function DrawerNavigation() {

    return(


    <Drawer.Navigator> 
    <Drawer.Screen name = "Menus" component= {Menus} />
    <Drawer.Screen name = "Inicio Sesion" component= {InicioSesion} />
    
    </Drawer.Navigator>

    )
}

