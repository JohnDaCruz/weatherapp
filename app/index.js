import {
  View,
  Image,
  Keyboard,
  Pressable,
  Button
} from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";
import BemVindo from "../src/bemVindo/bemVindo.js"
import Api from "../src/weatherapi/api"
import IMAGES from "../src/images/imageExport/images"

var hours = new Date().getHours()
var min = new Date().getMinutes()
var data = new Date()

//06:00 -> 18:00 = DIA
//18:00 -> 06:00 = NOITE

const imageDia = IMAGES.dia.uri
const imageNoite = IMAGES.noite.uri

console.log(hours, min)


export default function Page() {

  return (

    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <StatusBar style={"light"} backgroundColor="#008DE3" />
      <Image
        source={6 <= hours >= 18 ? imageDia : imageNoite}
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