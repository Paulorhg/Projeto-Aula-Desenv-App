import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        // alignItems: "center",
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
    
    returnButton:{
        marginHorizontal: 15,
    },

    textHeader: {
        fontSize: 20,
        color:"white"
    },

    icon:{
        height: 75, 
        width: 75, 
        backgroundColor: "#EF7676",
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 40,
        marginLeft: 20,
        marginTop: -40
    },

    containerInfo:{
        justifyContent:"center",
        alignItems: "center",
        width: "100%",
        marginTop: 20
    },

    info:{
        justifyContent: "center",
        alignItems: "flex-start",
        width: "70%",
        paddingBottom: 35,
        borderBottomWidth: 1
    },

    descricao:{
        width: "70%",
        alignItems: "center",
        paddingBottom: 45,
        borderBottomWidth: 1
    },

    icones:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "70%",
        marginVertical: 10
    },

    buttomIcons:{
        height: 50,
        width: 50,
        borderWidth: 1,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center"
    }
});