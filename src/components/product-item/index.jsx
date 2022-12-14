import { Text, TouchableOpacity, View } from "@react-native";

import React from "react";
import {styles} from "./styles";

const ProductItem = ({item, onSelected}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.item}
                onPress={() =>onSelected(item)}
            >
                <Text style={styles.title}>{item.tile}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.price}>${item.price}</Text>
                    <Text style={styles.weight}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem;