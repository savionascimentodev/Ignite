import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48
  },
  eventDate: {
    color: "purple",
    fontSize: 16
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    color: "#fff",
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 24,
    color: "#fff"
  }
})
