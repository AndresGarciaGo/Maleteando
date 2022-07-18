/* eslint-disable prettier/prettier */
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import Menus from "../screens/Menus";
import InicioSesion from "../screens/InicioSesion";
import Hoteles from '../screens/Hoteles';
import Restaurantes from '../screens/Restaurantes';
import DetallesHoteles from '../screens/DetallesHoteles';
import DetallesPaquetes from '../screens/DetallesPaquetes';
import DetallesAtract from '../screens/DetallesAtract';
import DetallesRest from '../screens/DetallesRest';
import Historia from '../screens/Historia';
import Sumergete from '../screens/Inmersive';
import AtractivosTuristicos from '../screens/AtractivosTuristicos';
import Paquetes from '../screens/Paquetes';
import Pruebas from '../screens/Pruebas';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScanScreen from "../screens/QR";
import COLORS from '../screens/consts/colors';
import Mapa from '../screens/Maps';
import prueba from "../screens/prueba";
import { Linking } from 'react-native';


const Drawer = createDrawerNavigator()

export function DrawerNavigation() {

    

    return(

        
    <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              elevation: 0, 

                  borderBottomWidth: 0, 
              backgroundColor: '#9370db',
              width: 240,
              }}}
        drawerContent = { (props) => <MenuItems  {...props } />}
    >
        

        <Drawer.Screen name = "Menus" component= {Menus} />
        <Drawer.Screen name = "Inicio Sesion" component= {InicioSesion} />
        <Drawer.Screen name="Historia" component={Historia}/>
        <Drawer.Screen name="AtractivosTuristicos" component={AtractivosTuristicos}/>
        <Drawer.Screen name="Paquetes" component={Paquetes}/>
        <Drawer.Screen name="Hoteles" component={Hoteles}  />
        <Drawer.Screen name = "Lector QR" component= {ScanScreen} />
        <Drawer.Screen name="DetallesHoteles" component={DetallesHoteles}  />
        <Drawer.Screen name="DetallesRest" component={DetallesRest}  />
        <Drawer.Screen name="DetallesPaquetes" component={DetallesPaquetes}  />
        <Drawer.Screen name="DetallesAtract" component={DetallesAtract}  />
        <Drawer.Screen name="Restaurantes" component={Restaurantes}  />
        <Drawer.Screen name="Detalles" component={DetallesPaquetes}  />
        <Drawer.Screen name = "Mapa" component={Mapa} />
        <Drawer.Screen name = "Sumergete" component={Sumergete} />
        <Drawer.Screen name = "Pruebas" component={Pruebas} />
        
        
    </Drawer.Navigator>

    )
}

const MenuItems = ( {navigation} ) => {
    return(
        <DrawerContentScrollView
        style= {styles.container}
        >

            <TouchableOpacity
            onPress={() => navigation.navigate('Menus')}>
            <Icon name="home" size={80} style = {{ marginLeft: 60 }}/>
            </TouchableOpacity>



        </DrawerContentScrollView>
    )

}

const styles = StyleSheet.create({

    container: {
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 28,
    },
    buttonContainer:{
        alignItems: 'center',
        backgroundColor:'#9370db' ,
        borderRadius:15,
        marginBottom: 15,
        padding: 15,
   },

   t: {
    color:COLORS.white
   },

})
