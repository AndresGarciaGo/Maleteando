import react from "react";
import {View, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from '@react-navigation/stack';

const Header = props => {

<View>

    <TouchableNativeFeedback onPress={() => null}>
        <Icon
            name="bars"
            color="white"
            size= {25}/>
    
    </TouchableNativeFeedback>

</View>
}