import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
    },

    header: {
        alignSelf: "stretch",
        justifyContent: "space-between",
        paddingTop: 35,
        paddingBottom: 15,
        backgroundColor: "#EF7676",
        alignItems: "center",
        flexDirection: "row"
    },

    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },

    returnButton:{
        paddingHorizontal: 15
    },

    categorias:{
        flexDirection: "row",
        alignSelf: "stretch",
        backgroundColor: "#404040",
        height: 90,
        justifyContent: "space-around",
        alignItems: "center",
    },

    icons:{
    alignItems: "center"  
    },

    lista: {
        width: "100%",
    },

    item:{
        flexDirection: "row",
        marginBottom: 10,
        borderBottomWidth: 2,
        paddingVertical: 5,
        width: "100%",
        alignItems: "center",
    },

    data:{
        justifyContent: "center",
        alignItems: "center",
        width: "30%"
    },
    estabelecimento:{
        width: "60%",
        justifyContent: "center",

    }
});