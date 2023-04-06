import { View, TextInput, } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./apiStyle"
import { API_KEY } from '@env'

export default function Api() {

    const [city, setCity] = useState('New york')

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                var temp = data.main.temp
                var city = data.name
                console.log(temp)
                console.log(city)

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
        </View>
    );
}
