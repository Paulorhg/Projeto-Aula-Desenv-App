import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import MIcon from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MCIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from "./styles";

export default function List({route}) {

    const navigation = useNavigation();
    const [ categorias, setCategorias ] = useState([]);

    function navigateToDetail(estabelecimentos){
        navigation.navigate('Detail', {
            estabelecimentos: estabelecimentos
        });
    }

    const dados = [
        {
            id: "1",
            dia: "27",
            mes: "DEC",
            diaSemana: "Sunday",
            nome: "Festa Major Bellpuig",
            endereco: "",
            horario:""
        }, 
        {
            id: "2",
            dia: "30",
            mes: "DEC",
            diaSemana: "Wednesday",
            nome: "acte que ha creat el joan",
            endereco: "Plaça Ramon Bertran, 10",
            horario:"12:00"
        }, 
        {
            id: "3",
            dia: "30",
            mes: "DEC",
            diaSemana: "Wednesday",
            nome: "acte que ha creat el joan",
            endereco: "Plaça Ramon Bertran, 10",
            horario:"12:00"
        }, 
        {
            id: "4",
            dia: "30",
            mes: "DEC",
            diaSemana: "Wednesday",
            nome: "acte que ha creat el joan",
            endereco: "Plaça Ramon Bertran, 10",
            horario:"12:00"
        }, 
        {
            id: "5",
            dia: "30",
            mes: "DEC",
            diaSemana: "Wednesday",
            nome: "acte que ha creat el joan",
            endereco: "Plaça Ramon Bertran, 10",
            horario:"12:00"
        }, 
        {
            id: "6",
            dia: "30",
            mes: "DEC",
            diaSemana: "Wednesday",
            nome: "acte que ha creat el joan",
            endereco: "Plaça Ramon Bertran, 10",
            horario:"12:00"
        }, 
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => {}}
                    style={styles.returnButton}
                    >
                    <MIcon name="table-rows" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Agenda</Text>
                <TouchableOpacity 
                    onPress={() => {}}
                    style={styles.returnButton}
                    >
                    <MIcon name="touch-app" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.categorias}>
                <TouchableOpacity 
                    onPress={() => ""}
                    style={styles.icons}
                >
                    <MIcon
                        name="local-movies"
                        color="#eee"
                        size={42}
                        style={{ height: 45 }}
                    />
                    <Text style={{ color:"#eee" }}>Cinema</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => ""}
                    style={styles.icons}
                > 
                    <Ionicons
                        name="ios-basketball"
                        color="#eee"
                        size={42}
                        style={{ height: 45 }}
                    />
                    <Text style={{ color:"#eee" }}>Esportes</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => ""}
                    style={styles.icons}
                >
                    <Ionicons
                        name="musical-note"
                        color="#eee"
                        size={42}
                        style={{ height: 45 }}
                    />
                    <Text style={{ color:"#eee" }}>Música</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => ""}
                    style={styles.icons} 
                >
                    <MCIcons
                        name="baby-face-outline"
                        color="#eee"
                        size={42}
                        style={{ height: 45 }}
                    />
                    <Text style={{ color:"#eee" }}>Nens i Nenes</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{width: "100%"}}>
                <FlatList
                    data={dados}
                    style={styles.lista}
                    numColumns={1}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity 
                                onPress={() => navigateToDetail(item.nome)}
                            >
                                <View style={styles.item}>
                                    <View style={styles.data}>
                                        <Text>{item.mes}</Text>
                                        <Text style={{fontSize: 20, fontWeight: "bold"}}>{item.dia}</Text>
                                        <Text>{item.diaSemana}</Text>
                                    </View>
                                    <View style={styles.estabelecimento}>
                                        <Text style={{ fontWeight: "bold"}}>{item.nome}</Text>
                                        <Text style={{ color: "#EF7676"}}>{item.endereco}</Text>
                                        <Text>{item.horario}</Text>
                                    </View>
                                    <AntDesign name="right" size={24} color="#BEBEBE" />
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </ScrollView>
        </View>
    );
}