import React from 'react';
import { Linking } from 'react-native';
const Dturisticos = [
    {
      id: '1',
      name: 'Cascadas del Obraje ',
      Observaciones: 'Horario de 10:30 a 14:00.',
      location: 'Ocuilan de Arteaga, Estado de México.',
      Mediosdeacceso: 'Acceso al sitio a pie',
      Visitantes: '479 en el mes de febrero 2022.', 
      image: require('../assets/CascadadelOberaje.png'),
      Características: 'Sitio natural conformado por tres caídas de agua cristalina acompañadas de un paisaje boscoso, dónde se puede practicar rápel en cascada y saltos en pozas de agua',
      url: 'https://pano.autodesk.com/pano.html?mono=jpgs/995a9ce3-ab61-41e6-8ffc-dcf6d7fb4744&version=2',
    },

    {
      id: '2',
      name: 'Cañón garganta de la iguana',
      Observaciones: 'Se recomienda levarx buen calzado por la longitud de la caminata para evitar lesiones.', 
      location: 'San Pedro Chichicasco Malinalco.',
      Mediosdeacceso: 'Se encuentra a 40 minutos de centro de Malinalco a 30 minutos de la cabecera municipal de Malinalco',
      Visitantes: '--',
      image: require('../assets/Cañóngarganta.png'),
      image1: require('../assets/Convento.jpg'),
      Características: 'El Cañón garganta de la iguana, es una zona ecológica, que cuenta con dos toboganes naturales y pozas de alturas diferentes (entre dos y 17 metros de profundidad)',
      url: 'https://pano.autodesk.com/pano.html?mono=jpgs/763c080d-0835-4251-bd85-196cea84834a&version=2',
    },

    {
      id: '3',
      name: 'Cerro de los encinos',
      Observaciones: 'La mejor opción es visitarlo durante época de lluvias.',
      location: 'Malinalco, Edo. Mex',
      Mediosdeacceso: 'Acceso al sitio a pie',
      Visitantes: '--',
      image: require('../assets/Cerrodelosencinos.png'),
      Características: 'Este cerro cuenta con varios senderos para practicar trekkig, uno de los principales miradores es conocido como la mesita',
      url: 'https://pano.autodesk.com/pano.html?mono=jpgs/a8b9529a-4628-4437-ae89-88a286538548&version=2',
    },

    {
      id: '4',
      name: 'Cañón de las bocas ',
      location: ': Malinalco, Edo. de Méx.',
      Mediosdeacceso: 'colinda al Norte con Corozal y Naranjito, al Este con Comerío y Cidra, al Sur con Aibonito y Coamo y al Oeste con Orocovis.',
      Visitantes: ' 4560 visitantes mensuales promedio',
      image: require('../assets/Cañóndelasbocas.png'),
      Características: 'Tesoro ecológico que contiene impresionantes caídas de agua, cuevas, sumideros charcas, además de una flora y fauna sin igual. El mismo comprende un área total de 1,205.68 cuerdas, siendo 760.79 del municipio Comerío y 444.89 de Barranquitas',
    },
  
    {
      id: '5',
      name: 'Paraje las Truchas',
      Observaciones: 'Información de contacto, teléfono: 7221728348',
      location: 'Sierra de Taxco No. 2, San Andrés, 52440 Malinalco, Méx.',
      Mediosdeacceso: 'desde la CDMX la ruta más rápida es por la carretera Toluca Mexico/México 57D',
      Visitantes: '1030 visitantes mensuales promedio',
      image: require('../assets/Parajelastruchas.png'),
      Características: 'conocido comúnmente como “Las Truchas” dado que en este lugar la preparación de trucha es la especialidad. \n Cuenta con un criadero en donde además de poder adquirirla, el público puede pescar sus propias truchas',
    },

    {
    id: '6',
      name: 'Museo Dr. Luis Mario Schneider',
      Observaciones: 'Se puede visitar a través de un recorrido virtual disponible en la página: http://web.uaemex.mx/dcultur/MUSEOS/museosv/mali/inicio.html Horario de 10:00-17:00.',
      location: 'Amajac, Agustín Melgar esquina, Malinalco, Méx.',
      Mediosdeacceso: 'Carretera México-Toluca, carretera Toluca-Chalma, das vuelta en avenida del Panteón en el barrio de San Juan Malinalco, a la Izquierda en avenida Morelos, después a la derecha en avenida Hidalgo, a la izquierda en Emilio Carranza y a la derecha en Amajac',
      Visitantes: '--',
      image: require('../assets/MuseoUniversitario.png'),
      Características: 'El museo difunde la cultura, las costumbres y tradiciones del municipio de Malinalco, está integrado por siete salas, temporales y de exposición permanente, dentro de esta última se ubican las salas de: fiestas, tiempo de lluvias, corte estratigráfico, inframundo, tiempo de secas y la del Cuauhcalli. ',
    },

  ];
  export default Dturisticos;
  