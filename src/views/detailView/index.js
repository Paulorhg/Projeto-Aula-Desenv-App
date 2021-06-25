import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import MIcon from '@expo/vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';

import styles from "./styles";

import restaurant from "../../../assets/imagemRestaurante.jpg";

export default function Detail({route}) {

    
    const navigation = useNavigation();
    const [ categorias, setCategorias ] = useState([]);
    const {cidade} = route.params;

    function navigateToList(){
        navigation.navigate('List');
    }

    const dados = ["Pizza", "Bares", "Shows", "Festas", "Oriental", "Churrascaria"];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection: "row", alignItems:"center"}}>
                    <TouchableOpacity 
                        onPress={() => navigateToList()}
                        style={styles.returnButton}
                        >
                        <AntDesign name="left" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>comercios </Text>
                </View>
                <View>
                    <TouchableOpacity 
                        onPress={() => {}}
                        style={styles.returnButton}
                        >
                        <MIcon name="share" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View>
                    <Image
                        style={{width: "100%"}}
                        source={restaurant}
                    />  
                </View>
                <View style={styles.icon}>
                    <MIcon
                        name="local-restaurant"
                        color="#eee"
                        size={42}
                        style={{ height: 45}}
                    />
                </View>
                <View style={styles.containerInfo}>
                    <View style={styles.info}>
                        <Text style={{fontWeight:"bold"}}>La Solana</Text>
                        <Text style={{ color: "#EF7676"}}>Carrer Major, 4</Text>
                        <Text>T: 973400709</Text>
                        <Text>De dt. a ds., de 13 a 15.30 h i de 21 a 23 h. Dg., de 13 a 15.30h</Text>
                    </View>
                    <View style={styles.descricao}>
                        <Text>
                        Cuina d' autor i tradiciona catalana elaborada amb productes de la comarca. A favor: Bona 
                        selecció de materies primeres. Situat en una casa pairal tranquil.la i alcolidora. En contra: 
                        Ben sovint és dificil troba-hi taula. És recomanable reservar amb força antelació
                        </Text>
                        <Text style={{width:"90%"}}>
                            Tipus de cucina: Creativa, , mediterrània
                            Preu: De 30 a 40 $
                            Dia de tancament: Dg. nit i dl
                            Menú de temporada: 23 $ (sense beguda)
                        </Text>
                    </View>
                    <View style={styles.icones}>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity 
                                onPress={() => {}}
                                style={styles.buttomIcons}
                                >
                                <MIcon name="location-pin" size={30} color="black" />
                            </TouchableOpacity>
                            <Text>loc</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity 
                                onPress={() => {}}
                                style={styles.buttomIcons}
                                >
                                <MIcon name="email" size={30} color="black" />
                            </TouchableOpacity>
                            <Text>mail</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity 
                                onPress={() => {}}
                                style={styles.buttomIcons}
                                >
                                <MIcon name="phone" size={30} color="black" />
                            </TouchableOpacity>
                            <Text>telefone</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity 
                                onPress={() => {}}
                                style={styles.buttomIcons}
                                >
                                <MIcon name="web" size={30} color="black" />
                            </TouchableOpacity>
                            <Text>web</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}