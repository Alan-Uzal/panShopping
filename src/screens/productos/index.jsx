import {Button, Text, View} from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { PRODUCTS } from "../../constants/data/products";
import {ProductItem} from "../../components/product-item";
import React from "react";
import {styles} from "./styles";

const Productos = ({navigation, route})=>{
    const {categoryId, title} = route.params;

    const filteredProducts = PRODUCTS.filter(product => product.categoryId===categoryId)

    const onSelected = (item)=>{
        navigation.navigate("ProductDetails", {item});
    }
    
    const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected}/>
    return(
        <FlatList
            data={filteredProducts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.container}
        />
    )
}

export default Productos;