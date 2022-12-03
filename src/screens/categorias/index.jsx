import {Button, Text, View} from "react-native";

import React from "react";
import {styles} from "./styles";

const Categorias = ()=>{
    return(
        <View style={styles.container}>
            <Text>Categorias</Text>
            <Button title = "Ir a Productos" 
            onPress={()=>{NavigationPreloadManager.navigate("Productos")}}
            />
        </View>
    )
}

export default Categorias;