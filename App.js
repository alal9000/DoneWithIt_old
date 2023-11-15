import {
  Button,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <Button title="click me" onPress={() => console.log("btn clicked")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
