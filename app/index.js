import {
  View,
  Image,
  Keyboard,
  Pressable
} from "react-native";
import { StatusBar } from "expo-status-bar";
//import { Link } from "expo-router";
//import * as Location from 'expo-location';
//import * as Notifications from 'expo-notifications';
import styles from "./style";

//Import de componentes
import BemVindo from "../src/bemVindo/bemVindo.js"
import Api from "../src/weatherapi/api"

export default function Page() {
  return (

    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <StatusBar style={"light"} backgroundColor="#008DE3" />

      <Image
        source={require('../src/images/sun.png')}
        style={{
          width: '100%',
          height: 820,
        }}
      />

      <View style={styles.bvapi}>
        <BemVindo />
        <Api />
      </View>

    </Pressable>
  );
}