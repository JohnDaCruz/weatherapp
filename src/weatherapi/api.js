import { View, TextInput, TouchableOpacity, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./apiStyle"
import { API_KEY } from '@env'

export default function Api() {
    const [city, setCity] = useState('')
    function enviar() {
        setCity(city)
        console.log('opa')
    }
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.name)
            })
    }, [])
    return (
        <View styles={styles.viewCitys}>
            <TextInput
                style={styles.inputCity}
                placeholder="Sua cidade.."
                inputMode="text"
                placeholderTextColor={'#fff'}
                value={city}
            />
            <TouchableOpacity onPress={enviar}>
                <Text>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}
