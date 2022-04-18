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
import DetailsScreen2 from '../screens/DetailsScreen2';
import Historia from '../screens/Historia';
import AtractivosTuristicos from '../screens/AtractivosTuristicos';
import Paquetes from '../screens/Paquetes';
import Icon from 'react-native-vector-icons/MaterialIcons';




const Drawer = createDrawerNavigator()

export function DrawerNavigation() {

    return(


    <Drawer.Navigator
        drawerContent = { (props) => <MenuItems  {...props } />}
    >

        <Drawer.Screen name = "Menus" component= {Menus} />
        <Drawer.Screen name = "Inicio Sesion" component= {InicioSesion} />
        <Drawer.Screen name="Historia" component={Historia}/>
        <Drawer.Screen name="Atractivos Turisticos" component={AtractivosTuristicos}/>
        <Drawer.Screen name="Paquetes" component={Paquetes}/>
        <Drawer.Screen name="Hoteles" component={HomeScreen}  />
        <Drawer.Screen name="Restaurantes" component={HomeScreen2}  />
        <Drawer.Screen name="DetailsScreen" component={DetailsScreen}  />
        <Drawer.Screen name="Detalles" component={DetailsScreen2}  />

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

                    <Text><Icon name="login" size={15} style = {{ marginRight: 10 }}/> Inicio Sesion </Text>



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


   }

})
