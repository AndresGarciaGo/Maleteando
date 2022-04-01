import React from 'react'
import {createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from './screens/Inicio2'

const Drawer = createDrawerNavigator()

function DrawerNavigation() {



    return(

<Drawer.Navigator>
<Drawer.Screen name = "HomeScreen" component= { HomeScreen } />
</Drawer.Navigator>



    )

}
export default Drawer