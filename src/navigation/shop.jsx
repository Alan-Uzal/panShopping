import { Categorias, Producto, Productos } from '../screens';

import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Categorias'>
                <Stack.Screen name="Categorias" component={Categorias}/>
                <Stack.Screen name="Productos" component={Productos}/>
                <Stack.Screen name="Producto" component={Producto}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator;