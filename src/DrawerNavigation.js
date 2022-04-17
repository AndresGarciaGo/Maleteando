/* eslint-disable prettier/prettier */
import React from 'react'
import {createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from './screens/Inicio2'
import HomeScreen2 from './screens/Inicio3'


const Drawer = createDrawerNavigator()

function DrawerNavigation() {



    return(

<Drawer.Navigator>
<Drawer.Screen name = "HomeScreen" component= { HomeScreen } />
<Drawer.Screen name = "HomeScreen2" component= { HomeScreen2 } />
</Drawer.Navigator>



    )

}
export default Drawer