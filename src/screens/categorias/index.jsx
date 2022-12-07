import {Button, Text, View} from "react-native";

import React from "react";
import {styles} from "./styles";

const Categorias = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text>Categorias</Text>
            <Button title = "Ir a Productos" 
                onPress={()=>{navigation.navigate("Productos")}}
            />
        </View>
    )
}

export default Categorias;