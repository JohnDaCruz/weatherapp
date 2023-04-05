import { View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./apiStyle"

export default function Api() {
    return (
        <View styles={styles.viewCitys}>
            <TextInput
                style={styles.inputCity}
                placeholder="Sua cidade.."
                inputMode="text"
            />
        </View>
    );
}
