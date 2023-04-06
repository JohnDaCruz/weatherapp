import { View } from 'react-native'
import styles from "./apiDetailsStyle"
import React, { useState, useEffect } from 'react'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function ApiDetails() {
    return (
        <View style={styles.apiDetailsContainer}>
            <MaterialCommunityIcons name="temperature-celsius" size={20} color="white" style={{ marginRight: 100 }} />
            <Feather name="wind" size={20} color="white" />
        </View>
    )
}

