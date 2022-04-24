/* eslint-disable prettier/prettier */
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import Menus from "../screens/Menus";
import InicioSesion from "../screens/InicioSesion";
import HomeScreen from '../screens/Inicio2';
import HomeScreen2 from '../screens/Inicio3';
import DetailsScreen from '../screens/DetailsScreen';
import DetallesPaquetes from '../screens/DetallesPaquetes';
import Historia from '../screens/Historia';
import AtractivosTuristicos from '../screens/AtractivosTuristicos';
import Paquetes from '../screens/Paquetes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScanScreen from "../screens/QR";
import COLORS from '../screens/consts/colors';



const Drawer = createDrawerNavigator()

export function DrawerNavigation() {

    return(


    <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              elevation: 0, // remove shadow on Android

                  borderBottomWidth: 0, // Just in case.
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
        <Drawer.Screen name="Hoteles" component={HomeScreen}  />
        <Drawer.Screen name = "reader" component= {ScanScreen} />
        <Drawer.Screen name="DetailsScreen" component={DetailsScreen}  />
        <Drawer.Screen name="DetallesPaquetes" component={DetallesPaquetes}  />
        <Drawer.Screen name="Restaurantes" component={HomeScreen2}  />
        <Drawer.Screen name="Detalles" component={DetallesPaquetes}  />

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
            <Icon name="account-circle" size={120} style = {{ marginLeft: 60 }}/>
            </TouchableOpacity>


            <TouchableOpacity
                    style = { styles.buttonContainer}
                    onPress={() => navigation.navigate('Inicio Sesion')}>

                    <Text style={styles.t}><Icon name="login" size={15} style = {{ marginRight: 10, }}/> Inicio Sesion </Text>



            </TouchableOpacity>
                        <TouchableOpacity
                                style = { styles.buttonContainer}
                                onPress={() => navigation.navigate('reader')}>

                                <Text style={styles.t}><Icon name="login" size={15} style = {{ marginRight: 10,}}/> qr scaner </Text>



                        </TouchableOpacity>

                         <TouchableOpacity
                                style = { styles.buttonContainer}
                                onPress={() => navigation.navigate('reader')}>

                                <Text style={styles.t}><Icon name="login" size={15} style = {{ marginRight: 10,}}/> Menus </Text>



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
