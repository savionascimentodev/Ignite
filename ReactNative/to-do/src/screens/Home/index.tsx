import { styles } from "./styles"

import { TextInput, Text, TouchableOpacity, View, Image } from "react-native"

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.svg")} />

      <View style={styles.form}>
        <TextInput style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
