import { View, TextInput, Text } from "react-native";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import React, { useState, useEffect } from "react";
import styles from "./apiStyle"
import { API_KEY } from '@env'

export default function Api() {

    const [city, setCity] = useState('Brasília');
    const [wind, setWind] = useState('0');
    const [temp, setTemp] = useState('0')

    useEffect(() => {
        try {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
                .then((res) => res.json())
                .then((data) => {
                    setTemp(data.main.temp)
                    setWind(data.wind.speed)
                    console.log(data.main.temp)
                    console.log(data.wind.speed)
                    console.log(data.name)
                })
                .catch((Error) => {
                    console.error('Erro no catch fetch' + Error)
                })
        }
        catch {
            console.error('Erro no catch externo' + Error)
        }
    }, [city])


    return (
        <View styles={styles.viewCitys}>
            <TextInput
                style={styles.inputCity}
                placeholder="Sua cidade.."
                inputMode="text"
                placeholderTextColor={'#fff'}
                value={city}
                textAlign="center"
                onChangeText={(text) => setCity(text)}
            />
            <View style={styles.apiDetailsContainer}>
                <MaterialCommunityIcons name="temperature-celsius" size={20} color="white" />
                <Text style={{ color: '#fff' }}> {temp}</Text>
            </View>
            <View style={styles.apiDetailsContainer2}>
                <Feather name="wind" size={20} color="white" />
                <Text style={{ color: '#fff' }}> {wind} m/s</Text>
            </View>
        </View>

    );

}


