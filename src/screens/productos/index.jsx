import {Text, View} from "react-native";

import React from "react";
import {styles} from "./styles";

const Productos = ()=>{
    return(
        <View style={styles.container}>
            <Text>Productos</Text>
            <Button title = "Ir a Producto" 
            onPress={()=>{NavigationPreloadManager.navigate("Producto")}}
            />
        </View>
    )
}

export default Productos;