import { View, TextInput, Text } from "react-native";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import React, { useState, useEffect } from "react";
import styles from "./apiStyle"
import { API_KEY } from '@env'

export default function Api() {

    const [city, setCity] = useState('New york');
    const [wind, setWind] = useState('0');
    const [temp, setTemp] = useState('0')

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setTemp(data.main.temp)
                setWind(data.wind.speed)
            })
    }, [city])


    return (
        <View styles={styles.viewCitys}>
            <TextInput
                style={styles.inputCity}
                placeholder="Sua cidade.."
                inputMode="text"
                placeholderTextColor={'#fff'}
                value={city}
                onChangeText={text => setCity(text)}
            />
            <View style={styles.apiDetailsContainer}>
                <MaterialCommunityIcons name="temperature-celsius" size={20} color="white" />
                <Text style={{ color: '#fff' }}>{temp}</Text>
            </View>
            <View style={styles.apiDetailsContainer2}>
                <Feather name="wind" size={20} color="white" />
                <Text style={{ color: '#fff' }}>{wind}</Text>
            </View>
        </View>

    );

}


