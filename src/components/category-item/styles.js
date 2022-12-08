import { COLORS } from "../../constants/themes/colores";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 150,
    },
    contentContainer:{
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        color: "black",
    },
    title:{
        fontSize: 19,
        fontWeight: "bold",
        color: COLORS.text,
    },
});