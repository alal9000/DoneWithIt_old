import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function Button() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 5
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
    width: "100%"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center"
  }
});
