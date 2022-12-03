import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Categorias, Producto, Productos } from './screens';

import React from 'react';
import {ShopNavigator} from "./navigation/shop";

export default function App() {
  return <ShopNavigator/>;
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems: "center",
  },
})