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
import AtractivosTuristicos from '../screens/AtractivosTuristicos';
import Paquetes from '../screens/Paquetes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScanScreen from "../screens/QR";
import COLORS from '../screens/consts/colors';
import Mapa from '../screens/Maps';



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
        <Drawer.Screen name="Hoteles" component={Hoteles}  />
        <Drawer.Screen name = "reader" component= {ScanScreen} />
        <Drawer.Screen name="DetallesHoteles" component={DetallesHoteles}  />
        <Drawer.Screen name="DetallesRest" component={DetallesRest}  />
        <Drawer.Screen name="DetallesPaquetes" component={DetallesPaquetes}  />
        <Drawer.Screen name="DetallesAtract" component={DetallesAtract}  />
        <Drawer.Screen name="Restaurantes" component={Restaurantes}  />
        <Drawer.Screen name="Detalles" component={DetallesPaquetes}  />
        <Drawer.Screen name="Mapita" component={Mapa}  />
       

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

                                <Text style={styles.t}><Icon name="login" size={15} style = {{ marginRight: 10,}}/> Qr scaner </Text>



                        </TouchableOpacity>

                         <TouchableOpacity
                                style = { styles.buttonContainer}
                                onPress={() => navigation.navigate('Mapita')}>

                                <Text style={styles.t}><Icon name="login" size={15} style = {{ marginRight: 10,}}/> Mapa </Text>



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
