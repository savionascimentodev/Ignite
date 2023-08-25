import { StatusBar, View } from "react-native"
import { Home } from "./src/screens/Home/"

export default function App() {
  return (
    <View>
      <StatusBar barStyle="default" backgroundColor="#0D0D0D" />
      <Home />
    </View>
  )
}
