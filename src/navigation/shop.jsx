import { Categorias, Producto, Productos } from '../screens';

import {COLORS} from "../constants/themes/colores";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Categorias'
                screenOptions={{
                    headerStyle:{
                        backgroundColor: COLORS.primary,
                    },
                    headerTintColor: COLORS.accent,
                    presentation: "card",
                    headerTitleStyle:{
                        fontWeight: "bold",
                    },
                }}
            >
                
                <Stack.Screen 
                    name="Categorias" 
                    component={Categorias}
                    options={
                        ({route}) => ({
                            title: route.params,
                        })
                    }
                />
                <Stack.Screen 
                    name="Productos" 
                    component={Productos}
                    options={({route}) => ({
                        title: route.params.name,
                    })}
                />
                <Stack.Screen name="Producto" component={Producto}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator;