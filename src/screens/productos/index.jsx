import {Button, Text, View} from "react-native";

import React from "react";
import {styles} from "./styles";

const Productos = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text>Productos</Text>
            <Button title = "Ir a Producto" 
                onPress={()=>{navigation.navigate("Producto")}}
            />
        </View>
    )
}

export default Productos;