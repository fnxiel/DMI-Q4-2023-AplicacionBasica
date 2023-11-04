//React native
import React from "react";
import {Text} from 'react-native';

//Componentes
import Home from "./Home";
import Setting from "./Setting";
import Listado from "./Listado";
import Grid from "./Grid";
import Mapas from "./Mapas";

//Librerias
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let nombreIcono;

            switch (route.name) {
                case "Home":
                    nombreIcono = focused ? "home" : "home-outline"
                    break;

                case "Contactos":
                    nombreIcono = focused ? "person" : "person-outline"
                    break;
            
                default:
                    nombreIcono = focused ? "settings" : "settings-outline"
                    break;
            }
            
            return <Icon name={nombreIcono} size={size} color={color} ></Icon>
        }
    })}
    >
      <Tab.Screen name="Home" component={Mapas} 
      />
      <Tab.Screen name="Contactos" component={Grid} />
      <Tab.Screen name="Settings" component={Listado} />
    </Tab.Navigator>
  );
}

export default Tabs