import {Button, FlatList, SafeAreaView, Text, View} from "react-native";

import {CATEGORIES} from "../../constants/data/index";
import {COLORS} from "../../constants/themes/colores";
import { CategoryItem } from "../../components/index";
import React from "react";
import {styles} from "./styles";

const Categorias = ({navigation, route})=>{
    const onSelected =(item)=>{
        navigation.navigate("Productos", {categoryId: item.id , title: item.title});
    };
    const renderItem=({item})=>(
        <CategoryItem item={item} onSelected={onSelected} />
    );
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

export default Categorias;